
function printing_document(headerText, footerText, contentData) {
    console.log("Preparing to print document: ",contentData);
    if (!contentData || typeof contentData !== 'object') {
        alert('Invalid content data passed.');
        return;
    }

    const tbody = document.querySelector("#printPreviewTable tbody");
    tbody.innerHTML = "";

    const flattenedData = flattenData(contentData);

    flattenedData.forEach(({ field, value }) => {
        const tr = document.createElement("tr");
        const th = document.createElement("th");
        th.textContent = toTitleCase(field.replace(/_/g, " "));
        const td = document.createElement("td");
        td.textContent = value;
        tr.appendChild(th);
        tr.appendChild(td);
        tbody.appendChild(tr);
    });

    // Set header and footer
    document.getElementById("previewHeaderText").innerText = headerText || "🧾 Report Preview";
    document.getElementById("previewFooterText").innerText = footerText || "📅 Generated by System";

    // Store for PDF use
    window._previewHeaderText = headerText;
    window._previewFooterText = footerText;
    window._previewContent = flattenedData;

    // Show the modal
    const modal = new bootstrap.Modal(document.getElementById('printPreviewModal'));
    modal.show();
}

function flattenData(data) {
    const result = [];
    for (let key in data) {
        let value = data[key];
        if (value === null || value === undefined || value === "") continue;

        try {
            const parsed = JSON.parse(value);
            if (typeof parsed === "object" && parsed !== null) {
                for (let subKey in parsed) {
                    result.push({ field: `${key}.${subKey}`, value: parsed[subKey] });
                }
                continue;
            }
        } catch (e) {}
        result.push({ field: key, value });
    }
    return result;
}

function toTitleCase(str) {
    return str
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}
/*
async function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const headerText = window._previewHeaderText || "🧾 Report";
    const footerText = window._previewFooterText || "📅 Generated Footer";
    const flattened = window._previewContent || [];

    let y = 20;
    doc.setFontSize(16);
    doc.text(headerText, 105, y, { align: "center" });
    y += 10;

    doc.setFontSize(12);
    flattened.forEach(({ field, value }) => {
        doc.text(`${field.replace(/_/g, " ")}: ${value}`, 10, y);
        y += 8;
        if (y > 280) {
            doc.addPage();
            y = 20;
        }
    });

    doc.setFontSize(10);
    doc.text(footerText, 105, 285, { align: "center" });

    doc.save("report.pdf");
}*/
/*
async function downloadPDF() {
  const jsPDF = window.jspdf?.jsPDF || window.jsPDF;
  if (!jsPDF) {
    alert("PDF library (jsPDF) failed to load.");
    return;
  }

  const doc = new jsPDF("p", "mm", "a4");

  const content = document.querySelector("#printPreviewModal .modal-body");
  if (!content) {
    alert("Preview content not found.");
    return;
  }

  // Capture screenshot of HTML preview
  const canvas = await html2canvas(content, {
    scale: 2, // higher = better resolution
    useCORS: true,
    backgroundColor: "#ffffff"
  });

  const imgData = canvas.toDataURL("image/png");

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  const imgProps = doc.getImageProperties(imgData);
  const imgRatio = imgProps.width / imgProps.height;
  let pdfWidth = pageWidth;
  let pdfHeight = pageWidth / imgRatio;

  if (pdfHeight > pageHeight) {
    pdfHeight = pageHeight;
    pdfWidth = pageHeight * imgRatio;
  }

  const x = (pageWidth - pdfWidth) / 2;
  const y = 10;

  doc.addImage(imgData, "PNG", x, y, pdfWidth, pdfHeight);
  doc.save("preview_report.pdf");
}*/

async function downloadPDF() {
  const jsPDF = window.jspdf?.jsPDF || window.jsPDF;
  if (!jsPDF) {
    alert("PDF library (jsPDF) failed to load.");
    return;
  }

  const doc = new jsPDF("p", "mm", "a4");

  // Clone the preview content into the hidden container
  const preview = document.getElementById("printPreviewContent");
  const cloneContainer = document.getElementById("pdf-render-clone");
  cloneContainer.innerHTML = "";
  const cloned = preview.cloneNode(true);
  cloned.style.width = "800px"; // large width for better quality
  cloneContainer.appendChild(cloned);

  // Render with html2canvas
  const canvas = await html2canvas(cloneContainer, {
    scale: 2,
    useCORS: true,
    backgroundColor: "#ffffff"
  });

  const imgData = canvas.toDataURL("image/png");

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  const imgProps = doc.getImageProperties(imgData);
  const imgRatio = imgProps.width / imgProps.height;

  let pdfWidth = pageWidth;
  let pdfHeight = pageWidth / imgRatio;

  if (pdfHeight > pageHeight) {
    pdfHeight = pageHeight;
    pdfWidth = pageHeight * imgRatio;
  }

  const x = (pageWidth - pdfWidth) / 2;
  const y = 10;

  doc.addImage(imgData, "PNG", x, y, pdfWidth, pdfHeight);
  doc.save("preview_report.pdf");
}


