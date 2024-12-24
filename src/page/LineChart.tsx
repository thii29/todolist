import { useEffect, useMemo, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import {
  DEFAULT_PRICE,
  getChartOptions,
  getChartXAxisRange,
  RESET_TIME,
} from './charOptions';

function MyLineChart() {
  // Lấy thời điểm hiện tại (ms)
  const now = Date.now();

  // 1) Khai báo state các mốc thời gian
  // Cột chú thích bắt đầu - cột chú thích kết thúc
  const [startTime, setStartTime] = useState(now);
  const [endTime, setEndTime] = useState(now + RESET_TIME);

  // 2) Mốc hiển thị x-axis
  // Ta sẽ tính toán dynamic trong hàm getChartOptions bên dưới.
  // 3) Dữ liệu cho chart (x là datetime, y là giá)
  const [seriesData, setSeriesData] = useState([{ x: now, y: DEFAULT_PRICE }]);
  const [currentYAnnotation, setCurrentYAnnotation] = useState(DEFAULT_PRICE);

  const currentTime = useMemo(
    () => seriesData[seriesData.length - 1].x,
    [seriesData]
  );
  const currentExceedPrice = useMemo(
    () => seriesData[seriesData.length - 1].y,
    [seriesData]
  );

  // 5) Kiểm tra nếu currentTime >= endTime => endTime cũ trở thành startTime
  //    Rồi set endTime mới = endTime cũ + xxx
  useEffect(() => {
    if (currentTime >= endTime) {
      setStartTime(endTime); // endTime cũ trở thành startTime
      setEndTime(endTime + RESET_TIME); // endTime mới
      setCurrentYAnnotation(currentExceedPrice);
    }
  }, [endTime, currentTime, currentExceedPrice]);

  // 6) Mô phỏng cập nhật giá (random) mỗi 500ms
  //    Mỗi lần update, x = Date.now(), y = random
  useEffect(() => {
    const priceInterval = setInterval(() => {
      const newPoint = {
        x: Date.now(),
        y: 3290 + Math.random() * 20, // random ~ 3290-3310
      };
      // Append vào series
      setSeriesData((prev) => [...prev, newPoint]);
    }, 500);

    return () => clearInterval(priceInterval);
  }, []);

  // Hàm lấy min/max cho chart (time range)
  const { min: xMin, max: xMax } = getChartXAxisRange(currentTime);

  const chartSeries = [
    {
      name: 'ETH Price',
      data: seriesData,
    },
  ];

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <ReactApexChart
        options={
          getChartOptions({
            xMin,
            xMax,
            startTime,
            endTime,
            currentYAnnotation,
          }) as ApexCharts.ApexOptions
        }
        series={chartSeries}
        type="line"
        height="100%"
      />
    </div>
  );
}

export default MyLineChart;
