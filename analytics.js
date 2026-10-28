/**
 * ============================================================================
 * SmartAir - Module 7: Analytics and Decision Support
 * File: analytics.js
 * Vanilla JavaScript Application Logic
 * ============================================================================
 * 
 * Features:
 * 1. Sample demonstration data for airline operations
 * 2. Summary cards (Total Bookings, Total Revenue LKR, Total Flights, Delayed Flights)
 * 3. Interactive Chart.js graphs (Monthly Bookings, Monthly Revenue, Flight Status)
 * 4. Operational reports data table
 * 5. Dashboard filters (Start Date, End Date, Report Type)
 * 6. Functional CSV export
 */

// ============================================================================
// 1. SAMPLE DEMONSTRATION DATA (Clearly labeled as DEMO DATA)
// ============================================================================
const DEMO_RECORDS = [
  {
    id: "REP-2026-001",
    date: "2026-01-08",
    flightNo: "SA-101",
    route: "CMB → DXB (Dubai)",
    reportType: "Bookings",
    description: "Economy & Business Passenger Bookings",
    valueFormatted: "248 Passengers",
    bookings: 248,
    revenueLKR: 32240000,
    flightStatus: "On-Time"
  },
  {
    id: "REP-2026-002",
    date: "2026-01-19",
    flightNo: "SA-204",
    route: "CMB → SIN (Singapore)",
    reportType: "Revenue",
    description: "Passenger Fares & Cargo Revenue",
    valueFormatted: "LKR 38,500,000",
    bookings: 215,
    revenueLKR: 38500000,
    flightStatus: "On-Time"
  },
  {
    id: "REP-2026-003",
    date: "2026-01-27",
    flightNo: "SA-305",
    route: "CMB → LHR (London Heathrow)",
    reportType: "Flight Operations",
    description: "Turnaround Delay Due to Weather",
    valueFormatted: "Delayed (+45 mins)",
    bookings: 290,
    revenueLKR: 65200000,
    flightStatus: "Delayed"
  },
  {
    id: "REP-2026-004",
    date: "2026-02-04",
    flightNo: "SA-102",
    route: "DXB → CMB (Colombo)",
    reportType: "Bookings",
    description: "Inbound Regional Bookings",
    valueFormatted: "230 Passengers",
    bookings: 230,
    revenueLKR: 29900000,
    flightStatus: "On-Time"
  },
  {
    id: "REP-2026-005",
    date: "2026-02-14",
    flightNo: "SA-410",
    route: "CMB → MLE (Male, Maldives)",
    reportType: "Revenue",
    description: "Holiday Route Ticket Sales",
    valueFormatted: "LKR 18,200,000",
    bookings: 160,
    revenueLKR: 18200000,
    flightStatus: "On-Time"
  },
  {
    id: "REP-2026-006",
    date: "2026-02-23",
    flightNo: "SA-501",
    route: "CMB → BKK (Bangkok)",
    reportType: "Flight Operations",
    description: "Baggage Loading Minor Delay",
    valueFormatted: "Delayed (+25 mins)",
    bookings: 195,
    revenueLKR: 24375000,
    flightStatus: "Delayed"
  },
  {
    id: "REP-2026-007",
    date: "2026-03-03",
    flightNo: "SA-306",
    route: "LHR → CMB (Colombo)",
    reportType: "Revenue",
    description: "Long-Haul Premium Cabin Sales",
    valueFormatted: "LKR 72,000,000",
    bookings: 310,
    revenueLKR: 72000000,
    flightStatus: "On-Time"
  },
  {
    id: "REP-2026-008",
    date: "2026-03-12",
    flightNo: "SA-105",
    route: "CMB → MAA (Chennai)",
    reportType: "Bookings",
    description: "Short-Haul Commercial Traffic",
    valueFormatted: "172 Passengers",
    bookings: 172,
    revenueLKR: 12040000,
    flightStatus: "On-Time"
  },
  {
    id: "REP-2026-009",
    date: "2026-03-25",
    flightNo: "SA-620",
    route: "CMB → MEL (Melbourne)",
    reportType: "Flight Operations",
    description: "Air Traffic Clearance Delay",
    valueFormatted: "Delayed (+30 mins)",
    bookings: 285,
    revenueLKR: 68400000,
    flightStatus: "Delayed"
  },
  {
    id: "REP-2026-010",
    date: "2026-04-06",
    flightNo: "SA-205",
    route: "SIN → CMB (Colombo)",
    reportType: "Bookings",
    description: "South East Asia Transit Bookings",
    valueFormatted: "220 Passengers",
    bookings: 220,
    revenueLKR: 35200000,
    flightStatus: "On-Time"
  },
  {
    id: "REP-2026-011",
    date: "2026-04-18",
    flightNo: "SA-412",
    route: "MLE → CMB (Colombo)",
    reportType: "Revenue",
    description: "Shuttle Revenue & Excess Luggage",
    valueFormatted: "LKR 16,800,000",
    bookings: 155,
    revenueLKR: 16800000,
    flightStatus: "On-Time"
  },
  {
    id: "REP-2026-012",
    date: "2026-04-29",
    flightNo: "SA-108",
    route: "CMB → DOH (Doha)",
    reportType: "Flight Operations",
    description: "Unscheduled Maintenance Inspection",
    valueFormatted: "Cancelled (Safety Protocol)",
    bookings: 0,
    revenueLKR: 0,
    flightStatus: "Cancelled"
  },
  {
    id: "REP-2026-013",
    date: "2026-05-09",
    flightNo: "SA-308",
    route: "CMB → CDG (Paris Charles de Gaulle)",
    reportType: "Bookings",
    description: "Summer European Tourist Bookings",
    valueFormatted: "295 Passengers",
    bookings: 295,
    revenueLKR: 67850000,
    flightStatus: "On-Time"
  },
  {
    id: "REP-2026-014",
    date: "2026-05-19",
    flightNo: "SA-210",
    route: "CMB → KUL (Kuala Lumpur)",
    reportType: "Revenue",
    description: "Direct Route Passenger Yield",
    valueFormatted: "LKR 29,400,000",
    bookings: 210,
    revenueLKR: 29400000,
    flightStatus: "On-Time"
  },
  {
    id: "REP-2026-015",
    date: "2026-05-28",
    flightNo: "SA-112",
    route: "CMB → DXB (Dubai)",
    reportType: "Flight Operations",
    description: "Late Connecting Passengers Delay",
    valueFormatted: "Delayed (+20 mins)",
    bookings: 245,
    revenueLKR: 31850000,
    flightStatus: "Delayed"
  },
  {
    id: "REP-2026-016",
    date: "2026-06-05",
    flightNo: "SA-622",
    route: "MEL → CMB (Colombo)",
    reportType: "Revenue",
    description: "Mid-Year Australian Inbound Revenue",
    valueFormatted: "LKR 74,500,000",
    bookings: 310,
    revenueLKR: 74500000,
    flightStatus: "On-Time"
  },
  {
    id: "REP-2026-017",
    date: "2026-06-16",
    flightNo: "SA-502",
    route: "BKK → CMB (Colombo)",
    reportType: "Bookings",
    description: "Regional Business Travel Bookings",
    valueFormatted: "212 Passengers",
    bookings: 212,
    revenueLKR: 26500000,
    flightStatus: "On-Time"
  },
  {
    id: "REP-2026-018",
    date: "2026-06-25",
    flightNo: "SA-415",
    route: "CMB → MLE (Male, Maldives)",
    reportType: "Flight Operations",
    description: "Runway Congestion Delay at Male",
    valueFormatted: "Delayed (+35 mins)",
    bookings: 165,
    revenueLKR: 18975000,
    flightStatus: "Delayed"
  }
];

