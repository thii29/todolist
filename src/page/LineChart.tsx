import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

function MyLineChart() {
  // 1. Thay mảng initialData (10 giá trị) mới:
  const initialData = [
    { x: 0, y: 3301.45 },
    { x: 1, y: 3300.10 },
    { x: 2, y: 3299.20 },
    { x: 3, y: 3302.58 },
    { x: 4, y: 3297.80 },
    { x: 5, y: 3295.12 },
    { x: 6, y: 3300.90 },
    { x: 7, y: 3301.99 },
    { x: 8, y: 3302.63 },
    { x: 9, y: 3303.17 },
  ];

  const [seriesData, setSeriesData] = useState(initialData);

  // 2. Cấu hình chart
  const chartOptions = {
    chart: {
      type: "line",
      background: "#0f1319", // Màu nền tối
      foreColor: "#d9e4dd",  // Màu chữ chung
      toolbar: {
        show: false,         // Tắt thanh toolbar
      },
    },
    // Màu line
    colors: ["#00ff99"],
    stroke: {
      curve: "straight",
      width: 2,
    },
    // 3. Hiển thị grid
    grid: {
      show: true,
      borderColor: "#2d2d2d", // Màu đường kẻ
      strokeDashArray: 4,     // Dạng đứt nét
      xaxis: {
        lines: {
          show: true,         // Hiển thị đường kẻ dọc
        },
      },
      yaxis: {
        lines: {
          show: true,         // Hiển thị đường kẻ ngang
        },
      },
    },
    xaxis: {
      type: "numeric",
      labels: {
        show: true,
        style: {
          colors: "#ccc",     // Màu chữ trục X
        },
      },
      axisBorder: {
        show: true,
        color: "#444",        // Màu viền trục X
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          colors: "#ccc",     // Màu chữ trục Y
        },
        formatter: (val) => `$${val.toFixed(2)}`, // Format giá
      },
    },
    tooltip: {
      theme: "dark",
      x: { show: false },
      y: {
        formatter: (val) => `$${val.toFixed(2)}`,
      },
    },
    legend: {
      show: true,
    },
  };

  const chartSeries = [
    {
      name: "ETH Price",
      data: seriesData,
    },
  ];

  // 4. Mô phỏng cập nhật giá real-time (random) bằng setInterval
  useEffect(() => {
    const interval = setInterval(() => {
      const lastX = seriesData.length;
      // Random giá dao động trong khoảng 3290 - 3310
      const newY = 3290 + Math.random() * 20;
      const newDataPoint = { x: lastX, y: +newY.toFixed(2) };

      setSeriesData((prev) => [...prev, newDataPoint]);
    }, 2000);

    return () => clearInterval(interval);
  }, [seriesData]);

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <ReactApexChart
        options={chartOptions}
        series={chartSeries}
        type="line"
        height="100%"
      />
    </div>
  );
}

export default MyLineChart;
