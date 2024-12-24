import { useEffect, useRef, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
const RESET_TIME = 1 * 30 * 1000;
function MyLineChart() {
  // Lấy thời điểm hiện tại (ms)
  const now = Date.now();

  // 1) Khai báo state các mốc thời gian
  const [startTime, setStartTime] = useState(now);
  const [currentTime, setCurrentTime] = useState(now);
  const [endTime, setEndTime] = useState(now + RESET_TIME);

  // 2) Mốc hiển thị x-axis
  // Ta sẽ tính toán dynamic trong hàm getChartOptions bên dưới.

  // 3) Dữ liệu cho chart (x là datetime, y là giá)
  const [seriesData, setSeriesData] = useState([{ x: now, y: 3385.67 }]);
  const [currentYAnnotation, setCurrentYAnnotation] = useState(3385.67);

  // Dùng ref để không bị dependency “loop” khi update data
  const seriesRef = useRef(seriesData);
  seriesRef.current = seriesData;

  // 4) Cứ mỗi giây, cập nhật currentTime
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // 5) Kiểm tra nếu currentTime >= endTime => endTime cũ trở thành startTime
  //    Rồi set endTime mới = endTime cũ + xxx
  useEffect(() => {
    if (currentTime >= endTime) {
      setStartTime(endTime); // endTime cũ trở thành startTime
      setEndTime(endTime + RESET_TIME); // endTime mới
      setCurrentYAnnotation(seriesData[seriesData.length - 1].y);
    }
  }, [currentTime, endTime,seriesData]);

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

  // Tạo annotations:
  // Current line tại x = currentTime
  // End line tại x = endTime
  // (Horizontal lines, v.v. tuỳ chỉnh thêm)
  const annotations = {
    xaxis: [
      // Current
      {
        x: startTime,
        strokeDashArray: 4,
        borderColor: '#FF9900',
        label: {
          borderColor: '#FF9900',
          style: {
            color: '#fff',
            background: '#FF9900',
          },
          text: 'Current',
        },
      },
      // End
      {
        x: endTime,
        strokeDashArray: 4,
        borderColor: '#FF00FF',
        label: {
          borderColor: '#FF00FF',
          style: {
            color: '#fff',
            background: '#FF00FF',
          },
          text: 'End',
        },
      },
    ],
    yaxis: [
      {
        y: currentYAnnotation,
        strokeDashArray: 4,
        borderColor: '#FFF',
        label: {
          borderColor: '#FFFF',
          style: {
            color: '#fff',
            background: 'none',
          },
          text: 'Current',
        },
      },
    ],
  };

  // Hàm lấy min/max cho chart (time range)
  // currentTime ± 10 phút
  function getChartXAxisRange() {
    const min = currentTime - RESET_TIME;
    const max = currentTime + RESET_TIME;
    return { min, max };
  }

  const { min: xMin, max: xMax } = getChartXAxisRange();

  const chartOptions = {
    chart: {
      type: 'line',
      background: '#0f1319',
      foreColor: '#d9e4dd',
      toolbar: { show: false },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },
    },
    colors: ['#00ff99'],
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    grid: {
      show: true,
      borderColor: '#2d2d2d',
      strokeDashArray: 4,
      xaxis: {
        lines: { show: true },
      },
      yaxis: {
        lines: { show: true },
      },
    },
    xaxis: {
      type: 'datetime',
      min: xMin, // hiển thị từ currentTime - 10'
      max: xMax, // đến currentTime + 10'
      labels: {
        show: true,
        datetimeUTC: false,
        style: {
          colors: '#ccc',
        },
        // Format time hiển thị (tuỳ ý)
        format: 'HH:mm:ss',
      },
      axisBorder: {
        show: true,
        color: '#444',
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          colors: '#ccc',
        },
        formatter: (val: number) => `$${val.toFixed(2)}`,
      },
    },
    tooltip: {
      theme: 'dark',
      x: {
        format: 'HH:mm:ss',
      },
      y: {
        formatter: (val: number) => `$${val.toFixed(2)}`,
      },
    },
    legend: { show: false },
    annotations,
  };

  const chartSeries = [
    {
      name: 'ETH Price',
      data: seriesData,
    },
  ];

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <ReactApexChart
        options={chartOptions as ApexCharts.ApexOptions}
        series={chartSeries}
        type="line"
        height="100%"
      />
    </div>
  );
}

export default MyLineChart;