// Months for chart data aggregation (January to June 2026)
const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

// Currently active filtered records array
let currentFilteredData = [...DEMO_RECORDS];

// Chart.js instances references
let bookingsChart = null;
let revenueChart = null;
let flightStatusChart = null;


// ============================================================================
// 2. DOM ELEMENTS SELECTION
// ============================================================================
const startDateInput = document.getElementById("startDate");
const endDateInput = document.getElementById("endDate");
const reportTypeSelect = document.getElementById("reportType");
const applyFiltersBtn = document.getElementById("applyFiltersBtn");
const resetFiltersBtn = document.getElementById("resetFiltersBtn");
const exportCsvBtn = document.getElementById("exportCsvBtn");

const totalBookingsVal = document.getElementById("totalBookingsVal");
const totalRevenueVal = document.getElementById("totalRevenueVal");
const totalFlightsVal = document.getElementById("totalFlightsVal");
const delayedFlightsVal = document.getElementById("delayedFlightsVal");

const reportsTableBody = document.getElementById("reportsTableBody");
const recordsSummaryText = document.getElementById("recordsSummaryText");


// ============================================================================
// 3. UTILITY HELPER FUNCTIONS
// ============================================================================

/**
 * Formats a numeric value into Sri Lankan Rupees with comma separators
 * Example: 18500000 -> "LKR 18,500,000"
 */
function formatLKR(amount) {
  if (isNaN(amount) || amount === null) return "LKR 0";
  return "LKR " + Number(amount).toLocaleString("en-US");
}

/**
 * Returns the CSS class for styling flight operational status pill
 */
function getStatusClass(status) {
  switch (status) {
    case "On-Time":
      return "status-on-time";
    case "Delayed":
      return "status-delayed";
    case "Cancelled":
      return "status-cancelled";
    default:
      return "";
  }
}


// ============================================================================
// 4. CHART INITIALIZATION FUNCTIONS (Chart.js)
// ============================================================================

/**
 * Initializes the 3 Chart.js graphs with clean light-blue themed styling
 */
function initializeCharts() {
  // Chart 1: Monthly Bookings (Bar Chart)
  const ctxBookings = document.getElementById("monthlyBookingsChart").getContext("2d");
  bookingsChart = new Chart(ctxBookings, {
    type: "bar",
    data: {
      labels: MONTH_NAMES,
      datasets: [{
        label: "Bookings",
        data: [0, 0, 0, 0, 0, 0],
        backgroundColor: "#0284c7", // Light blue accent
        borderColor: "#0369a1",
        borderWidth: 1,
        borderRadius: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return " Bookings: " + context.raw.toLocaleString() + " seats";
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            precision: 0
          },
          grid: {
            color: "#f1f5f9"
          }
        },
        x: {
          grid: {
            display: false
          }
        }
      }
    }
  });

  // Chart 2: Monthly Revenue (Line Chart)
  const ctxRevenue = document.getElementById("monthlyRevenueChart").getContext("2d");
  revenueChart = new Chart(ctxRevenue, {
    type: "line",
    data: {
      labels: MONTH_NAMES,
      datasets: [{
        label: "Revenue (LKR)",
        data: [0, 0, 0, 0, 0, 0],
        borderColor: "#0284c7",
        backgroundColor: "rgba(224, 242, 254, 0.5)", // Light blue fill under line
        borderWidth: 2,
        tension: 0.3, // Smooth curve
        fill: true,
        pointBackgroundColor: "#0284c7",
        pointBorderColor: "#ffffff",
        pointBorderWidth: 2,
        pointRadius: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return " Revenue: " + formatLKR(context.raw);
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function(value) {
              // Format axis in Millions for clean readability
              return "LKR " + (value / 1000000).toFixed(0) + "M";
            }
          },
          grid: {
            color: "#f1f5f9"
          }
        },
        x: {
          grid: {
            display: false
          }
        }
      }
    }
  });

  // Chart 3: Flight Status Breakdown (Doughnut Chart)
  const ctxFlightStatus = document.getElementById("flightStatusChart").getContext("2d");
  flightStatusChart = new Chart(ctxFlightStatus, {
    type: "doughnut",
    data: {
      labels: ["On-Time", "Delayed", "Cancelled"],
      datasets: [{
        data: [0, 0, 0],
        backgroundColor: [
          "#10b981", // Emerald green for On-Time
          "#f59e0b", // Amber for Delayed
          "#ef4444"  // Red for Cancelled
        ],
        borderWidth: 2,
        borderColor: "#ffffff"
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            boxWidth: 12,
            padding: 12,
            font: {
              size: 11
            }
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return " " + context.label + ": " + context.raw + " flights";
            }
          }
        }
      },
      cutout: "60%"
    }
  });
}


// ============================================================================
// 5. DATA AGGREGATION & RENDERING
// ============================================================================

/**
 * Updates summary cards, table, and charts based on currentFilteredData
 */
function renderDashboard() {
  renderSummaryCards();
  renderReportsTable();
  updateCharts();
}

/**
 * Computes and renders the 4 summary statistics cards
 */
function renderSummaryCards() {
  const totalBookings = currentFilteredData.reduce((sum, item) => sum + (item.bookings || 0), 0);
  const totalRevenue = currentFilteredData.reduce((sum, item) => sum + (item.revenueLKR || 0), 0);
  const totalFlights = currentFilteredData.length;
  const delayedFlights = currentFilteredData.filter(item => item.flightStatus === "Delayed").length;

  totalBookingsVal.textContent = totalBookings.toLocaleString();
  totalRevenueVal.textContent = formatLKR(totalRevenue);
  totalFlightsVal.textContent = totalFlights.toString();
  delayedFlightsVal.textContent = delayedFlights.toString();
}

/**
 * Renders data rows into the HTML table
 */
function renderReportsTable() {
  reportsTableBody.innerHTML = "";

  if (currentFilteredData.length === 0) {
    const emptyRow = document.createElement("tr");
    emptyRow.innerHTML = `
      <td colspan="8" class="empty-table-msg">
        No operational records match the selected filter criteria. Try adjusting dates or report categories.
      </td>
    `;
    reportsTableBody.appendChild(emptyRow);
    recordsSummaryText.textContent = "Showing 0 records";
    return;
  }

  currentFilteredData.forEach(record => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><strong>${record.id}</strong></td>
      <td>${record.date}</td>
      <td>${record.flightNo}</td>
      <td>${record.route}</td>
      <td><span class="badge">${record.reportType}</span></td>
      <td>${record.description}</td>
      <td class="text-right"><strong>${record.valueFormatted}</strong></td>
      <td class="text-center">
        <span class="status-pill ${getStatusClass(record.flightStatus)}">${record.flightStatus}</span>
      </td>
    `;
    reportsTableBody.appendChild(row);
  });

  recordsSummaryText.textContent = `Showing ${currentFilteredData.length} of ${DEMO_RECORDS.length} operational records`;
}

/**
 * Updates the datasets of all 3 Chart.js instances
 */
function updateCharts() {
  // Buckets for 6 months (0: Jan, 1: Feb, 2: Mar, 3: Apr, 4: May, 5: Jun)
  const monthlyBookings = [0, 0, 0, 0, 0, 0];
  const monthlyRevenue = [0, 0, 0, 0, 0, 0];

  let onTimeCount = 0;
  let delayedCount = 0;
  let cancelledCount = 0;

  currentFilteredData.forEach(record => {
    // Determine month index reliably from "YYYY-MM-DD" string (0 = Jan, 1 = Feb, etc.)
    const dateParts = record.date.split("-");
    const monthIndex = parseInt(dateParts[1], 10) - 1;

    if (monthIndex >= 0 && monthIndex < 6) {
      monthlyBookings[monthIndex] += (record.bookings || 0);
      monthlyRevenue[monthIndex] += (record.revenueLKR || 0);
    }

    // Status counts
    if (record.flightStatus === "On-Time") onTimeCount++;
    else if (record.flightStatus === "Delayed") delayedCount++;
    else if (record.flightStatus === "Cancelled") cancelledCount++;
  });

  // Update Bar Chart (Monthly Bookings)
  if (bookingsChart) {
    bookingsChart.data.datasets[0].data = monthlyBookings;
    bookingsChart.update();
  }

  // Update Line Chart (Monthly Revenue)
  if (revenueChart) {
    revenueChart.data.datasets[0].data = monthlyRevenue;
    revenueChart.update();
  }

  // Update Doughnut Chart (Flight Status)
  if (flightStatusChart) {
    flightStatusChart.data.datasets[0].data = [onTimeCount, delayedCount, cancelledCount];
    flightStatusChart.update();
  }
}


// ============================================================================
// 6. FILTERING LOGIC
// ============================================================================

/**
 * Applies Start Date, End Date, and Report Type filters to the dataset
 */
function applyFilters() {
  const startDate = startDateInput.value;
  const endDate = endDateInput.value;
  const selectedType = reportTypeSelect.value;

  currentFilteredData = DEMO_RECORDS.filter(record => {
    // Date Range Check (ISO "YYYY-MM-DD" strings compare lexicographically)
    if (startDate && record.date < startDate) return false;
    if (endDate && record.date > endDate) return false;

    // Report Type Check
    if (selectedType !== "ALL" && record.reportType !== selectedType) {
      return false;
    }

    return true;
  });

  renderDashboard();
}

/**
 * Resets all filter inputs back to initial defaults
 */
function resetFilters() {
  startDateInput.value = "2026-01-01";
  endDateInput.value = "2026-06-30";
  reportTypeSelect.value = "ALL";
  currentFilteredData = [...DEMO_RECORDS];
  renderDashboard();
}


// ============================================================================
// 7. CSV EXPORT LOGIC
// ============================================================================

/**
 * Generates and triggers download of the currently filtered report data as a CSV file
 */
function exportReportAsCSV() {
  if (currentFilteredData.length === 0) {
    alert("No records available to export with the current filter settings.");
    return;
  }

  // CSV Column Headers
  const headers = [
    "Record ID",
    "Date",
    "Flight No",
    "Route",
    "Report Type",
    "Metric Description",
    "Value",
    "Bookings Count",
    "Revenue (LKR)",
    "Status"
  ];

  // Helper to escape CSV cell value
  const escapeCSV = (text) => {
    if (text === null || text === undefined) return '""';
    const stringValue = String(text).replace(/"/g, '""');
    return `"${stringValue}"`;
  };

  // Build CSV rows
  const csvRows = [headers.join(",")];

  currentFilteredData.forEach(item => {
    const row = [
      escapeCSV(item.id),
      escapeCSV(item.date),
      escapeCSV(item.flightNo),
      escapeCSV(item.route),
      escapeCSV(item.reportType),
      escapeCSV(item.description),
      escapeCSV(item.valueFormatted),
      escapeCSV(item.bookings),
      escapeCSV(item.revenueLKR),
      escapeCSV(item.flightStatus)
    ];
    csvRows.push(row.join(","));
  });

  // Combine into single CSV string
  const csvString = csvRows.join("\r\n");

  // Create a Blob and trigger download
  const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  
  const today = new Date().toISOString().slice(0, 10);
  link.setAttribute("href", url);
  link.setAttribute("download", `SmartAir_Module7_Analytics_Report_${today}.csv`);
  document.body.appendChild(link);
  
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}


// ============================================================================
// 8. EVENT LISTENERS & INITIALIZATION
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Chart.js objects
  initializeCharts();

  // 2. Initial render with all records
  renderDashboard();

  // 3. Attach filter button events
  applyFiltersBtn.addEventListener("click", applyFilters);
  resetFiltersBtn.addEventListener("click", resetFilters);

  // 4. Attach CSV export button event
  exportCsvBtn.addEventListener("click", exportReportAsCSV);
});
