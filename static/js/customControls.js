
class VenueControl extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.shadowRoot.innerHTML = `
            <style>
                .venue-container { padding: 10px; border: 1px solid #ccc; border-radius: 5px; background: #f9f9f9; }
                .venue-container label { display: block; margin-top: 10px; font-weight: bold; }
                .venue-container input { width: 100%; padding: 5px; margin-top: 5px; }
            </style>
            <div class="venue-container">
                <label>Building: <input type="text" id="building"></label>
                <label>Street: <input type="text" id="street"></label>
                <label>Area: <input type="text" id="area"></label>
                <label>City: <input type="text" id="city"></label>
                <label>State: <input type="text" id="state"></label>
                <label>Country: <input type="text" id="country"></label>
                <label>URL Address: <input type="url" id="url_address"></label>
                <label>Latitude: <input type="text" id="latitude"></label>
                <label>Longitude: <input type="text" id="longitude"></label>
            </div>
        `;
    }

    // **Populate venue details if data exists**
    set value(venueData) {
        if (!venueData) return;
        if (typeof venueData === "string") venueData = JSON.parse(venueData);

        this.shadowRoot.getElementById("building").value = venueData.building || "";
        this.shadowRoot.getElementById("street").value = venueData.street || "";
        this.shadowRoot.getElementById("area").value = venueData.area || "";
        this.shadowRoot.getElementById("city").value = venueData.city || "";
        this.shadowRoot.getElementById("state").value = venueData.state || "";
        this.shadowRoot.getElementById("country").value = venueData.country || "";
        this.shadowRoot.getElementById("url_address").value = venueData.url_address || "";
        this.shadowRoot.getElementById("latitude").value = venueData.latitude || "";
        this.shadowRoot.getElementById("longitude").value = venueData.longitude || "";
    }

    // **Get venue data as JSON**
    get value() {
        return JSON.stringify({
            building: this.shadowRoot.getElementById("building").value,
            street: this.shadowRoot.getElementById("street").value,
            area: this.shadowRoot.getElementById("area").value,
            city: this.shadowRoot.getElementById("city").value,
            state: this.shadowRoot.getElementById("state").value,
            country: this.shadowRoot.getElementById("country").value,
            url_address: this.shadowRoot.getElementById("url_address").value,
            latitude: this.shadowRoot.getElementById("latitude").value,
            longitude: this.shadowRoot.getElementById("longitude").value
        });
    }
}
// **Register the custom element**
customElements.define("venue-control", VenueControl);

class ScheduleControl extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.schedule = {}; // Object to store schedule data

        this.shadowRoot.innerHTML = `
            <style>
                .schedule-container { padding: 10px; border: 1px solid #ccc; border-radius: 5px; background: #f9f9f9; }
                .date-container { display: flex; justify-content: space-between; margin-bottom: 10px; }
                .date-container label { font-weight: bold; }
                .day-entry { display: flex; align-items: center; margin-bottom: 5px; }
                .day-entry select, .day-entry input { margin-right: 5px; }
                .remove-btn { background: red; color: white; border: none; cursor: pointer; padding: 3px 6px; border-radius: 3px; }
            </style>
            <div class="schedule-container">
                <div class="date-container">
                    <label>Start Date: <input type="date" id="startDate"></label>
                    <label>End Date: <input type="date" id="endDate"></label>
                </div>
                <label>Work Days & Timings:</label>
                <div id="scheduleList"></div>
                <button id="addScheduleBtn">+ Add Work Day</button>
            </div>
        `;

        this.scheduleList = this.shadowRoot.getElementById("scheduleList");
        this.startDateInput = this.shadowRoot.getElementById("startDate");
        this.endDateInput = this.shadowRoot.getElementById("endDate");
        this.shadowRoot.getElementById("addScheduleBtn").addEventListener("click", () => this.addScheduleRow());
    }

    // **✅ Populate schedule if data exists, otherwise prepare for input**
    set value(scheduleData) {
        if (!scheduleData) {
            console.warn("No schedule data provided. Initializing empty fields.");
            return;
        }

        if (typeof scheduleData === "string") {
            try {
                scheduleData = JSON.parse(scheduleData);
            } catch (e) {
                console.error("Invalid JSON schedule data:", e);
                return;
            }
        }

        // Populate dates if available
        if (scheduleData.startDate) this.startDateInput.value = scheduleData.startDate;
        if (scheduleData.endDate) this.endDateInput.value = scheduleData.endDate;

        // Populate work days if available, otherwise leave empty
        this.scheduleList.innerHTML = "";
        if (scheduleData.workDays && Object.keys(scheduleData.workDays).length > 0) {
            for (let day in scheduleData.workDays) {
                scheduleData.workDays[day].forEach(([startTime, endTime]) => {
                    this.addScheduleRow(day, startTime, endTime);
                });
            }
        }
        scheduleData={}
    }

    // **✅ Add a new work day row for input**
    addScheduleRow(day = "", startTime = "", endTime = "") {
        const row = document.createElement("div");
        row.className = "day-entry";

        const daySelect = document.createElement("select");
        ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].forEach((dayName) => {
            const option = document.createElement("option");
            option.value = dayName.toLowerCase();
            option.textContent = dayName;
            if (day === option.value) option.selected = true;
            daySelect.appendChild(option);
        });

        const startInput = document.createElement("input");
        startInput.type = "time";
        startInput.className = "start-time";
        startInput.value = startTime;

        const endInput = document.createElement("input");
        endInput.type = "time";
        endInput.className = "end-time";
        endInput.value = endTime;

        const removeBtn = document.createElement("button");
        removeBtn.className = "remove-btn";
        removeBtn.textContent = "X";
        removeBtn.addEventListener("click", () => this.removeScheduleRow(row));

        row.appendChild(daySelect);
        row.appendChild(startInput);
        row.appendChild(endInput);
        row.appendChild(removeBtn);

        this.scheduleList.appendChild(row);
    }

    // **✅ Remove a schedule entry**
    removeScheduleRow(row) {
        this.scheduleList.removeChild(row);
    }

    // **✅ Get schedule data as JSON**

    get value() {
        let scheduleData = {};
        this.scheduleList.childNodes.forEach((row) => {
            console.log("Row data :::",row.children[0],row.children[1],row.children[2])
            const day = row.querySelector("select")?.value;
            const startTime = row.querySelector(".start-time")?.value;
            const endTime = row.querySelector(".end-time")?.value;
            console.log(day,startTime,endTime);
            if (day && startTime && endTime) {
                if (!scheduleData[day]) scheduleData[day] = [];
                scheduleData[day].push([startTime, endTime]);
            }
        });
        return JSON.stringify({
            startDate: this.shadowRoot.getElementById("startDate").value,
            endDate: this.shadowRoot.getElementById("endDate").value,
            workDays: scheduleData
        });
    }
}

// **✅ Register the custom element**
customElements.define("schedule-control", ScheduleControl);

class AttachmentControl extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = `
            <style>
                .attachment-container { padding: 10px; border: 1px solid #ccc; border-radius: 5px; background: #f9f9f9; text-align: center; }
                
                video, canvas, audio, img { margin-top: 10px; width: 100%; max-width: 300px; display: none; }
                input, select { display: block; margin: 10px auto; align-items: left; }
                .image-wrapper, 
                .video-wrapper,
                .audio-wrapper{
                    position: relative;
                    display: flex;
                    flex-grow: 1;  // Allow elements to expand inside a flex container 
                    justify-content: left;
                    align-items: left;
                   
                }
                .fileWrapper{
                    position: relative;
                    display: flex;
                    flex-grow: 1;  // Allow elements to expand inside a flex container 
                    justify-content: left;
                    align-items: left;
                   
                }
               .delete-fileWrapper-btn {
                    background: rgba(255, 255, 255, 0.8);
                    color: white;
                    border: none;
                    border-radius: 5px;
                    width: 20px;
                    height: 20px;
                    font-size: 12px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0;
                    margin-right: 8px; // Adds space between button and filename 
                    z-index: 10;
                }

                

                .delete-btn {
                    position: absolute;
                    top: 5px;
                    right: 5px;
                    background: rgba(255, 255, 255, 0.8);
                    color: white;
                    border: none;
                    border-radius: 50%;
                    width: 20px;
                    position: absolute;
                    height: 20px;
                    font-size: 12px;
                    cursor: pointer;
                    display: flex;
                    align-items: left;
                    justify-content: left;
                    padding: 0;
                    left: 5px;  // Move the button to the left 
                    top: 5px;
                    z-index: 10;
                    border-radius: 5px;
                }

                .delete-btn:hover {
                    background: rgba(255, 0, 0, 1);
                }
               

                #file_save-as-pdf,
                #image_save-as-pdf,
                #audio_save-as-pdf,
                #video_save-as-pdf {
                    margin-right: 5px;
                }
            </style>
            <div class="attachment-container">
               
                <div id="fileContainer" style="display:none;">
                    <input type="file" id="fileInput" multiple style="display:block;"  style="align-items=left;  text-align=left; ">
                    <div id="fileList"></div>
                    <div id="file_pdf">
                        <!--  <input type="checkbox" id="file_save-as-pdf"> Save as PDF -->
                    </div>
                </div>
                <div id="imageCaptureContainer" style="display:none;">
                    <video autoplay></video>
                    <button id="captureImage"  style="align-items=left;  text-align=left; ">Capture Image</button>
                    <div id="imageList"></div>
                    <div id="image_pdf">
                        <!--  <input type="checkbox" id="image_save-as-pdf"> Save as PDF -->
                    </div>
                </div>

                <div id="recordedAudiosContainer" style="display:none;">
                    <button id="toggleRecording"  style="align-items=left;  text-align=left; ">🎤 Start Recording</button>
                    <audio controls></audio>
                    <div id="audioList"></div>
                    <div id="audio_pdf">
                        <!--  <input type="checkbox" id="audio_save-as-pdf"> Save as PDF -->
                    </div>
                </div>

                <div id="videoRecordContainer" style="display:none;">
                    <video autoplay></video>
                    <button id="toggleVideoRecording"  style="align-items=left;  text-align=left; ">🎬 Start Recording</button>
                    <video id="recordedVideo" controls></video>
                    <div id="videoList"></div>
                    <div id="video_pdf">
                        <!--  <input type="checkbox" id="video_save-as-pdf"> Save as PDF -->
                    </div>
                </div>

                <div id="qrCodeContainer" style="display:none;">
                    <input type="text" id="qrText" placeholder="Enter text for QR">
                    <button id="generateQR">Generate QR Code</button>
                    <div id="qrCode"></div>
                </div>
            </div>


        `;
        this.init();
    }

    init() {
       
        
        this.fileInput = this.shadowRoot.getElementById("fileContainer");
        this.fileList = this.shadowRoot.getElementById("fileList");
        
        this.imageCaptureContainer = this.shadowRoot.getElementById("imageCaptureContainer");
        this.video_image = this.shadowRoot.querySelector("#imageCaptureContainer video");
        this.captureImageBtn = this.shadowRoot.getElementById("captureImage");
        this.imageList = this.shadowRoot.getElementById("imageList");

        this.audioContainer = this.shadowRoot.getElementById("recordedAudiosContainer");
        this.audioButton = this.shadowRoot.getElementById("toggleRecording");
        this.audioElement = this.shadowRoot.querySelector("audio");
        this.audioList = this.shadowRoot.getElementById("audioList");

        this.videoContainer = this.shadowRoot.getElementById("videoRecordContainer");
        this.video = this.shadowRoot.querySelector("#videoRecordContainer video");
        this.videoRecordButton = this.shadowRoot.getElementById("toggleVideoRecording");
        this.recordedVideo = this.shadowRoot.getElementById("recordedVideo");
        this.videoList = this.shadowRoot.getElementById("videoList");
        
        this.captureImageBtn.addEventListener("click", () => this.captureImage());
        this.audioButton.addEventListener("click", () => this.toggleAudioRecording());
        this.videoRecordButton.addEventListener("click", () => this.toggleVideoRecording());

        this.qrCodeContainer = this.shadowRoot.getElementById("qrCodeContainer");
        this.qrCodeDiv = this.shadowRoot.getElementById("qrCode");
       // this.qr_fileInput.addEventListener("change", (event) => this.generateQRCode(event));
    }
        
    // Handle dropdown selection change
    handleSelection(typedata) {
        console.log(typedata)
        //let type = this.attachmentType.value;
        let type = typedata;

        // Hide/show respective input areas
        //this.fileInput.style.display = type === "file" ? "block" : "none";
        this.fileInput.style.display = "block" ;
        this.imageCaptureContainer.style.display = type === "image" ? "block" : "none";
        this.audioContainer.style.display = type === "audio" ? "block" : "none";
        this.videoContainer.style.display = type === "video" ? "block" : "none";

        // Stop the live video feed if a new selection is made
        if (this.mediaStream) {
            this.mediaStream.getTracks().forEach(track => track.stop());
            this.mediaStream = null;
        }

         // Handle file selection
        //if (type === "file") {
            this.shadowRoot.getElementById("fileContainer").addEventListener("change", (event) => {
                this.fileList.innerHTML = ""; // Clear previous file list
                Array.from(event.target.files).forEach((file) => {
                    let fileWrapper = document.createElement("div");
                    fileWrapper.classList.add("fileWrapper");

                    let deleteBtn = document.createElement("button");
                    deleteBtn.textContent = "❌";
                    deleteBtn.classList.add("delete-fileWrapper-btn");
                    deleteBtn.addEventListener("click", () => fileWrapper.remove());

                    let fileName = document.createElement("span");
                    fileName.textContent = file.name;

                    // Append elements in correct order
                    fileWrapper.appendChild(deleteBtn);
                    fileWrapper.appendChild(fileName);
                    
                    
                    this.fileList.appendChild(fileWrapper);
                });
            });
        //}

        // Handle image capture
        if (type === "image") {
            this.shadowRoot.getElementById("fileContainer").addEventListener("change", (event) => {
                this.fileList.innerHTML = ""; // Clear previous file list
                Array.from(event.target.files).forEach((file) => {
                    let fileWrapper = document.createElement("div");
                    fileWrapper.classList.add("fileWrapper");

                    let deleteBtn = document.createElement("button");
                    deleteBtn.textContent = "❌";
                    deleteBtn.classList.add("delete-fileWrapper-btn");
                    deleteBtn.addEventListener("click", () => fileWrapper.remove());

                    let fileName = document.createElement("span");
                    fileName.textContent = file.name;

                    // Append elements in correct order
                    fileWrapper.appendChild(deleteBtn);
                    fileWrapper.appendChild(fileName);
                    
                    
                    this.fileList.appendChild(fileWrapper);
                });
            });
            navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
                this.video_image.srcObject = stream;
                this.video_image.style.display = "block";
                this.mediaStream = stream;
            }).catch(console.error);
        }

        // Handle video capture
        if (type === "video") {
            this.shadowRoot.getElementById("fileContainer").addEventListener("change", (event) => {
                this.fileList.innerHTML = ""; // Clear previous file list
                Array.from(event.target.files).forEach((file) => {
                    let fileWrapper = document.createElement("div");
                    fileWrapper.classList.add("fileWrapper");

                    let deleteBtn = document.createElement("button");
                    deleteBtn.textContent = "❌";
                    deleteBtn.classList.add("delete-fileWrapper-btn");
                    deleteBtn.addEventListener("click", () => fileWrapper.remove());

                    let fileName = document.createElement("span");
                    fileName.textContent = file.name;

                    // Append elements in correct order
                    fileWrapper.appendChild(deleteBtn);
                    fileWrapper.appendChild(fileName);
                    
                    
                    this.fileList.appendChild(fileWrapper);
                });
            });
            navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
                this.video.srcObject = stream;
                this.video.style.display = "block";
                this.mediaStream = stream;
            }).catch(console.error);
        }

        // Handle QR Code selection
        if (type === "qr") {
            this.fileInput.addEventListener("change", () => this.generateQRCode());
        }
    }

    captureImage() {
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");
    canvas.width = this.video_image.videoWidth;
    canvas.height = this.video_image.videoHeight;
    ctx.drawImage(this.video_image, 0, 0, canvas.width, canvas.height);

    let imgWrapper = document.createElement("div");
    imgWrapper.classList.add("image-wrapper");

    let img = document.createElement("img");
    img.src = canvas.toDataURL("image/png");
    img.style.width = "100px";
    img.style.margin = "5px";
    img.style.display = "block"; 

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => imgWrapper.remove());
    imgWrapper.appendChild(deleteBtn);
    imgWrapper.appendChild(img);
    
    this.imageList.appendChild(imgWrapper);
}

    generateQRCode(event) {
            let file = event.target.files[0];
            if (!file) return;
            
            let fileType = file.type.split("/")[0];
            if (fileType === "audio" || fileType === "video") {
                alert("Audio and video files are not supported for QR code generation.");
                return;
            }
            
            let reader = new FileReader();
            reader.onload = () => {
                this.qrCodeContainer.style.display = "block";
                this.qrCodeDiv.innerHTML = "";
                new QRCode(this.qrCodeDiv, {
                    text: reader.result,
                    width: 200,
                    height: 200
                });
            };
            reader.readAsText(file);
        }

    toggleAudioRecording() {
        if (!this.mediaRecorder || this.mediaRecorder.state === "inactive") {
            navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
                this.mediaRecorder = new MediaRecorder(stream);
                this.audioChunks = [];

                this.mediaRecorder.ondataavailable = event => this.audioChunks.push(event.data);
                this.mediaRecorder.onstop = () => {
                    let audioBlob = new Blob(this.audioChunks, { type: "audio/webm" });
                    let audioURL = URL.createObjectURL(audioBlob);

                    let recordedAudiosContainer = document.getElementById("recordedAudiosContainer");
                    if (!recordedAudiosContainer) {
                        recordedAudiosContainer = document.createElement("div");
                        recordedAudiosContainer.id = "recordedAudiosContainer";
                        document.body.appendChild(recordedAudiosContainer);
                    }

                    let audioWrapper = document.createElement("div");
                    audioWrapper.classList.add("audio-wrapper");

                    let recordedAudio = document.createElement("audio");
                    recordedAudio.src = audioURL;
                    recordedAudio.controls = true;
                    recordedAudio.style.display = "block";

                    let deleteBtn = document.createElement("button");
                    deleteBtn.textContent = "❌";
                    deleteBtn.classList.add("delete-btn");
                    deleteBtn.addEventListener("click", () => audioWrapper.remove());
                    audioWrapper.appendChild(deleteBtn);
                    audioWrapper.appendChild(recordedAudio);
                    
                    this.audioList.appendChild(audioWrapper);
                };

                this.mediaRecorder.start();
                this.audioButton.textContent = "🛑 Stop Recording";
            });
        } else {
            this.mediaRecorder.stop();
            this.audioButton.textContent = "🎤 Start Recording";
        }
    }

    toggleVideoRecording() {
        if (!this.videoRecorder || this.videoRecorder.state === "inactive") {
            // Start recording
            navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
                if (!this.mediaStream) {  // Ensure the preview runs only once
                    this.video.srcObject = stream;
                    this.video.style.display = "block";
                    this.mediaStream = stream;
                }
                
                this.videoRecorder = new MediaRecorder(stream);
                this.videoChunks = [];

                this.videoRecorder.ondataavailable = event => this.videoChunks.push(event.data);
                this.videoRecorder.onstop = () => {
                    let videoBlob = new Blob(this.videoChunks, { type: "video/webm" });
                    let videoURL = URL.createObjectURL(videoBlob);

                    let recordedVideosContainer = document.getElementById("recordedVideosContainer");
                    if (!recordedVideosContainer) {
                        recordedVideosContainer = document.createElement("div");
                        recordedVideosContainer.id = "recordedVideosContainer";
                        document.body.appendChild(recordedVideosContainer);
                    }

                    let videoWrapper = document.createElement("div");
                    videoWrapper.classList.add("video-wrapper");

                    let recordedVideo = document.createElement("video");
                    recordedVideo.src = videoURL;
                    recordedVideo.controls = true;
                    recordedVideo.style.display = "block";
                    recordedVideo.style.width = "100%";

                    let deleteBtn = document.createElement("button");
                    deleteBtn.textContent = "❌";
                    deleteBtn.classList.add("delete-btn");
                    deleteBtn.addEventListener("click", () => videoWrapper.remove());

                    videoWrapper.appendChild(deleteBtn);
                    videoWrapper.appendChild(recordedVideo);
                    this.videoList.appendChild(videoWrapper);
                };

                this.videoRecorder.start();
                this.videoRecordButton.textContent = "🛑 Stop Recording";
            }).catch(console.error);
        } else {
            // Stop recording, but keep the live preview ON
            this.videoRecorder.stop();
            this.videoRecordButton.textContent = "🎬 Start Recording";
        }
    }
    
    
}
customElements.define("attachment-control", AttachmentControl);


class Doc_template_Control extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.staticFields = [
      { name: "log", unique: "false", datatype: "string", not_null: "false" },
      { name: "status", unique: "false", datatype: "string", not_null: "false" },
      { name: "affiliation", unique: "false", datatype: "string", not_null: "false" },
      { name: "remarks", unique: "false", datatype: "string", not_null: "false" },
      { name: "description", unique: "false", datatype: "mediumtext", not_null: "false" }
    ];

    this.fields = [];
    this.uniqueConstraints = [];
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          font-family: Arial, sans-serif;
          padding: 16px;
          background: #f9f9f9;
          border: 1px solid #ddd;
          border-radius: 8px;
        }

        h4 {
          margin-top: 24px;
          margin-bottom: 12px;
          font-size: 1.2rem;
          color: #333;
        }

        .section {
          background: #fff;
          padding: 16px;
          border-radius: 8px;
          margin-bottom: 20px;
          box-shadow: 0 1px 4px rgba(0,0,0,0.06);
        }

        .fields-header, .field-group {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr auto;
          gap: 12px;
          align-items: center;
        }

        .fields-header {
          font-weight: bold;
          margin-bottom: 10px;
        }

        .field-group {
          margin-bottom: 10px;
        }

        input, select {
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 14px;
        }

        .add-btn {
          padding: 10px 16px;
          background: #4CAF50;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
        }

        .add-btn:hover {
          background: #45a049;
        }

        .delete-btn {
          padding: 8px 12px;
          background: #f44336;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .delete-btn:hover {
          background: #d32f2f;
        }

        .checkbox-list {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .checkbox-item {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #f1f1f1;
          padding: 6px 12px;
          border-radius: 4px;
        }

        .constraints-card {
          background: #f8f8f8;
          padding: 10px 12px;
          border-radius: 6px;
          margin-bottom: 8px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border: 1px solid #ddd;
        }

        .constraint-labels {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .constraint-label {
          background: #d1e7dd;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 13px;
        }
      </style>

      <div class="section">
        <h4>Field Definitions</h4>
        <div class="fields-header">
          <span>Field Name</span>
          <span>Data Type</span>
          <span>Unique</span>
          <span>Not Null</span>
          <span></span>
        </div>
        <div id="fields-list"></div>
        <button class="add-btn" id="add-field">+ Add Field</button>
      </div>

      <div class="section">
        <h4>Combinatory Unique Constraints</h4>
        <div id="checkbox-list" class="checkbox-list"></div>
        <button class="add-btn" id="add-constraint" style="margin-top: 10px;">+ Add Unique Constraint</button>
        <div id="constraints-list" style="margin-top: 16px;"></div>
      </div>
    `;

    this.shadowRoot.getElementById("add-field").addEventListener("click", () => this.addField());
    this.shadowRoot.getElementById("add-constraint").addEventListener("click", () => this.addConstraint());

    this.renderFields();
    this.renderConstraints();
    this.renderCheckboxList();

    this.dispatchEvent(new CustomEvent('change', { bubbles: true, composed: true }));
  }

  renderCheckboxList() {
    const checkboxList = this.shadowRoot.getElementById("checkbox-list");
    checkboxList.innerHTML = "";
    const allFields = [...this.staticFields, ...this.fields];

    allFields.forEach((field, idx) => {
      const wrapper = document.createElement("label");
      wrapper.className = "checkbox-item";
      wrapper.innerHTML = `
        <input type="checkbox" name="combo-field" value="${field.name}" />
        <span>${field.name}</span>
      `;
      checkboxList.appendChild(wrapper);
    });
  }

  addConstraint() {
    const checkboxes = this.shadowRoot.querySelectorAll("input[name='combo-field']:checked");
    const selected = Array.from(checkboxes).map(cb => cb.value);

    if (selected.length < 2) {
      alert("Select at least two fields.");
      return;
    }

    if (this.uniqueConstraints.some(c => JSON.stringify(c.sort()) === JSON.stringify(selected.sort()))) {
      alert("This combination already exists.");
      return;
    }

    this.uniqueConstraints.push(selected);
    this.renderConstraints();

    // Reset checkboxes
    this.shadowRoot.querySelectorAll("input[name='combo-field']").forEach(cb => cb.checked = false);

    this.dispatchEvent(new CustomEvent('change', { bubbles: true, composed: true }));
  }

  renderConstraints() {
    const container = this.shadowRoot.getElementById("constraints-list");
    container.innerHTML = "";

    if (this.uniqueConstraints.length === 0) {
      container.innerHTML = `<p style="font-style: italic; color: gray;">No constraints added yet.</p>`;
      return;
    }

    this.uniqueConstraints.forEach((group, index) => {
      const div = document.createElement("div");
      div.className = "constraints-card";
      div.innerHTML = `
        <div class="constraint-labels">
          ${group.map(f => `<span class="constraint-label">${f}</span>`).join("")}
        </div>
        <button class="delete-btn" data-index="${index}">Delete</button>
      `;
      div.querySelector("button").addEventListener("click", () => this.deleteConstraint(index));
      container.appendChild(div);
    });
  }

  deleteConstraint(index) {
    this.uniqueConstraints.splice(index, 1);
    this.renderConstraints();
    this.dispatchEvent(new CustomEvent('change', { bubbles: true, composed: true }));
  }

  renderFields() {
    const fieldsList = this.shadowRoot.getElementById("fields-list");
    fieldsList.innerHTML = "";

    this.staticFields.forEach(field => {
      const group = document.createElement("div");
      group.className = "field-group";
      group.innerHTML = `
        <input type="text" value="${field.name}" disabled>
        <select disabled><option>${field.datatype}</option></select>
        <select disabled><option>${field.unique === "true" ? "Yes" : "No"}</option></select>
        <select disabled><option>${field.not_null === "true" ? "Yes" : "No"}</option></select>
        <span></span>
      `;
      fieldsList.appendChild(group);
    });

    this.fields.forEach((field, index) => {
      const group = document.createElement("div");
      group.className = "field-group";
      group.innerHTML = `
        <input type="text" class="field-name" placeholder="Field name" value="${field.name}">
        <select class="field-datatype">
          <option value="string" ${field.datatype === 'string' ? 'selected' : ''}>String</option>
          <option value="number" ${field.datatype === 'number' ? 'selected' : ''}>Number</option>
          <option value="boolean" ${field.datatype === 'boolean' ? 'selected' : ''}>Boolean</option>
          <option value="date" ${field.datatype === 'date' ? 'selected' : ''}>Date</option>
          <option value="mediumtext" ${field.datatype === 'mediumtext' ? 'selected' : ''}>MediumText</option>
        </select>
        <select class="field-unique">
          <option value="true" ${field.unique === 'true' ? 'selected' : ''}>Yes</option>
          <option value="false" ${field.unique === 'false' ? 'selected' : ''}>No</option>
        </select>
        <select class="field-notnull">
          <option value="true" ${field.not_null === 'true' ? 'selected' : ''}>Yes</option>
          <option value="false" ${field.not_null === 'false' ? 'selected' : ''}>No</option>
        </select>
        <button class="delete-btn" data-index="${index}">Delete</button>
      `;

      group.querySelector(".field-name").addEventListener("input", e => {
        this.fields[index].name = e.target.value;
        this.renderCheckboxList();
        this.dispatchEvent(new CustomEvent('change', { bubbles: true, composed: true }));
      });

      group.querySelector(".field-datatype").addEventListener("change", e => {
        this.fields[index].datatype = e.target.value;
        this.dispatchEvent(new CustomEvent('change', { bubbles: true, composed: true }));
      });

      group.querySelector(".field-unique").addEventListener("change", e => {
        this.fields[index].unique = e.target.value;
        this.dispatchEvent(new CustomEvent('change', { bubbles: true, composed: true }));
      });

      group.querySelector(".field-notnull").addEventListener("change", e => {
        this.fields[index].not_null = e.target.value;
        this.dispatchEvent(new CustomEvent('change', { bubbles: true, composed: true }));
      });

      group.querySelector(".delete-btn").addEventListener("click", () => {
        this.deleteField(index);
      });

      fieldsList.appendChild(group);
    });
  }

  addField() {
    this.fields.push({ name: "", unique: "false", datatype: "string", not_null: "false" });
    this.renderFields();
    this.renderCheckboxList();
    this.dispatchEvent(new CustomEvent('change', { bubbles: true, composed: true }));
  }

  deleteField(index) {
    this.fields.splice(index, 1);
    this.renderFields();
    this.renderCheckboxList();
    this.dispatchEvent(new CustomEvent('change', { bubbles: true, composed: true }));
  }

    populateFromTemplate(config) {
    try {
      if (config?.fields && Array.isArray(config.fields)) {
        this.fields = config.fields.filter(f => !this.staticFields.some(sf => sf.name === f.name));
      }
      this.uniqueConstraints = config?.unique_constraints || [];
      this.renderFields();
      this.renderConstraints();
      this.renderCheckboxList();
    } catch (e) {
      console.error("Failed to populate Doc_template_Control from template", e);
    }
  }

  set value(data) {
    try {
      const parsed = typeof data === 'string' ? JSON.parse(data) : data;
      this.populateFromTemplate(parsed);
    } catch (e) {
      console.error("Invalid data format", e);
    }
  }


  get value() {
    return JSON.stringify({
      fields: [...this.staticFields, ...this.fields],
      unique_constraints: this.uniqueConstraints
    });
  }
}

customElements.define('doc-template-control', Doc_template_Control);


class QRControl extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    connectedCallback() {
        this.generateQRCode();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                }
                canvas {
                    margin: 10px 0;
                }
                button {
                    background-color: #007bff;
                    color: white;
                    border: none;
                    padding: 8px 12px;
                    cursor: pointer;
                    border-radius: 5px;
                }
                button:hover {
                    background-color: #0056b3;
                }
            </style>
            <input type="text" id="qrInput" placeholder="Enter text for QR Code">
            <button id="generateBtn">Generate QR Code</button>
            <div id="qrContainer"></div>
        `;

        this.shadowRoot.querySelector('#generateBtn').addEventListener('click', () => this.generateQRCode());
    }

    generateQRCode() {
        const qrContainer = this.shadowRoot.querySelector('#qrContainer');
        qrContainer.innerHTML = ''; // Clear previous QR code
        const qrInput = this.shadowRoot.querySelector('#qrInput').value;
        
        if (!qrInput) {
            alert('Please enter text to generate QR code.');
            return;
        }
        
        new QRCode(qrContainer, {
            text: qrInput,
            width: 128,
            height: 128,
        });
    }
}
customElements.define('qr-control', QRControl);


class FieldAttributeControl extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.jobs = { create: [], list: [], update: [], cancel: { api: '', onSuccess: '' } };
    this.fieldsByDocType = {};
    this.currentDocType = '';
  }

  connectedCallback() {
    this.render();
    this.loadDocTypesFromBackend();
  }

  async loadDocTypesFromBackend() {
    try {
      const templates = await getDocTemplates1({});
      console.log("[DEBUG] Loaded templates:", templates);
      
      // Final result array
      let result = [];

      // Process each API record
      templates.forEach(item => {
          if (item.doc_template) {
              try {
                  const parsed = JSON.parse(item.doc_template);
                  if (parsed.fields && Array.isArray(parsed.fields)) {
                      parsed.fields.forEach(field => {
                          if (field.name && field.datatype) {
                              result.push({
                                  name: field.name,
                                  datatype: field.datatype
                              });
                          }
                      });
                  }
              } catch (e) {
                  console.error("Invalid JSON in doc_template", e);
              }
          }
      });

      console.log(result);

      if (Array.isArray(templates)) {
        this.fieldsByDocType = {};
        const selector = this.shadowRoot.getElementById('docTypeSelector');
        selector.innerHTML = `<option value="">-- Select --</option>`;
        const seen = new Set();

        templates.forEach(tpl => {
          const docType = tpl.doc_type?.trim();
          if (!docType || seen.has(docType)) return;
          seen.add(docType);
          let fields = [];
          try {
            const parsed = tpl.doc_template && JSON.parse(tpl.doc_template);
            if (Array.isArray(parsed?.fields)) {
              fields = parsed.fields.map(f => ({
                seqno: f.seqno ?? 0,
                field: f.field || f.name || "",
                control: f.control || "text",
                trigger: f.trigger || [],
                edit: f.edit ?? true,
                show: f.show ?? true,
                mandatory: f.mandatory ?? true,
                default: f.default || "",
                filter_type: f.filter_type || "",
                filter_default_value: f.filter_default_value || "",
                helper: f.helper || "none",
                lang: f.lang || {
                  english: "", german: "", arabic: "", french: ""
                }
              }));
            }
          } catch (e) {
            console.warn(`[WARN] Invalid JSON for ${docType}:`, tpl.doc_template);
          }

          this.fieldsByDocType[docType] = fields;

          const option = document.createElement("option");
          option.value = docType;
          option.textContent = docType;
          selector.appendChild(option);
        });
      }
    } catch (err) {
      console.error("[ERROR] Could not load doc types:", err);
    }
  }

  populateFromTemplate(templateJson) {
    try {
      const jobKeys = ['create', 'update', 'list', 'cancel'];
      for (const job of jobKeys) {
        const jobData = templateJson?.job?.[job];
        if (!jobData || !Array.isArray(jobData.data)) {
          console.warn(`⚠️ No valid data for job: ${job}`);
          this.jobs[job] = [];
          continue;
        }

        const fields = [];
        for (const section of jobData.data) {
          if (Array.isArray(section.fields)) {
            fields.push(...section.fields);
          }
        }

        fields.sort((a, b) => (a.seqno ?? 0) - (b.seqno ?? 0));
        console.log(`✅ Loaded ${fields.length} fields for job: ${job}`);
        this.jobs[job] = fields;
      }

      // Optional: auto-render the first tab (e.g., 'create')
      const currentJob = this.shadowRoot.querySelector('.job-tab.active')?.dataset.job || 'create';
      this.renderFields(currentJob);

    } catch (err) {
      console.error("❌ Error populating template:", err);
    }
  }


   render() {
    this.shadowRoot.innerHTML = `
      <style>
        table { width: 100%; border-collapse: collapse; margin-bottom: 1rem; }
        th, td { border: 1px solid #ccc; padding: 0.5rem; text-align: left; }
        button { margin: 0.5rem 0.25rem; }
        input, select, textarea { width: 100%; box-sizing: border-box; }
        .drag-handle { cursor: move; text-align: center; }
        tr.dragging { opacity: 0.5; }
      </style>
      <div>
        <label>getDataApi: <input type="text" id="getDataApi" value="config/list_details" /></label><br/>
        <label>key: <input type="text" id="key" value="role_id" /></label><br/>
        <label>attchment_files_path: <input type="text" id="attchment_files_path" value="" /></label><br/>
        <label>Doc Type:
          <select id="docTypeSelector">
            <option value="">-- Select --</option>
          </select>
        </label>
        <label>Job Type:
          <select id="jobSelector">
            <option value="create">Create</option>
            <option value="list">List</option>
            <option value="update">Update</option>
            <option value="cancel">Cancel</option>
          </select>
        </label>
      </div>
      <div>
        <button id="loadJobFields">Load Fields</button>
      </div>
      <div id="cancel-section" style="display:none">
        <label>Cancel API: <input type="text" id="cancelApi" /></label>
        <label>onSuccess: <input type="text" id="cancelOnSuccess" /></label>
        <button id="save-cancel">Save Cancel Config</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>⇅</th><th>Field</th><th>Control</th><th>Edit</th><th>Show</th><th>Mandatory</th>
            <th>Default</th><th>Filter Type</th><th>Filter Default</th><th>Trigger</th>
            <th>Lang (EN)</th><th>Lang (DE)</th><th>Lang (AR)</th><th>Lang (FR)</th><th>Helper</th><th>Remove</th>
          </tr>
        </thead>
        <tbody id="field-body"></tbody>
      </table>
      <button id="add-field">Add Field</button>
      <button id="save-fields">Save Job Fields</button>
      <button id="export-json">Export Config</button>
      <button id="alert-json">Show JSON in Alert</button>
      <pre id="output"></pre>
    `;

    this.shadowRoot.getElementById('add-field').addEventListener('click', () => this.addField());
    this.shadowRoot.getElementById('docTypeSelector').addEventListener('change', (e) => this.populateAllJobs(e.target.value));
    this.shadowRoot.getElementById('loadJobFields').addEventListener('click', () => this.loadFields(this.shadowRoot.getElementById('jobSelector').value));
    this.shadowRoot.getElementById('save-fields').addEventListener('click', () => this.saveFields(this.shadowRoot.getElementById('jobSelector').value));
    this.shadowRoot.getElementById('save-cancel').addEventListener('click', () => this.saveCancelConfig());
    this.shadowRoot.getElementById('export-json').addEventListener('click', () => {
      const config = this.exportConfig();
      this.shadowRoot.getElementById('output').textContent = JSON.stringify(config, null, 2);
    });
    this.shadowRoot.getElementById('alert-json').addEventListener('click', () => {
      const config = this.exportConfig();
      alert(JSON.stringify(config, null, 2));
    });
    this.shadowRoot.getElementById('jobSelector').addEventListener('change', e => {
      const job = e.target.value;
      this.shadowRoot.getElementById('cancel-section').style.display = job === 'cancel' ? 'block' : 'none';
    });
  } 

  get value() {
    return {
      getDataApi: this.shadowRoot.getElementById('getDataApi')?.value || '',
      key: this.shadowRoot.getElementById('key')?.value || '',
      attchment_files_path: this.shadowRoot.getElementById('attchment_files_path')?.value || '',
      job: this.jobs
    };
  }

  set value(val) {
    if (typeof val === "object") {
      this.jobs = val.job || {};
      this.currentDocType = val.doc_type || "";
      this.shadowRoot.getElementById('key').value = val.key || '';
      this.shadowRoot.getElementById('getDataApi').value = val.getDataApi || '';
      this.shadowRoot.getElementById('attchment_files_path').value = val.attchment_files_path || '';
      this.loadFields('create');
    }
  }

  saveCancelConfig() {
    const api = this.shadowRoot.getElementById('cancelApi').value || 'config';
    const onSuccess = this.shadowRoot.getElementById('cancelOnSuccess').value || 'Role_canceled()';
    this.jobs.cancel = { api, onSuccess };
    const jobSelector = this.shadowRoot.getElementById('jobSelector');
    const cancelOption = Array.from(jobSelector.options).find(opt => opt.value === 'cancel');
    if (cancelOption) {
      cancelOption.textContent = `✔️ Cancel`;
    }
  }

  loadFields(job = 'create') {
    const tbody = this.shadowRoot.getElementById('field-body');
    tbody.innerHTML = '';
    if (!Array.isArray(this.jobs[job])) return;
    this.jobs[job].forEach(f => this.addFieldFromObject(f));
  }

  saveFields(job = 'create') {
    this.jobs[job] = this.captureFields();
    const jobSelector = this.shadowRoot.getElementById('jobSelector');
    const selectedOption = Array.from(jobSelector.options).find(opt => opt.value === job);
    if (selectedOption) {
      selectedOption.textContent = `✔️ ${job.charAt(0).toUpperCase() + job.slice(1)}`;
    }
  }

  populateAllJobs(docType) {
    if (!docType) return;
    this.currentDocType = docType;
    const fields = this.fieldsByDocType[docType] || [];
    ['create', 'list', 'update'].forEach(job => {
      this.jobs[job] = JSON.parse(JSON.stringify(fields));
    });
    this.jobs.cancel = { api: "config", onSuccess: "Role_canceled()" };
    this.jobs.field = { api: "field", onSuccess: "field()" };
    this.shadowRoot.getElementById('cancelApi').value = this.jobs.cancel.api;
    this.shadowRoot.getElementById('cancelOnSuccess').value = this.jobs.cancel.onSuccess;
    this.loadFields('create');
  }

  addField(field = "", control = "text", trigger = []) {
    this.addFieldFromObject({
      field,
      control,
      trigger,
      edit: false,  show: false,  mandatory: false,
      default: "",
      filter_type: "textbox",
      filter_default_value: "",
      values: ["textbox", "datetime range", "dropdown"], // options for dropdown filter
      helper: "none",
      lang: { english: "", german: "", arabic: "", french: "" }
    });
}

  addFieldFromObject(obj) {
    const tbody = this.shadowRoot.getElementById('field-body');
    const row = document.createElement('tr');
    row.setAttribute('draggable', true);
    row.classList.add('draggable-row');

    row.innerHTML = `
      <td class="drag-handle">⇅</td>
      <td><input type="text" class="field-name" value="${obj.field || ""}"/></td>
      <td><select class="control">
        <option value="text">text</option>
        <option value="dropdown">dropdown</option>
        <option value="field-attribute-control">field-attribute-control</option>
      </select></td>
      <td><input type="checkbox" class="edit" ${obj.edit ? "checked" : ""}/></td>
      <td><input type="checkbox" class="show" ${obj.show ? "checked" : ""}/></td>
      <td><input type="checkbox" class="mandatory" ${obj.mandatory ? "checked" : ""}/></td>
      <td><input type="text" class="default" value="${obj.default || ""}"/></td>
      <!-- <td><input type="text" class="filter_type" value="${obj.filter_type || ""}"/></td> -->
      <td><select class="filter_type">
        <option value="text">text</option>
        <option value="dropdown">dropdown</option>
        <option value="date-time-range">date-time-range</option>
      </select></td>
      <td><input type="text" class="filter_default_value" value="${obj.filter_default_value || ""}"/></td>
      <td><button class="trigger-btn">⚙️ Configure</button><textarea class="trigger" style="display:none">${JSON.stringify(obj.trigger || [])}</textarea></td>
      <td><input type="text" class="lang-en" value="${obj.lang?.english || ""}"/></td>
      <td><input type="text" class="lang-de" value="${obj.lang?.german || ""}"/></td>
      <td><input type="text" class="lang-ar" value="${obj.lang?.arabic || ""}"/></td>
      <td><input type="text" class="lang-fr" value="${obj.lang?.french || ""}"/></td>
      <td>
        <select class="helper">
          <option value="none">None</option>
          <option value="getcurrentuserdetails">getcurrentuserdetails</option>
          <option value="getresorceCategories">getresorceCategories</option>
          <option value="get_affiliation">get_affiliation</option>
        </select>
      </td>
      <td><button class="remove">X</button></td>
    `;

    row.querySelector('.control').value = obj.control || "text";
    row.querySelector('.helper').value = obj.helper || "none";
    row.querySelector('.remove').addEventListener('click', () => row.remove());
    row.querySelector('.trigger-btn').addEventListener('click', () => {
  const textarea = row.querySelector('.trigger');
  console.log("🟢 Trigger button clicked");

  let existingTriggers = [];

  try {
    existingTriggers = JSON.parse(textarea.value || "[]");
    console.log("✅ Existing triggers parsed:", existingTriggers);
  } catch (e) {
    console.error("❌ Failed to parse existing triggers JSON:", e);
    existingTriggers = [];
  }

  // Open modal and pass current triggers
  openTriggerModal(existingTriggers, (updatedTriggers) => {
    console.log("📝 Updated triggers returned from modal:", updatedTriggers);

    textarea.value = JSON.stringify(updatedTriggers, null, 2);
    console.log("📄 Textarea updated with new triggers");
  });
});



    this.addDragEvents(row);
    tbody.appendChild(row);
  }

    addDragEvents(row) {
    row.addEventListener('dragstart', e => {
      row.classList.add('dragging');
      e.dataTransfer.effectAllowed = 'move';
    });

    row.addEventListener('dragend', () => {
      row.classList.remove('dragging');
    });

    row.addEventListener('dragover', e => {
      e.preventDefault();
      const dragging = this.shadowRoot.querySelector('.dragging');
      if (!dragging || dragging === row) return;
      const tbody = row.parentNode;
      const rows = Array.from(tbody.children);
      const draggingIndex = rows.indexOf(dragging);
      const targetIndex = rows.indexOf(row);
      if (draggingIndex < targetIndex) {
        tbody.insertBefore(dragging, row.nextSibling);
      } else {
        tbody.insertBefore(dragging, row);
      }
    });
  }

  captureFields() {
    const rows = this.shadowRoot.querySelectorAll('#field-body tr');
    return Array.from(rows).map((row, index) => ({
      seqno: index,
      field: row.querySelector('.field-name').value,
      control: row.querySelector('.control').value,
      trigger: (() => {
        try {
          return JSON.parse(row.querySelector('.trigger').value || '[]');
        } catch (e) {
          return [];
        }
      })(),
      edit: row.querySelector('.edit').checked,
      show: row.querySelector('.show').checked,
      mandatory: row.querySelector('.mandatory').checked,
      default: row.querySelector('.default').value,
      filter_type: row.querySelector('.filter_type').value,
      filter_default_value: row.querySelector('.filter_default_value').value,
      helper: row.querySelector('.helper').value,
      lang: {
        english: row.querySelector('.lang-en').value,
        german: row.querySelector('.lang-de').value,
        arabic: row.querySelector('.lang-ar').value,
        french: row.querySelector('.lang-fr').value
      }
    }));
  }

  exportConfig() {
    const job = {};
    Object.keys(this.jobs).forEach(jobType => {
      if (jobType === 'cancel') {
        job[jobType] = {
          api: this.jobs.cancel.api || "config",
          onSuccess: this.jobs.cancel.onSuccess || "Role_canceled()"
        };
      } else {
        const fields = this.jobs[jobType];
        const grouped = {};
        fields.forEach(f => {
          const helper = f.helper || "none";
          if (!grouped[helper]) grouped[helper] = [];
          grouped[helper].push(f);
        });
        const data = Object.entries(grouped).map(([helper, fields]) => ({
          helper,
          fields,
          edit_option: true,
          delete_option: true
        }));
        job[jobType] = {
          roles: ["Admin"],
          data,
          api: `config/${jobType === 'list' ? 'list_details' : jobType === 'update' ? 'modifications' : 'new'}`,
          onSuccess: `Role_${jobType}ed()`
        };
      }
    });
    return {
      getDataApi: this.shadowRoot.getElementById('getDataApi').value,
      key: this.shadowRoot.getElementById('key').value,
      attchment_files_path: this.shadowRoot.getElementById('attchment_files_path').value,
      job
    };
  }


}
customElements.define('field-attribute-control', FieldAttributeControl);

const triggerEvents = [
  "onchange", "oninput", "onfocus", "onblur",
  "onkeydown", "onkeyup", "onkeypress", "onclick", "ondblclick"
];

function getHelperFunctions() {
  if (typeof window.helperFunctionsList === "function") {
    return window.helperFunctionsList();  // your backend-provided function list
  }
  return ["sample_function_1", "sample_function_2"]; // fallback
}

function openTriggerModal(existing, onSave) {
  const modal = new bootstrap.Modal(document.getElementById('triggerModal'));
  const tbody = document.querySelector('#triggerTable tbody');
  tbody.innerHTML = '';

  const createRow = (trigger = {}) => {
    const row = document.createElement('tr');
    const eventSelect = document.createElement('select');
    triggerEvents.forEach(ev => {
      const opt = document.createElement('option');
      opt.value = ev;
      opt.textContent = ev;
      if (trigger.event === ev) opt.selected = true;
      eventSelect.appendChild(opt);
    });

    const funcSelect = document.createElement('select');
    getHelperFunctions().forEach(fn => {
      const opt = document.createElement('option');
      opt.value = fn;
      opt.textContent = fn;
      if (trigger.function === fn) opt.selected = true;
      funcSelect.appendChild(opt);
    });

    const removeBtn = document.createElement('button');
    removeBtn.className = "btn btn-danger btn-sm";
    removeBtn.innerHTML = "&times;";
    removeBtn.onclick = () => row.remove();

    row.appendChild(tdWrap(eventSelect));
    row.appendChild(tdWrap(funcSelect));
    row.appendChild(tdWrap(removeBtn));

    tbody.appendChild(row);
  };

  const tdWrap = (el) => {
    const td = document.createElement('td');
    td.appendChild(el);
    return td;
  };

  existing.forEach(createRow);

  document.getElementById('addTriggerRow').onclick = () => createRow();

  document.getElementById('saveTrigger').onclick = () => {
    const updated = [];
    tbody.querySelectorAll('tr').forEach(row => {
      const [eventSel, funcSel] = row.querySelectorAll('select');
      updated.push({ event: eventSel.value, function: funcSel.value });
    });
    onSave(updated);
    modal.hide();
  };

  modal.show();
}

window.helperFunctionsList = () => {
  return ["tab_onchange_trigger", "tab_onselect_trigger", "validate_input", "submit_form"];
};


function setSelectedOption(selectId, value) {
    const selectElement = document.getElementById(selectId);
    if (selectElement) {
        selectElement.value = value;
    }
}


window.onDocTypeChange = async function (event) {
  const selectedValue = event.target.value;

  const uiTemplateControl = document.getElementById("ui_template");
  if (!uiTemplateControl) {
    console.warn("ui_template field-attribute-control not found");
    return;
  }

  try {
    // Fetch template from backend
    const result = await general_data_fetch(
      domain,
      "options",
      {
        requestor_id: "",
        request_token: "",
        tab: "Document Config",
        type: "Document Registry",
        qry: {
          select_fields: ["doc_template"],
          where_data: { doc_type: selectedValue }
        }
      },
      "POST"
    );

    console.log("Fetched Template Result:", result);

    // Parse and process response
    const rawTemplate = result?.[0]?.doc_template;

    if (!rawTemplate) {
      console.warn("No doc_template found for selected type.");
      uiTemplateControl.value = {
        data: [
          {
            helper: "none",
            fields: [],
            edit_option: true,
            delete_option: true
          }
        ]
      };
      return;
    }

    const parsed = JSON.parse(rawTemplate); // Parse string to object

    // Map fields to simplified UI format (only 'field' name)
    const uiFields = (parsed.fields || []).map(f => ({
      field: f.name || ""
    }));

    // Set value to custom control
    uiTemplateControl.value = {
      data: [
        {
          helper: "none",
          fields: uiFields,
          edit_option: true,
          delete_option: true
        }
      ]
    };

    console.log("Assigned to uiTemplateControl:", uiTemplateControl.value);

  } catch (err) {
    console.error("Failed to load template:", err);
  }
};

/*
class FieldMappingControl extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.mapping = {};
    this.jsonFields = ["name", "age", "site_no", "street", "area", "state", "country"];
    this.htmlTemplate = `
      <div>
        <p>Name: {{fullName}}</p>
        <p>Age Block: {{ageBlock}}</p>
        <p>Address: {{addressLine}}</p>
      </div>
    `;
  }

  connectedCallback() {
    this.render();
    this.createModal();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        .wrapper {
          display: flex;
          gap: 10px;
          align-items: start;
        }
        textarea {
          flex-grow: 1;
          min-height: 80px;
          resize: vertical;
          padding: 10px;
          font-family: monospace;
          font-size: 13px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        button {
          padding: 8px 16px;
          background: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        button:hover {
          background: #0056b3;
        }
      </style>
      <div class="wrapper">
        <textarea id="jsonBox" readonly></textarea>
        <button id="configureBtn">⚙️ Configure</button>
      </div>
    `;

    this.shadowRoot.getElementById("configureBtn").addEventListener("click", () => {
      this.openMappingModal();
    });
  }

  createModal() {
    this.modalId = `mappingModal-${Math.random().toString(36).substring(2, 8)}`;
    const modal = document.createElement("div");
    modal.innerHTML = `
      <div class="modal fade" tabindex="-1" id="${this.modalId}">
        <div class="modal-dialog modal-xl modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Configure Field Mapping</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <template-mapping-control></template-mapping-control>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" id="saveBtn">Save</button>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    this.modalElement = document.getElementById(this.modalId);
    this.bootstrapModal = new bootstrap.Modal(this.modalElement);
  }

  openMappingModal() {
    const control = this.modalElement.querySelector("template-mapping-control");

    if (control) {
      control.data = {
        jsonFields: this.jsonFields,
        htmlTemplate: this.htmlTemplate
      };
    }

    const saveBtn = this.modalElement.querySelector("#saveBtn");
    saveBtn.onclick = () => {
      this.mapping = control.value;
      const jsonStr = JSON.stringify(this.mapping, null, 2);
      this.shadowRoot.getElementById("jsonBox").value = jsonStr;
      this.dispatchEvent(new CustomEvent("change", { detail: this.mapping }));
      this.bootstrapModal.hide();
    };

    this.bootstrapModal.show();
  }

  get value() {
    return this.mapping;
  }

  set value(val) {
    this.mapping = val || {};
    const jsonStr = JSON.stringify(this.mapping, null, 2);
    if (this.shadowRoot) {
      const box = this.shadowRoot.getElementById("jsonBox");
      if (box) box.value = jsonStr;
    }
  }
}

customElements.define("field-mapping-control", FieldMappingControl);
*/

// enhanced-maps-control.js
class MapsControl extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.mapId = 'leaflet-map-' + Math.random().toString(36).substring(7);
    this.map = null;
    this.markers = [];
    this.geocoder = null;
  }

  connectedCallback() {
    this.render();
    this.loadLeaflet(() => this.initMap());
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        /* Import Leaflet CSS directly */
        @import url('https://unpkg.com/leaflet@1.9.4/dist/leaflet.css');
        
        .map-container {
          width: 100%;
          max-width: 800px;
          height: 500px;
          border: 2px solid #ccc;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          background: #f0f0f0;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        
        .map-controls {
          padding: 10px;
          background: #fff;
          border-bottom: 1px solid #ddd;
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          align-items: center;
          position: relative;
          z-index: 1000;
          pointer-events: auto;
          flex-shrink: 0;
          min-height: 50px;
        }
        
        .control-group {
          display: flex;
          gap: 5px;
          align-items: center;
          pointer-events: auto;
          position: relative;
          z-index: 1001;
        }
        
        input {
          padding: 5px 8px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 14px;
          pointer-events: auto;
          z-index: 1002;
          position: relative;
        }
        
        button {
          padding: 5px 12px;
          background: #007cba;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 12px;
          pointer-events: auto;
          z-index: 1002;
          position: relative;
        }
        
        button:hover {
          background: #005a87;
        }
        
        button:disabled {
          background: #ccc;
          cursor: not-allowed;
        }
        
        .map-element {
          flex: 1;
          width: 100%;
          background: #e0e0e0;
          position: relative;
          z-index: 1;
          overflow: hidden;
          min-height: 380px;
          max-height: 380px;
        }
        
        /* Ensure Leaflet tiles render properly */
        .map-element .leaflet-container {
          height: 100% !important;
          width: 100% !important;
          background: #fff;
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          z-index: 1 !important;
        }
        
        .map-element .leaflet-control-container {
          position: absolute !important;
          z-index: 100 !important;
        }
        
        .map-element .leaflet-control-zoom {
          position: absolute !important;
          top: 10px !important;
          left: 10px !important;
          z-index: 101 !important;
        }
        
        .map-element .leaflet-tile {
          max-width: none !important;
        }
        
        .loading {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          color: #666;
        }
        
        label {
          font-size: 12px;
          font-weight: bold;
          color: #333;
        }
        
        .status {
          font-size: 12px;
          color: #666;
          padding: 5px;
          background: #f9f9f9;
          border-top: 1px solid #ddd;
          flex-shrink: 0;
          min-height: 20px;
          z-index: 1000;
          position: relative;
        }

        /* Custom draggable marker styles */
        .custom-marker {
          cursor: grab !important;
        }
        
        .custom-marker:active {
          cursor: grabbing !important;
        }
        
        .dragging .custom-marker {
          cursor: grabbing !important;
        }
      </style>
      
      <div class="map-container">
        <div class="map-controls">
          <div class="control-group">
            <label>Lat:</label>
            <input type="number" id="lat-input" step="any" placeholder="51.505" style="width: 80px;">
          </div>
          <div class="control-group">
            <label>Lng:</label>
            <input type="number" id="lng-input" step="any" placeholder="-0.09" style="width: 80px;">
          </div>
          <button id="goto-coords">Go to Coordinates</button>
          
          <div class="control-group">
            <label>Location:</label>
            <input type="text" id="location-input" placeholder="Enter city or address" style="width: 150px;">
          </div>
          <button id="search-location">Search</button>
          
          <button id="add-marker">Add Marker</button>
          <button id="clear-markers">Clear All</button>
        </div>
        
        <div id="${this.mapId}" class="map-element">
          <div class="loading">Loading interactive map...</div>
        </div>
        
        <div class="status" id="status">Ready - Markers are draggable!</div>
      </div>
    `;
  }

  loadLeaflet(callback) {
    if (!window.L) {
      // Load Leaflet CSS into shadow DOM
      const leafletCss = document.createElement('link');
      leafletCss.rel = 'stylesheet';
      leafletCss.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      leafletCss.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
      leafletCss.crossOrigin = '';
      
      // Also add to document head for global access
      document.head.appendChild(leafletCss.cloneNode(true));
      
      // Add CSS to shadow DOM
      this.shadowRoot.appendChild(leafletCss);

      const leafletScript = document.createElement('script');
      leafletScript.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
      leafletScript.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';
      leafletScript.crossOrigin = '';
      leafletScript.onload = () => {
        // Small delay to ensure CSS is loaded
        setTimeout(callback, 100);
      };
      document.head.appendChild(leafletScript);
    } else {
      callback();
    }
  }

  initMap() {
    try {
      // Initialize map with confined space
      const mapElement = this.shadowRoot.getElementById(this.mapId);
      mapElement.innerHTML = ''; // Clear loading message
      
      // Force map container dimensions and prevent overflow
      mapElement.style.height = '100%';
      mapElement.style.width = '100%';
      mapElement.style.position = 'relative';
      mapElement.style.overflow = 'hidden';
      
      this.map = L.map(mapElement, {
        center: [51.505, -0.09],
        zoom: 13,
        zoomControl: true,
        scrollWheelZoom: true,
        doubleClickZoom: true,
        dragging: true,
        attributionControl: true,
        // Prevent map from expanding beyond container
        maxBoundsViscosity: 1.0
      });

      // Add tile layer with better error handling
      const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
        minZoom: 1,
        tileSize: 256,
        crossOrigin: true
      });

      tileLayer.addTo(this.map);

      // Force map to invalidate size after a short delay and on zoom
      setTimeout(() => {
        if (this.map) {
          this.map.invalidateSize();
          // Ensure map stays within bounds
          this.constrainMapSize();
        }
      }, 100);

      // Add event listeners for zoom to ensure map stays constrained
      this.map.on('zoomend', () => {
        this.constrainMapSize();
      });

      this.map.on('moveend', () => {
        this.constrainMapSize();
      });

      // Add initial marker
      this.addMarker(51.505, -0.09, 'Default Location', 'blue');

      // Setup event listeners
      this.setupEventListeners();

      // Map click event to get coordinates
      this.map.on('click', (e) => {
        const lat = e.latlng.lat.toFixed(6);
        const lng = e.latlng.lng.toFixed(6);
        this.updateStatus(`Clicked: ${lat}, ${lng}`);
        this.shadowRoot.getElementById('lat-input').value = lat;
        this.shadowRoot.getElementById('lng-input').value = lng;
      });

      // Handle tile loading
      tileLayer.on('loading', () => {
        this.updateStatus('Loading map tiles...');
      });

      tileLayer.on('load', () => {
        this.updateStatus('Map loaded successfully. Click on map to get coordinates. Drag markers to move them!');
      });

      tileLayer.on('tileerror', (e) => {
        console.warn('Tile loading error:', e);
        this.updateStatus('Some map tiles failed to load');
      });
      
    } catch (error) {
      console.error('Error initializing map:', error);
      this.updateStatus('Error loading map: ' + error.message);
    }
  }

  constrainMapSize() {
    if (this.map) {
      // Force the map to stay within its container
      const mapElement = this.shadowRoot.getElementById(this.mapId);
      const container = mapElement.querySelector('.leaflet-container');
      
      if (container) {
        container.style.position = 'absolute';
        container.style.top = '0px';
        container.style.left = '0px';
        container.style.width = '100%';
        container.style.height = '100%';
        container.style.zIndex = '1';
      }
      
      // Force size recalculation
      this.map.invalidateSize();
    }
  }

  setupEventListeners() {
    const shadow = this.shadowRoot;
    
    // Prevent event bubbling from controls to map
    const controlsElement = shadow.querySelector('.map-controls');
    controlsElement.addEventListener('click', (e) => {
      e.stopPropagation();
    });
    
    controlsElement.addEventListener('mousedown', (e) => {
      e.stopPropagation();
    });
    
    // Go to coordinates button
    shadow.getElementById('goto-coords').addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      const lat = parseFloat(shadow.getElementById('lat-input').value);
      const lng = parseFloat(shadow.getElementById('lng-input').value);
      
      if (!isNaN(lat) && !isNaN(lng)) {
        this.goToCoordinates(lat, lng);
      } else {
        this.updateStatus('Please enter valid coordinates');
      }
    });

    // Search location button
    shadow.getElementById('search-location').addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      const location = shadow.getElementById('location-input').value.trim();
      if (location) {
        this.searchLocation(location);
      } else {
        this.updateStatus('Please enter a location to search');
      }
    });

    // Add marker button
    shadow.getElementById('add-marker').addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      const lat = parseFloat(shadow.getElementById('lat-input').value);
      const lng = parseFloat(shadow.getElementById('lng-input').value);
      
      if (!isNaN(lat) && !isNaN(lng)) {
        this.addMarker(lat, lng, `Marker at ${lat.toFixed(4)}, ${lng.toFixed(4)}`, 'red');
      } else {
        this.updateStatus('Please enter valid coordinates to add marker');
      }
    });

    // Clear markers button
    shadow.getElementById('clear-markers').addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.clearAllMarkers();
    });

    // Enter key support with event prevention
    shadow.getElementById('lat-input').addEventListener('keypress', (e) => {
      e.stopPropagation();
      if (e.key === 'Enter') {
        e.preventDefault();
        shadow.getElementById('goto-coords').click();
      }
    });
    
    shadow.getElementById('lng-input').addEventListener('keypress', (e) => {
      e.stopPropagation();
      if (e.key === 'Enter') {
        e.preventDefault();
        shadow.getElementById('goto-coords').click();
      }
    });
    
    shadow.getElementById('location-input').addEventListener('keypress', (e) => {
      e.stopPropagation();
      if (e.key === 'Enter') {
        e.preventDefault();
        shadow.getElementById('search-location').click();
      }
    });

    // Prevent input focus issues
    const inputs = shadow.querySelectorAll('input');
    inputs.forEach(input => {
      input.addEventListener('focus', (e) => {
        e.stopPropagation();
      });
      
      input.addEventListener('click', (e) => {
        e.stopPropagation();
      });
    });
  }

  goToCoordinates(lat, lng) {
    if (this.map) {
      this.map.setView([lat, lng], 15);
      this.updateStatus(`Moved to coordinates: ${lat}, ${lng}`);
    }
  }

  async searchLocation(locationName) {
    try {
      this.updateStatus('Searching location...');
      
      // Using OpenStreetMap Nominatim API for geocoding
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(locationName)}&limit=1`
      );
      
      if (!response.ok) {
        throw new Error('Search failed');
      }
      
      const data = await response.json();
      
      if (data && data.length > 0) {
        const result = data[0];
        const lat = parseFloat(result.lat);
        const lng = parseFloat(result.lon);
        
        // Update input fields
        this.shadowRoot.getElementById('lat-input').value = lat.toFixed(6);
        this.shadowRoot.getElementById('lng-input').value = lng.toFixed(6);
        
        // Move map to location
        this.goToCoordinates(lat, lng);
        
        // Add marker
        this.addMarker(lat, lng, result.display_name, 'green');
        
        this.updateStatus(`Found: ${result.display_name}`);
      } else {
        this.updateStatus('Location not found');
      }
    } catch (error) {
      console.error('Geocoding error:', error);
      this.updateStatus('Error searching location');
    }
  }

  addMarker(lat, lng, popupText = '', color = 'blue') {
    if (!this.map) return;

    // Create custom icon based on color
    const iconColors = {
      blue: '#3388ff',
      red: '#ff3333',
      green: '#33ff33',
      orange: '#ff8800',
      purple: '#8833ff'
    };

    const customIcon = L.divIcon({
      html: `<div style="
        background-color: ${iconColors[color] || iconColors.blue};
        width: 20px;
        height: 20px;
        border-radius: 50% 50% 50% 0;
        border: 2px solid white;
        transform: rotate(-45deg);
        box-shadow: 0 2px 4px rgba(0,0,0,0.3);
      "></div>`,
      iconSize: [20, 20],
      iconAnchor: [10, 20],
      className: 'custom-marker'
    });

    // Create draggable marker
    const marker = L.marker([lat, lng], { 
      icon: customIcon,
      draggable: true,
      autoPan: true
    }).addTo(this.map);
    
    // Store original metadata with the marker
    marker.originalData = {
      popupText: popupText,
      color: color,
      createdAt: new Date().toISOString()
    };

    // Create popup content
    const createPopupContent = (marker) => {
      const pos = marker.getLatLng();
      return `
        <div style="min-width: 200px;">
          <strong>${marker.originalData.popupText}</strong><br>
          <small style="color: #666;">Created: ${new Date(marker.originalData.createdAt).toLocaleString()}</small><br>
          <strong>Current Position:</strong><br>
          Lat: ${pos.lat.toFixed(6)}<br>
          Lng: ${pos.lng.toFixed(6)}<br>
          <small style="color: #888; font-style: italic;">Drag marker to move</small>
        </div>
      `;
    };

    // Set initial popup
    if (popupText) {
      marker.bindPopup(createPopupContent(marker));
    }

    // Handle drag events
    marker.on('dragstart', (e) => {
      this.updateStatus('Dragging marker...');
      // Add dragging class to map container for cursor styling
      const mapContainer = this.shadowRoot.querySelector('.map-element');
      mapContainer.classList.add('dragging');
    });

    marker.on('drag', (e) => {
      const newPos = e.target.getLatLng();
      const currentLat = newPos.lat.toFixed(6);
      const currentLng = newPos.lng.toFixed(6);
      
      // Update input fields in real-time during drag
      const latInput = this.shadowRoot.getElementById('lat-input');
      const lngInput = this.shadowRoot.getElementById('lng-input');
      
      if (latInput && lngInput) {
        latInput.value = currentLat;
        lngInput.value = currentLng;
      }
      
      this.updateStatus(`Dragging to: ${newPos.lat.toFixed(4)}, ${newPos.lng.toFixed(4)}`);
      
      // Update popup content in real-time if popup is open
      if (marker.isPopupOpen()) {
        marker.setPopupContent(createPopupContent(marker));
      }
    });

    marker.on('dragend', (e) => {
      const newPos = e.target.getLatLng();
      const finalLat = newPos.lat.toFixed(6);
      const finalLng = newPos.lng.toFixed(6);
      
      // Remove dragging class
      const mapContainer = this.shadowRoot.querySelector('.map-element');
      mapContainer.classList.remove('dragging');
      
      // Ensure input fields are updated with final coordinates
      const latInput = this.shadowRoot.getElementById('lat-input');
      const lngInput = this.shadowRoot.getElementById('lng-input');
      
      if (latInput && lngInput) {
        latInput.value = finalLat;
        lngInput.value = finalLng;
      }
      
      // Update popup content
      marker.setPopupContent(createPopupContent(marker));
      
      // Update status
      this.updateStatus(`Marker moved to: ${finalLat}, ${finalLng}`);
      
      // Trigger custom event for external listeners
      this.dispatchEvent(new CustomEvent('markerMoved', {
        detail: {
          marker: marker,
          newPosition: { lat: parseFloat(finalLat), lng: parseFloat(finalLng) },
          originalData: marker.originalData
        }
      }));
    });

    // Handle click events on marker
    marker.on('click', (e) => {
      const pos = e.target.getLatLng();
      this.shadowRoot.getElementById('lat-input').value = pos.lat.toFixed(6);
      this.shadowRoot.getElementById('lng-input').value = pos.lng.toFixed(6);
      this.updateStatus(`Selected marker at: ${pos.lat.toFixed(4)}, ${pos.lng.toFixed(4)}`);
    });

    this.markers.push(marker);
    this.updateStatus(`Added draggable marker at ${lat.toFixed(4)}, ${lng.toFixed(4)}`);
    
    return marker;
  }

  clearAllMarkers() {
    this.markers.forEach(marker => {
      this.map.removeLayer(marker);
    });
    this.markers = [];
    this.updateStatus('All markers cleared');
  }

  updateStatus(message) {
    const statusElement = this.shadowRoot.getElementById('status');
    if (statusElement) {
      statusElement.textContent = message;
    }
  }

  // Public methods for external use
  setCenter(lat, lng, zoom = 13) {
    if (this.map) {
      this.map.setView([lat, lng], zoom);
    }
  }

  addCustomMarker(lat, lng, options = {}) {
    const { popup = '', color = 'blue', draggable = true } = options;
    return this.addMarker(lat, lng, popup, color);
  }

  getCenter() {
    if (this.map) {
      const center = this.map.getCenter();
      return { lat: center.lat, lng: center.lng };
    }
    return null;
  }

  // Get all marker positions and their metadata
  getAllMarkers() {
    return this.markers.map(marker => {
      const pos = marker.getLatLng();
      return {
        position: { lat: pos.lat, lng: pos.lng },
        originalData: marker.originalData,
        id: marker._leaflet_id
      };
    });
  }

  // Find marker by ID
  getMarkerById(id) {
    return this.markers.find(marker => marker._leaflet_id === id);
  }
}

customElements.define('maps-control', MapsControl);


class VenueLocationControl extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.mapId = 'leaflet-map-' + Math.random().toString(36).substring(7);
        this.map = null;
        this.markers = [];
        this.poiMarkers = []; // New: Store POI markers separately
        this.selectedLocation = null;
        this.selectedPOI = null; // New: Store selected POI data
        this.debugInfo = [];
        
        // New: POI categories configuration
        this.poiCategories = {
            'hotels': { name: 'Hotels', color: '#FF6B6B', query: 'hotel' },
            'hospitals': { name: 'Hospitals', color: '#4ECDC4', query: 'hospital' },
            'restaurants': { name: 'Restaurants', color: '#45B7D1', query: 'restaurant' },
            'movie_theaters': { name: 'Movie Theaters', color: '#96CEB4', query: 'cinema' },
            'gas_stations': { name: 'Gas Stations', color: '#FFEAA7', query: 'fuel' },
            'banks': { name: 'Banks', color: '#DDA0DD', query: 'bank' },
            'schools': { name: 'Schools', color: '#98D8C8', query: 'school' },
            'shopping': { name: 'Shopping Malls', color: '#F7DC6F', query: 'mall' },
            'parks': { name: 'Parks', color: '#82E0AA', query: 'park' },
            'pharmacies': { name: 'Pharmacies', color: '#F1948A', query: 'pharmacy' }
        };
    }

    log(message) {
        console.log('[VenueLocationControl]', message);
        this.debugInfo.push(`${new Date().toLocaleTimeString()}: ${message}`);
        this.updateDebugInfo();
    }

    updateDebugInfo() {
        const debugElement = document.getElementById('debug-info');
        if (debugElement) {
            debugElement.innerHTML = this.debugInfo.slice(-10).join('<br>');
        }
    }

    debugLayout() {
        this.log('=== DEBUG LAYOUT ===');
        
        const container = this.shadowRoot.querySelector('.venue-location-container');
        this.log('Main container:', container ? 'FOUND' : 'NOT FOUND');
        if (container) {
            this.log('Container dimensions:', container.offsetWidth + 'x' + container.offsetHeight);
            this.log('Container display:', getComputedStyle(container).display);
        }
        
        const venueSection = this.shadowRoot.querySelector('.venue-form-section');
        this.log('Venue section:', venueSection ? 'FOUND' : 'NOT FOUND');
        if (venueSection) {
            this.log('Venue dimensions:', venueSection.offsetWidth + 'x' + venueSection.offsetHeight);
        }
        
        const mapsSection = this.shadowRoot.querySelector('.maps-section');
        this.log('Maps section:', mapsSection ? 'FOUND' : 'NOT FOUND');
        if (mapsSection) {
            this.log('Maps dimensions:', mapsSection.offsetWidth + 'x' + mapsSection.offsetHeight);
            this.log('Maps display:', getComputedStyle(mapsSection).display);
        }
        
        const mapContainer = this.shadowRoot.querySelector('.map-container');
        this.log('Map container:', mapContainer ? 'FOUND' : 'NOT FOUND');
        if (mapContainer) {
            this.log('Map container dimensions:', mapContainer.offsetWidth + 'x' + mapContainer.offsetHeight);
        }
        
        const mapElement = this.shadowRoot.getElementById(this.mapId);
        this.log('Map element:', mapElement ? 'FOUND' : 'NOT FOUND');
        if (mapElement) {
            this.log('Map element dimensions:', mapElement.offsetWidth + 'x' + mapElement.offsetHeight);
        }
        
        this.log('=== END DEBUG ===');
    }

    connectedCallback() {
        this.log('Connected to DOM');
        this.render();
        this.debugLayout();
        this.loadLeaflet(() => this.initMap());
    }

    disconnectedCallback(){
      this.destroyMap();
    }

    render() {
        this.log('Rendering component');
        this.shadowRoot.innerHTML = `
            <style>
                /* Import Leaflet CSS directly */
                @import url('https://unpkg.com/leaflet@1.9.4/dist/leaflet.css');
                
                /* Debug borders to see what's happening */
                * {
                    box-sizing: border-box;
                }
                
                .venue-location-container {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    width: 100%;
                    max-width: 1200px;
                    min-height: 600px;
                    font-family: Arial, sans-serif;
                    background: #fff;
                }
                
                .venue-form-section {
                    flex: 0 0 auto;
                    padding: 20px;
                    background: #f9f9f9;
                }
                
                .maps-section {
                    flex: 1;
                    background: #e8f4fd;
                    padding: 20px;
                    min-height: 500px;
                }
                
                .section-title {
                    font-size: 18px;
                    font-weight: bold;
                    margin-bottom: 15px;
                    border-bottom: 2px solid #007cba;
                    padding-bottom: 5px;
                }
                
                .venue-container label {
                    display: block;
                    margin-top: 12px;
                    font-weight: bold;
                    font-size: 14px;
                }
                
                .venue-container input {
                    width: 100%;
                    padding: 8px;
                    margin-top: 5px;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    font-size: 14px;
                }
                
                /* FIXED: Separate controls from map container */
                .map-controls {
                    width: 100%;
                    padding: 10px;
                    background: #ffffff;
                    border: 2px solid #007cba;
                    border-radius: 5px;
                    margin-bottom: 10px;
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                    align-items: center;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
                    z-index: 9999; /* Extremely high z-index */
                    position: relative; /* Ensure it stays in document flow */
                }

                /* New: POI controls styling */
                .poi-controls {
                    width: 100%;
                    padding: 10px;
                    background: #f8f9fa;
                    border: 2px solid #28a745;
                    border-radius: 5px;
                    margin-bottom: 10px;
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                    align-items: center;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
                    z-index: 9998;
                    position: relative;
                }
                
                .poi-controls select {
                    padding: 6px 8px;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    font-size: 14px;
                    background: white;
                    min-width: 150px;
                }
                
                .poi-controls button {
                    padding: 6px 12px;
                    background: #28a745;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    font-size: 12px;
                    font-weight: 500;
                }
                
                .poi-controls button:hover {
                    background: #218838;
                }
                
                .poi-controls button:disabled {
                    background: #6c757d;
                    cursor: not-allowed;
                }
                
                /* Map container without controls inside */
                .map-container {
                    width: 100%;
                    height: 400px;
                    border: 3px solid orange; /* DEBUG */
                    background: #f0f0f0;
                    position: relative;
                    overflow: hidden;
                }
                
                .map-controls input {
                    padding: 5px 8px;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    font-size: 14px;
                    background: white; /* Ensure input backgrounds are solid */
                }
                
                .map-controls button {
                    padding: 5px 12px;
                    background: #007cba;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    font-size: 12px;
                    font-weight: 500;
                }
                
                .control-group {
                    display: flex;
                    gap: 5px;
                    align-items: center;
                    background: #f8f9fa;
                    padding: 4px 8px;
                    border-radius: 4px;
                    border: 1px solid #e9ecef;
                }
                
                .map-controls label {
                    font-size: 12px;
                    font-weight: bold;
                    color: #333;
                    white-space: nowrap;
                }
                
                .map-controls button:hover {
                    background: #005a87;
                }
                
                .send-button {
                    background: #28a745 !important;
                    font-weight: bold;
                }
                
                .send-button:hover {
                    background: #218838 !important;
                }
                
                /* FIXED: Map element takes full container */
                .map-element {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 30px;
                    background: #e0e0e0;
                    border: 2px solid yellow; /* DEBUG */
                    z-index: 1;
                }
                
                /* FIXED: Prevent Leaflet from interfering with controls */
                .map-element .leaflet-container {
                    height: 100% !important;
                    width: 100% !important;
                    position: relative !important;
                    z-index: 1 !important; /* Keep map below controls */
                }
                
                /* Ensure Leaflet controls don't interfere */
                .map-element .leaflet-control-container {
                    z-index: 100 !important; /* Lower than our custom controls */
                }
                
                .map-element .leaflet-tile {
                    max-width: none !important;
                }
                
                /* Prevent map from capturing events on controls area */
                .map-controls * {
                    pointer-events: auto !important;
                }

                .poi-controls * {
                    pointer-events: auto !important;
                }
                
                .loading {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100%;
                    color: #666;
                    font-size: 16px;
                }
                
                /* Status bar at bottom of map */
                .status {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 30px;
                    font-size: 12px;
                    color: #666;
                    padding: 5px 10px;
                    background: #f9f9f9;
                    border-top: 1px solid #ddd;
                    border: 2px solid pink; /* DEBUG */
                    z-index: 100;
                }
                
                .location-info {
                    background: #e8f4fd;
                    padding: 10px;
                    margin: 10px 0;
                    border-radius: 5px;
                    border: 1px solid #b3d9f2;
                    font-size: 13px;
                    display: none;
                }
                
                .location-info.show {
                    display: block;
                }
                
                .location-info strong {
                    color: #0066cc;
                }

                /* New: POI info styling */
                .poi-info {
                    background: #d4edda;
                    padding: 10px;
                    margin: 10px 0;
                    border-radius: 5px;
                    border: 1px solid #c3e6cb;
                    font-size: 13px;
                    display: none;
                }
                
                .poi-info.show {
                    display: block;
                }
                
                .poi-info strong {
                    color: #155724;
                }
            </style>
            
            <div class="venue-location-container">
                <!-- Venue Form Section -->
                <div class="venue-form-section">
                    <div class="section-title">📍 Venue Details</div>
                    <div class="venue-container">
                        <label>Building: <input type="text" id="building"></label>
                        <label>Street: <input type="text" id="street"></label>
                        <label>Area: <input type="text" id="area"></label>
                        <label>City: <input type="text" id="city"></label>
                        <label>State: <input type="text" id="state"></label>
                        <label>Country: <input type="text" id="country"></label>
                        <label>URL Address: <input type="url" id="url_address"></label>
                        <label>Latitude: <input type="text" id="latitude" readonly></label>
                        <label>Longitude: <input type="text" id="longitude" readonly></label>
                    </div>
                    
                    <div class="location-info" id="location-info">
                        <strong>Selected Location:</strong><br>
                        <span id="location-display"></span>
                    </div>

                    <!-- New: POI Information Display -->
                    <div class="poi-info" id="poi-info">
                        <strong>Selected POI:</strong><br>
                        <span id="poi-display"></span>
                    </div>
                </div>
                
                <!-- Maps Section -->
                <div class="maps-section">
                    <div class="section-title">🗺️ Interactive Map</div>
                    
                    <div class="map-container">
                        <div id="${this.mapId}" class="map-element">
                            <div class="loading">🗺️ Loading interactive map...</div>
                        </div>
                        
                        <div class="status" id="status">Ready - Markers are draggable!</div>
                    </div>
                    
                    <!-- FIXED: Controls moved outside and above map container -->
                    <div class="map-controls">
                        <div class="control-group">
                            <label>Lat:</label>
                            <input type="number" id="lat-input" step="any" placeholder="51.505" style="width: 80px;">
                        </div>
                        <div class="control-group">
                            <label>Lng:</label>
                            <input type="number" id="lng-input" step="any" placeholder="-0.09" style="width: 80px;">
                        </div>
                        <button id="goto-coords">Go to Coordinates</button>
                        
                        <div class="control-group">
                            <label>Location:</label>
                            <input type="text" id="location-input" placeholder="Enter city or address" style="width: 150px;">
                        </div>
                        <button id="search-location">Search</button>
                        
                        <button id="add-marker">Add Marker</button>
                        <button id="clear-markers">Clear All</button>
                        <button id="send-to-venue" class="send-button">📤 Send to Venue</button>
                    </div>

                    <!-- New: POI Controls -->
                    <div class="poi-controls">
                        <div class="control-group">
                            <label>Find nearby:</label>
                            <select id="poi-category">
                                <option value="">Select category...</option>
                                ${Object.entries(this.poiCategories).map(([key, category]) => 
                                    `<option value="${key}">${category.name}</option>`
                                ).join('')}
                            </select>
                        </div>
                        <button id="search-poi">Search POIs</button>
                        <button id="clear-poi">Clear POIs</button>
                        <span id="poi-count" style="font-size: 12px; color: #666;"></span>
                    </div>
                </div>
            </div>
        `;
    }
    
    loadLeaflet(callback) {
        if (!window.L) {
            this.log('Loading Leaflet library...');
            
            // Load Leaflet CSS into shadow DOM
            const leafletCss = document.createElement('link');
            leafletCss.rel = 'stylesheet';
            leafletCss.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
            leafletCss.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
            leafletCss.crossOrigin = '';
            
            // Also add to document head for global access
            document.head.appendChild(leafletCss.cloneNode(true));
            
            // Add CSS to shadow DOM
            this.shadowRoot.appendChild(leafletCss);

            const leafletScript = document.createElement('script');
            leafletScript.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
            leafletScript.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';
            leafletScript.crossOrigin = '';
            leafletScript.onload = () => {
                this.log('Leaflet loaded successfully');
                // Small delay to ensure CSS is loaded
                setTimeout(() => {
                    this.log('Initializing map after delay');
                    callback();
                }, 200);
            };
            leafletScript.onerror = (error) => {
                this.log('Error loading Leaflet: ' + error);
                console.error('Error loading Leaflet:', error);
            };
            document.head.appendChild(leafletScript);
        } else {
            this.log('Leaflet already loaded');
            callback();
        }
    }

    initMap(initialLat = null, initialLng = null) {
        try {
            this.log('Starting map initialization');
            
            // Check if map already exists and clean it up
            if (this.map) {
                this.log('Map already exists, cleaning up...');
                try {
                    this.map.remove();
                    this.map = null;
                    this.log('Existing map removed successfully');
                } catch (cleanupError) {
                    console.warn('Error cleaning up existing map:', cleanupError);
                    this.log('Warning: Error during map cleanup');
                }
            }
            
            // Initialize map with confined space
            const mapElement = this.shadowRoot.getElementById(this.mapId);
            if (!mapElement) {
                this.log('Error: Map element not found');
                return;
            }
            
            // Clear any existing Leaflet references on the container
            if (mapElement._leaflet_id) {
                this.log('Clearing existing Leaflet container references');
                delete mapElement._leaflet_id;
            }
            
            mapElement.innerHTML = ''; // Clear loading message
            
            // Force map container dimensions and prevent overflow
            mapElement.style.height = '100%';
            mapElement.style.width = '100%';
            mapElement.style.position = 'relative';
            mapElement.style.overflow = 'hidden';
            
            this.log('Creating Leaflet map instance');
            
            // Use initial coordinates if provided, otherwise use default or pending coordinates
            let centerLat = initialLat || (this.pendingCoordinates?.lat) || 51.505;
            let centerLng = initialLng || (this.pendingCoordinates?.lng) || -0.09;
            
            this.map = L.map(mapElement, {
                center: [centerLat, centerLng],
                zoom: 13,
                zoomControl: true,
                scrollWheelZoom: true,
                doubleClickZoom: true,
                dragging: true,
                attributionControl: true,
                // Prevent map from expanding beyond container
                maxBoundsViscosity: 1.0
            });

            this.log('Map instance created, adding tile layer');

            // Add tile layer with better error handling
            const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                maxZoom: 19,
                minZoom: 1,
                tileSize: 256,
                crossOrigin: true
            });

            tileLayer.addTo(this.map);
            this.log('Tile layer added');

            // Force map to invalidate size after a short delay and on zoom
            setTimeout(() => {
                if (this.map) {
                    this.log('Invalidating map size');
                    this.map.invalidateSize();
                    this.constrainMapSize();
                    
                    // Handle pending coordinates after map is ready
                    if (this.pendingCoordinates) {
                        this.log(`Processing pending coordinates: ${this.pendingCoordinates.lat}, ${this.pendingCoordinates.lng}`);
                        this.goToCoordinates(this.pendingCoordinates.lat, this.pendingCoordinates.lng);
                        this.addMarker(this.pendingCoordinates.lat, this.pendingCoordinates.lng, 'Loaded Venue Location', 'purple');
                        this.pendingCoordinates = null; // Clear pending coordinates
                    }
                    
                    // Dispatch map-ready event after map is fully ready
                    this.dispatchEvent(new CustomEvent('map-ready'));
                    this.log('Map ready event dispatched');
                }
            }, 300);

            // Add event listeners for zoom to ensure map stays constrained
            this.map.on('zoomend', () => {
                this.constrainMapSize();
            });

            this.map.on('moveend', () => {
                this.constrainMapSize();
            });

            // Setup event listeners
            this.setupEventListeners();

            // Map click event to get coordinates
            this.map.on('click', (e) => {
                const lat = e.latlng.lat.toFixed(6);
                const lng = e.latlng.lng.toFixed(6);
                this.updateStatus(`Clicked: ${lat}, ${lng}`);
                this.shadowRoot.getElementById('lat-input').value = lat;
                this.shadowRoot.getElementById('lng-input').value = lng;
                
                this.selectedLocation = {
                    lat: parseFloat(lat),
                    lng: parseFloat(lng),
                    address: `Coordinates: ${lat}, ${lng}`
                };

                this.selectedPOI = null;
                this.shadowRoot.getElementById('poi-info').classList.remove('show');
            });

            // Handle tile loading
            tileLayer.on('loading', () => {
                this.updateStatus('Loading map tiles...');
            });

            tileLayer.on('load', () => {
                this.updateStatus('Map loaded successfully. Click on map to get coordinates. Drag markers to move them!');
                this.log('Map tiles loaded successfully');
            });

            tileLayer.on('tileerror', (e) => {
                console.warn('Tile loading error:', e);
                this.updateStatus('Some map tiles failed to load');
                this.log('Tile loading error occurred');
            });
            
            this.log('Map initialization completed');
            
        } catch (error) {
            console.error('Error initializing map:', error);
            this.log('Error initializing map: ' + error.message);
            this.updateStatus('Error loading map: ' + error.message);
        }
    }

    // Add this method to properly clean up the map
    destroyMap() {
        if (this.map) {
            try {
                this.log('Destroying map instance');
                this.map.remove();
                this.map = null;
                this.log('Map destroyed successfully');
            } catch (error) {
                console.warn('Error destroying map:', error);
                this.log('Warning: Error during map destruction');
            }
        }
    }

    constrainMapSize() {
        if (this.map) {
            // Force the map to stay within its container
            const mapElement = this.shadowRoot.getElementById(this.mapId);
            const container = mapElement?.querySelector('.leaflet-container');
            
            if (container) {
                container.style.position = 'absolute';
                container.style.top = '0px';
                container.style.left = '0px';
                container.style.width = '100%';
                container.style.height = '100%';
                container.style.zIndex = '1';
            }
            
            // Force size recalculation
            this.map.invalidateSize();
        }
    }

    setupEventListeners() {
        this.log('Setting up event listeners');
        const shadow = this.shadowRoot;
        
        // Go to coordinates button
        shadow.getElementById('goto-coords').addEventListener('click', (e) => {
            e.preventDefault();
            const lat = parseFloat(shadow.getElementById('lat-input').value);
            const lng = parseFloat(shadow.getElementById('lng-input').value);
            
            if (!isNaN(lat) && !isNaN(lng)) {
                this.goToCoordinates(lat, lng);
                this.selectedLocation = {
                    lat: lat,
                    lng: lng,
                    address: `Coordinates: ${lat.toFixed(6)}, ${lng.toFixed(6)}`
                };
            } else {
                this.updateStatus('Please enter valid coordinates');
            }
        });

        // Search location button
        shadow.getElementById('search-location').addEventListener('click', (e) => {
            e.preventDefault();
            const location = shadow.getElementById('location-input').value.trim();
            if (location) {
                this.searchLocation(location);
            } else {
                this.updateStatus('Please enter a location to search');
            }
        });

        // Add marker button
        shadow.getElementById('add-marker').addEventListener('click', (e) => {
            e.preventDefault();
            const lat = parseFloat(shadow.getElementById('lat-input').value);
            const lng = parseFloat(shadow.getElementById('lng-input').value);
            
            if (!isNaN(lat) && !isNaN(lng)) {
                this.addMarker(lat, lng, `Marker at ${lat.toFixed(4)}, ${lng.toFixed(4)}`, 'red');
                this.selectedLocation = {
                    lat: lat,
                    lng: lng,
                    address: `Marker: ${lat.toFixed(6)}, ${lng.toFixed(6)}`
                };
            } else {
                this.updateStatus('Please enter valid coordinates to add marker');
            }
        });

        // Clear markers button
        shadow.getElementById('clear-markers').addEventListener('click', (e) => {
            e.preventDefault();
            this.clearAllMarkers();
        });

        // Send to Venue button
        shadow.getElementById('send-to-venue').addEventListener('click', (e) => {
            e.preventDefault();
            this.sendToVenue();
        });

        // New: POI search button
        shadow.getElementById('search-poi').addEventListener('click', (e) => {
            e.preventDefault();
            const category = shadow.getElementById('poi-category').value;
            if (category) {
                this.searchPOIs(category);
            } else {
                this.updateStatus('Please select a POI category');
            }
        });

        // New: Clear POI button
        shadow.getElementById('clear-poi').addEventListener('click', (e) => {
            e.preventDefault();
            this.clearPOIMarkers();
        });

        // Enter key support
        shadow.getElementById('lat-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                shadow.getElementById('goto-coords').click();
            }
        });
        
        shadow.getElementById('lng-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                shadow.getElementById('goto-coords').click();
            }
        });
        
        shadow.getElementById('location-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                shadow.getElementById('search-location').click();
            }
        });
    }

    async searchPOIs(category) {
        if (!this.map) {
            this.updateStatus('Map not ready for POI search');
            return;
        }

        try {
            this.updateStatus(`Searching for ${this.poiCategories[category].name}...`);
            
            // Get current map bounds
            const bounds = this.map.getBounds();
            const bbox = `${bounds.getSouth()},${bounds.getWest()},${bounds.getNorth()},${bounds.getEast()}`;
            
            // Search using Overpass API for better POI results
            const query = this.buildOverpassQuery(category, bbox);
            const response = await fetch('https://overpass-api.de/api/interpreter', {
                method: 'POST',
                body: query
            });
            
            if (!response.ok) {
                throw new Error('POI search failed');
            }
            
            const data = await response.json();
            
            // Clear existing POI markers
            this.clearPOIMarkers();
            
            // Add new POI markers
            let addedCount = 0;
            const maxMarkers = 100; // Limit to avoid performance issues
            
            for (const element of data.elements) {
                if (addedCount >= maxMarkers) break;
                
                if (element.lat && element.lon) {
                    const poi = {
                        lat: element.lat,
                        lng: element.lon,
                        name: element.tags?.name || `${this.poiCategories[category].name} ${addedCount + 1}`,
                        type: category,
                        address: this.formatAddress(element.tags),
                        phone: element.tags?.phone || '',
                        website: element.tags?.website || '',
                        opening_hours: element.tags?.opening_hours || '',
                        amenity: element.tags?.amenity || '',
                        brand: element.tags?.brand || '',
                        cuisine: element.tags?.cuisine || '',
                        tags: element.tags
                    };
                    
                    this.addPOIMarker(poi);
                    addedCount++;
                }
            }
            
            this.updateStatus(`Found ${addedCount} ${this.poiCategories[category].name.toLowerCase()}`);
            this.shadowRoot.getElementById('poi-count').textContent = `${addedCount} items found`;
            
        } catch (error) {
            console.error('POI search error:', error);
            this.updateStatus('Error searching for POIs: ' + error.message);
        }
    }

    // Add the missing buildOverpassQuery method
    buildOverpassQuery(category, bbox) {
        const categoryConfig = this.poiCategories[category];
        let query = '';
        
        // Build different queries based on category
        switch (category) {
            case 'hotels':
                query = `
                    [out:json][timeout:25];
                    (
                      node["tourism"="hotel"](${bbox});
                      way["tourism"="hotel"](${bbox});
                      node["tourism"="motel"](${bbox});
                      way["tourism"="motel"](${bbox});
                    );
                    out center;
                `;
                break;
            case 'hospitals':
                query = `
                    [out:json][timeout:25];
                    (
                      node["amenity"="hospital"](${bbox});
                      way["amenity"="hospital"](${bbox});
                      node["amenity"="clinic"](${bbox});
                      way["amenity"="clinic"](${bbox});
                    );
                    out center;
                `;
                break;
            case 'restaurants':
                query = `
                    [out:json][timeout:25];
                    (
                      node["amenity"="restaurant"](${bbox});
                      way["amenity"="restaurant"](${bbox});
                      node["amenity"="fast_food"](${bbox});
                      way["amenity"="fast_food"](${bbox});
                    );
                    out center;
                `;
                break;
            case 'movie_theaters':
                query = `
                    [out:json][timeout:25];
                    (
                      node["amenity"="cinema"](${bbox});
                      way["amenity"="cinema"](${bbox});
                    );
                    out center;
                `;
                break;
            case 'gas_stations':
                query = `
                    [out:json][timeout:25];
                    (
                      node["amenity"="fuel"](${bbox});
                      way["amenity"="fuel"](${bbox});
                    );
                    out center;
                `;
                break;
            case 'banks':
                query = `
                    [out:json][timeout:25];
                    (
                      node["amenity"="bank"](${bbox});
                      way["amenity"="bank"](${bbox});
                      node["amenity"="atm"](${bbox});
                    );
                    out center;
                `;
                break;
            case 'schools':
                query = `
                    [out:json][timeout:25];
                    (
                      node["amenity"="school"](${bbox});
                      way["amenity"="school"](${bbox});
                      node["amenity"="university"](${bbox});
                      way["amenity"="university"](${bbox});
                    );
                    out center;
                `;
                break;
            case 'shopping':
                query = `
                    [out:json][timeout:25];
                    (
                      node["shop"="mall"](${bbox});
                      way["shop"="mall"](${bbox});
                      node["shop"="supermarket"](${bbox});
                      way["shop"="supermarket"](${bbox});
                    );
                    out center;
                `;
                break;
            case 'parks':
                query = `
                    [out:json][timeout:25];
                    (
                      node["leisure"="park"](${bbox});
                      way["leisure"="park"](${bbox});
                      node["leisure"="garden"](${bbox});
                      way["leisure"="garden"](${bbox});
                    );
                    out center;
                `;
                break;
            case 'pharmacies':
                query = `
                    [out:json][timeout:25];
                    (
                      node["amenity"="pharmacy"](${bbox});
                      way["amenity"="pharmacy"](${bbox});
                    );
                    out center;
                `;
                break;
            default:
                query = `
                    [out:json][timeout:25];
                    (
                      node["amenity"="${categoryConfig.query}"](${bbox});
                      way["amenity"="${categoryConfig.query}"](${bbox});
                    );
                    out center;
                `;
        }
        
        return query;
    }

    // Add the missing formatAddress method
    formatAddress(tags) {
        if (!tags) return '';
        
        const parts = [];
        if (tags['addr:housenumber']) parts.push(tags['addr:housenumber']);
        if (tags['addr:street']) parts.push(tags['addr:street']);
        if (tags['addr:city']) parts.push(tags['addr:city']);
        if (tags['addr:state']) parts.push(tags['addr:state']);
        if (tags['addr:postcode']) parts.push(tags['addr:postcode']);
        
        return parts.join(', ') || '';
    }

    // Add the missing addPOIMarker method
    addPOIMarker(poi) {
        if (!this.map) return;
        
        const categoryConfig = this.poiCategories[poi.type];
        const color = categoryConfig.color;
        
        // Create custom icon with category color
        const poiIcon = L.divIcon({
            className: 'poi-marker',
            html: `<div style="background-color: ${color}; width: 20px; height: 20px; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 4px rgba(0,0,0,0.5);"></div>`,
            iconSize: [20, 20],
            iconAnchor: [10, 10]
        });
        
        const marker = L.marker([poi.lat, poi.lng], {
            icon: poiIcon,
            draggable: true
        }).addTo(this.map);
        
        // Create popup content with POI details
        const popupContent = `
            <div style="min-width: 200px;">
                <h4 style="margin: 0 0 8px 0; color: ${color};">${poi.name}</h4>
                <p style="margin: 4px 0; font-size: 12px;"><strong>Type:</strong> ${categoryConfig.name}</p>
                ${poi.address ? `<p style="margin: 4px 0; font-size: 12px;"><strong>Address:</strong> ${poi.address}</p>` : ''}
                ${poi.phone ? `<p style="margin: 4px 0; font-size: 12px;"><strong>Phone:</strong> ${poi.phone}</p>` : ''}
                ${poi.website ? `<p style="margin: 4px 0; font-size: 12px;"><strong>Website:</strong> <a href="${poi.website}" target="_blank">${poi.website}</a></p>` : ''}
                ${poi.opening_hours ? `<p style="margin: 4px 0; font-size: 12px;"><strong>Hours:</strong> ${poi.opening_hours}</p>` : ''}
                ${poi.cuisine ? `<p style="margin: 4px 0; font-size: 12px;"><strong>Cuisine:</strong> ${poi.cuisine}</p>` : ''}
                ${poi.brand ? `<p style="margin: 4px 0; font-size: 12px;"><strong>Brand:</strong> ${poi.brand}</p>` : ''}
                <p style="margin: 4px 0; font-size: 11px; color: #666;"><strong>Coordinates:</strong> ${poi.lat.toFixed(6)}, ${poi.lng.toFixed(6)}</p>
            </div>
        `;
        
        marker.bindPopup(popupContent);
        
        // Handle marker click
        marker.on('click', () => {
            this.selectedPOI = poi;
            this.selectedLocation = {
                lat: poi.lat,
                lng: poi.lng,
                address: poi.address || `${poi.name} - ${categoryConfig.name}`
            };
            
            // Update coordinate inputs
            this.shadowRoot.getElementById('lat-input').value = poi.lat.toFixed(6);
            this.shadowRoot.getElementById('lng-input').value = poi.lng.toFixed(6);
            
            // Show POI info
            this.showPOIInfo(poi);
            
            this.updateStatus(`Selected: ${poi.name} (${categoryConfig.name})`);
        });
        
        // Store POI data with marker
        marker.poiData = poi;
        this.poiMarkers.push(marker);
    }

    // Add the missing showPOIInfo method
    showPOIInfo(poi) {
        const poiInfo = this.shadowRoot.getElementById('poi-info');
        const poiDisplay = this.shadowRoot.getElementById('poi-display');
        
        const categoryConfig = this.poiCategories[poi.type];
        
        let infoHtml = `
            <strong style="color: ${categoryConfig.color};">${poi.name}</strong><br>
            <strong>Type:</strong> ${categoryConfig.name}<br>
            <strong>Coordinates:</strong> ${poi.lat.toFixed(6)}, ${poi.lng.toFixed(6)}<br>
        `;
        
        if (poi.address) infoHtml += `<strong>Address:</strong> ${poi.address}<br>`;
        if (poi.phone) infoHtml += `<strong>Phone:</strong> ${poi.phone}<br>`;
        if (poi.website) infoHtml += `<strong>Website:</strong> <a href="${poi.website}" target="_blank">${poi.website}</a><br>`;
        if (poi.opening_hours) infoHtml += `<strong>Hours:</strong> ${poi.opening_hours}<br>`;
        if (poi.cuisine) infoHtml += `<strong>Cuisine:</strong> ${poi.cuisine}<br>`;
        if (poi.brand) infoHtml += `<strong>Brand:</strong> ${poi.brand}<br>`;
        
        poiDisplay.innerHTML = infoHtml;
        poiInfo.classList.add('show');
    }

    // Add the missing clearPOIMarkers method
    clearPOIMarkers() {
        if (this.poiMarkers && this.poiMarkers.length > 0) {
            this.poiMarkers.forEach(marker => {
                this.map.removeLayer(marker);
            });
            this.poiMarkers = [];
            this.selectedPOI = null;
            this.shadowRoot.getElementById('poi-info').classList.remove('show');
            this.shadowRoot.getElementById('poi-count').textContent = '';
            this.updateStatus('POI markers cleared');
        }
    }

    sendToVenue() {
        const shadow = this.shadowRoot;
        const lat = shadow.getElementById('lat-input').value;
        const lng = shadow.getElementById('lng-input').value;
        
        console.log('=== SEND TO VENUE DEBUG ===');
        console.log('Selected POI:', this.selectedPOI);
        console.log('Latitude:', lat);
        console.log('Longitude:', lng);
        
        if (!lat || !lng) {
            this.updateStatus('Please select a location first (click on map, search, or add marker)');
            return;
        }
        
        shadow.getElementById('latitude').value = lat;
        shadow.getElementById('longitude').value = lng;
        
        // Handle POI data - populate venue data with POI information
        if (this.selectedPOI) {
            const poi = this.selectedPOI;
            console.log('Processing POI:', poi);
            
            // Set building name to POI name
            const buildingValue = poi.name || '';
            shadow.getElementById('building').value = buildingValue;
            console.log('Set building to:', buildingValue);
            
            // Try to populate address fields from POI data
            if (poi.address) {
                console.log('POI address:', poi.address);
                const addressParts = poi.address.split(', ');
                console.log('Address parts:', addressParts);
                
                if (addressParts.length > 0) {
                    const streetValue = addressParts[0] || '';
                    const areaValue = addressParts[1] || '';
                    const cityValue = addressParts[2] || '';
                    
                    shadow.getElementById('street').value = streetValue;
                    shadow.getElementById('area').value = areaValue;
                    shadow.getElementById('city').value = cityValue;
                    
                    console.log('Set street to:', streetValue);
                    console.log('Set area to:', areaValue);
                    console.log('Set city to:', cityValue);
                }
            }
            
            // Set website if available
            if (poi.website) {
                shadow.getElementById('url_address').value = poi.website;
                console.log('Set website to:', poi.website);
            }
            
            // Verify the fields were actually set
            console.log('=== VERIFICATION ===');
            console.log('Building field after setting:', shadow.getElementById('building').value);
            console.log('Street field after setting:', shadow.getElementById('street').value);
            console.log('Area field after setting:', shadow.getElementById('area').value);
            console.log('City field after setting:', shadow.getElementById('city').value);
            console.log('URL field after setting:', shadow.getElementById('url_address').value);
            
        } else {
            console.log('No POI selected');
        }
        
        console.log('=== END SEND TO VENUE DEBUG ===');
        
        this.updateStatus('Location data sent to venue form!');
    }

    parseAndFillLocationData(displayName, searchResult) {
        const shadow = this.shadowRoot;
        const parts = displayName.split(',').map(part => part.trim());
        
        if (parts.length >= 1) {
            let building = '';
            let street = '';
            let area = '';
            let city = '';
            let state = '';
            let country = '';
            
            if (parts.length > 0) country = parts[parts.length - 1];
            if (parts.length > 1) state = parts[parts.length - 2];
            if (parts.length > 2) city = parts[parts.length - 3];
            if (parts.length > 3) area = parts[parts.length - 4];
            if (parts.length > 4) street = parts[parts.length - 5];
            if (parts.length > 5) building = parts.slice(0, parts.length - 5).join(', ');
            
            if (!shadow.getElementById('building').value && building) shadow.getElementById('building').value = building;
            if (!shadow.getElementById('street').value && street) shadow.getElementById('street').value = street;
            if (!shadow.getElementById('area').value && area) shadow.getElementById('area').value = area;
            if (!shadow.getElementById('city').value && city) shadow.getElementById('city').value = city;
            if (!shadow.getElementById('state').value && state) shadow.getElementById('state').value = state;
            if (!shadow.getElementById('country').value && country) shadow.getElementById('country').value = country;
        }
    }

    goToCoordinates(lat, lng) {
        if (this.map) {
            this.map.setView([lat, lng], 15);
            this.updateStatus(`Moved to coordinates: ${lat}, ${lng}`);
            this.log(`Map moved to: ${lat}, ${lng}`);
        }
    }

    async searchLocation(locationName) {
        try {
            this.updateStatus('Searching location...');
            this.log(`Searching for: ${locationName}`);
            
            const response = await fetch(
                `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(locationName)}&limit=1`
            );
            
            if (!response.ok) {
                throw new Error('Search failed');
            }
            
            const data = await response.json();
            
            if (data && data.length > 0) {
                const result = data[0];
                const lat = parseFloat(result.lat);
                const lng = parseFloat(result.lon);
                
                this.shadowRoot.getElementById('lat-input').value = lat.toFixed(6);
                this.shadowRoot.getElementById('lng-input').value = lng.toFixed(6);
                
                this.goToCoordinates(lat, lng);
                this.addMarker(lat, lng, result.display_name, 'green');
                
                this.selectedLocation = {
                    lat: lat,
                    lng: lng,
                    address: result.display_name,
                    searchResult: result
                };
                
                this.updateStatus(`Found: ${result.display_name}`);
                this.log(`Search successful: ${result.display_name}`);
            } else {
                this.updateStatus('Location not found');
                this.log('Search returned no results');
            }
        } catch (error) {
            this.log(`Search error: ${error.message}`);
            console.error('Geocoding error:', error);
            this.updateStatus('Error searching location');
        }
    }

    addMarker(lat, lng, popupText = '', color = 'blue') {
        if (!this.map) {
            this.log('Cannot add marker: map not initialized');
            return;
        }

        const iconColors = {
            blue: '#3388ff',
            red: '#ff3333',
            green: '#33ff33',
            orange: '#ff8800',
            purple: '#8833ff'
        };

        const customIcon = L.divIcon({
            html: `<div style="
                background-color: ${iconColors[color] || iconColors.blue};
                width: 20px;
                height: 20px;
                border-radius: 50% 50% 50% 0;
                border: 2px solid white;
                transform: rotate(-45deg);
                box-shadow: 0 2px 4px rgba(0,0,0,0.3);
            "></div>`,
            iconSize: [20, 20],
            iconAnchor: [10, 20],
            className: 'custom-marker'
        });

        const marker = L.marker([lat, lng], { 
            icon: customIcon,
            draggable: true
        }).addTo(this.map);
        
        // Function to create popup content with current coordinates
        const createPopupContent = (latitude, longitude, text) => {
            return `
                <div style="min-width: 200px;">
                    <strong>${text}</strong><br>
                    <strong>Position:</strong><br>
                    Lat: ${latitude.toFixed(6)}<br>
                    Lng: ${longitude.toFixed(6)}
                </div>
            `;
        };
        
        if (popupText) {
            marker.bindPopup(createPopupContent(lat, lng, popupText));
        }

        // Handle marker click
        marker.on('click', (e) => {
            const pos = e.target.getLatLng();
            this.shadowRoot.getElementById('lat-input').value = pos.lat.toFixed(6);
            this.shadowRoot.getElementById('lng-input').value = pos.lng.toFixed(6);
            this.updateStatus(`Selected marker at: ${pos.lat.toFixed(4)}, ${pos.lng.toFixed(4)}`);
            
            this.selectedLocation = {
                lat: pos.lat,
                lng: pos.lng,
                address: `Marker: ${pos.lat.toFixed(6)}, ${pos.lng.toFixed(6)}`
            };
        });

        // Handle drag start
        marker.on('dragstart', (e) => {
            this.log('Marker drag started');
            this.updateStatus('Dragging marker...');
        });

        // Handle drag (real-time updates during dragging)
        marker.on('drag', (e) => {
            const newPos = e.target.getLatLng();
            const newLat = newPos.lat;
            const newLng = newPos.lng;
            
            // Update input fields in real-time
            this.shadowRoot.getElementById('lat-input').value = newLat.toFixed(6);
            this.shadowRoot.getElementById('lng-input').value = newLng.toFixed(6);
            
            // Update status
            this.updateStatus(`Dragging: ${newLat.toFixed(6)}, ${newLng.toFixed(6)}`);
        });

        // Handle drag end
        marker.on('dragend', (e) => {
            const newPos = e.target.getLatLng();
            const newLat = newPos.lat;
            const newLng = newPos.lng;
            
            this.log(`Marker dragged to: ${newLat}, ${newLng}`);
            
            // Update input fields
            this.shadowRoot.getElementById('lat-input').value = newLat.toFixed(6);
            this.shadowRoot.getElementById('lng-input').value = newLng.toFixed(6);
            
            // Update the marker's popup content with new coordinates
            if (popupText) {
                const updatedContent = createPopupContent(newLat, newLng, popupText);
                marker.setPopupContent(updatedContent);
            }
            
            // Update selected location
            this.selectedLocation = {
                lat: newLat,
                lng: newLng,
                address: `Dragged to: ${newLat.toFixed(6)}, ${newLng.toFixed(6)}`
            };
            
            // Update status
            this.updateStatus(`Marker moved to: ${newLat.toFixed(6)}, ${newLng.toFixed(6)}`);
            
            // Update the latitude and longitude fields in the form as well
            this.shadowRoot.getElementById('latitude').value = newLat.toFixed(6);
            this.shadowRoot.getElementById('longitude').value = newLng.toFixed(6);
            
            this.log(`Updated marker popup and form fields with new coordinates`);
        });

        this.markers.push(marker);
        this.updateStatus(`Added marker at ${lat.toFixed(4)}, ${lng.toFixed(4)}`);
        this.log(`Added ${color} marker at ${lat}, ${lng}`);
        
        return marker;
    }

    clearAllMarkers() {
        this.markers.forEach(marker => {
            this.map.removeLayer(marker);
        });
        this.markers = [];
        this.selectedLocation = null;
        this.updateStatus('All markers cleared');
        this.log('All markers cleared');
    }

    updateStatus(message) {
        const statusElement = this.shadowRoot.getElementById('status');
        if (statusElement) {
            statusElement.textContent = message;
        }
        this.log(`Status: ${message}`);
    }

    addModalMarker(lat, lng, popupText = '', color = 'blue',iconStyle = 'default') {
        // const iconStyle = document.getElementById('iconDropdown')?.value || 'default';

        let html = '';

        switch (iconStyle) {
            case 'circle':
                html = `<div style="
                    background-color: ${color};
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    border: 2px solid white;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.3);">
                </div>`;
                break;
            case 'square':
                html = `<div style="
                    background-color: ${color};
                    width: 20px;
                    height: 20px;
                    border: 2px solid white;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.3);">
                </div>`;
                break;
            case 'star':
                html = `<div style="
                    font-size: 20px;
                    color: ${color};">
                    ⭐
                </div>`;
                break;
            case 'emoji':
                html = `<div style="font-size: 22px;">🚩</div>`;
                break;
            default: // default pin style
                html = `<div style="
                    background-color: ${color};
                    width: 20px;
                    height: 20px;
                    border-radius: 50% 50% 50% 0;
                    border: 2px solid white;
                    transform: rotate(-45deg);
                    box-shadow: 0 2px 4px rgba(0,0,0,0.3);">
                </div>`;
                break;
        }

        const icon = L.divIcon({
            html,
            iconSize: [20, 20],
            iconAnchor: [10, 20],
            className: 'custom-marker'
        });

        const marker = L.marker([lat, lng], {
            icon,
            draggable: false
        }).addTo(this.modalMap);

        if (popupText) marker.bindPopup(popupText);
        return marker;
    }
    
    showMultiVenueModalSeparate(dataList) {
        if (!Array.isArray(dataList) || dataList.length === 0) {
            this.log('No data provided for multi-marker modal.');
            return;
        }

        console.log('showMultiVenueModalSeparate called with data:', dataList);

        const dropdown = document.getElementById('columnDropdown');
        if (dropdown && dataList.length > 0) {
            const rawRow = dataList[0]._originalRow || {};
            console.log("RawRow:",rawRow);
            const keys = Object.keys(rawRow);

            dropdown.innerHTML = keys.map(key => 
                `<option value="${key}">${key}</option>`
            ).join('');

            console.log('Dropdown populated with DB column keys:', keys);
        }
        const dropdown1 = document.getElementById('columnIconDropdown');
        if (dropdown1 && dataList.length > 0) {
            const rawRow = dataList[0]._originalRow || {};
            console.log("RawRow:",rawRow);
            const keys = Object.keys(rawRow);

            dropdown1.innerHTML = keys.map(key => 
                `<option value="${key}">${key}</option>`
            ).join('');

            console.log('Dropdown1 populated with DB column keys:', keys);
        }

        // Get the separate map modal
        let mapModal = document.getElementById('mapViewModal');
        
        // If the modal doesn't exist, create it dynamically
        if (!mapModal) {
            console.log('Creating map modal dynamically...');
            
            // Updated modal creation section in showMultiVenueModalSeparate function
            const modalHTML = `
                <div class="modal fade" id="mapViewModal" tabindex="-1" role="dialog">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <div class="w-100">
                                    <div class="d-flex justify-content-between align-items-center mb-3">
                                        <h4 class="modal-title mb-0">Selected Locations Map</h4>
                                        <div class="d-flex gap-2">
                                            <button type="button" class="btn btn-sm btn-outline-secondary" onclick="toggleModalFullscreen(this)">
                                                <i class="fa fa-expand"></i>
                                            </button>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                    </div>
                                    
                                    <!-- Dropdown Controls Section -->
                                    <div class="row g-3">
                                        <div class="col-md-6">
                                            <label class="form-label fw-bold small">Color Map</label>
                                            <select id="columnDropdown" class="form-select form-select-sm">
                                                <option value="">Select column for colors...</option>
                                            </select>
                                        </div>
                                        <div class="col-md-6">
                                            <label class="form-label fw-bold small">Icon Map</label>
                                            <select id="columnIconDropdown" class="form-select form-select-sm">
                                                <option value="">Select column for icons...</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="modal-body">
                                <div id="map-view-container" style="height: 500px; width: 100%; background-color: #f0f0f0; border: 1px solid #ccc;">
                                    <div style="text-align: center; padding: 20px;">Loading map...</div>
                                </div>
                            </div>
                            
                            <div class="modal-footer">
                                <div class="w-100">
                                    <!-- Color Code Panel -->
                                    <div class="mb-3">
                                        <h6 class="fw-bold mb-2">Color & Icon Legend</h6>
                                        <div class="row g-2">
                                            <div class="col-md-6">
                                                <div class="card">
                                                    <div class="card-header py-1">
                                                        <small class="fw-bold">Color Mapping</small>
                                                    </div>
                                                    <div class="card-body p-2">
                                                        <div id="colorLegend" style="max-height: 120px; overflow-y: auto; font-size: 11px;">
                                                            <small class="text-muted">Select a color column to view mappings</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="card">
                                                    <div class="card-header py-1">
                                                        <small class="fw-bold">Icon Mapping</small>
                                                    </div>
                                                    <div class="card-body p-2">
                                                        <div id="iconLegend" style="max-height: 120px; overflow-y: auto; font-size: 11px;">
                                                            <small class="text-muted">Select an icon column to view mappings</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <!-- Close Button -->
                                    <div class="text-end">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            // Add modal to body
            document.body.insertAdjacentHTML('beforeend', modalHTML);
            mapModal = document.getElementById('mapViewModal');
        }

        // Destroy existing map if it exists
        if (this.modalMap) {
            this.modalMap.remove();
            this.modalMap = null;
            console.log('Previous modal map destroyed');
        }

        // Show the modal
        const bootstrapModal = new bootstrap.Modal(mapModal);
        
        let selectedColorColumn = null;
        let selectedIconColumn = null;

        if (dropdown) {
            dropdown.onchange = () => {
                selectedColorColumn = dropdown.value;
                this.populateModalMarkers(dataList, selectedColorColumn, selectedIconColumn);
            };
            selectedColorColumn = dropdown.value; // Initial
        }

        if (dropdown1) {
            dropdown1.onchange = () => {
                selectedIconColumn = dropdown1.value;
                this.populateModalMarkers(dataList, selectedColorColumn, selectedIconColumn);
            };
            selectedIconColumn = dropdown1.value; // Initial
        }

        // Listen for when modal is fully shown
        const onModalShown = () => {
            console.log('Map modal fully shown, loading Leaflet...');
            const mapContainer = document.getElementById('map-view-container');
            if (!mapContainer) {
                console.error('Map container not found');
                return;
            }
            
            // Use your existing loadLeaflet function
            this.loadLeaflet(() => {
                console.log('Leaflet loaded, initializing map...');
                
                try {
                    // Clear loading message
                    mapContainer.innerHTML = '';
                    
                    // Create new map instance
                    this.modalMap = L.map('map-view-container', {
                        preferCanvas: false,
                        attributionControl: true,
                        zoomControl: true
                    }).setView([20.5937, 78.9629], 5);

                    console.log('Map instance created');

                    // Add tile layer
                    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        attribution: '© OpenStreetMap contributors',
                        maxZoom: 19
                    }).addTo(this.modalMap);

                    console.log('Tile layer added');

                    // Force map to recognize its container size
                    setTimeout(() => {
                        this.modalMap.invalidateSize();
                        console.log('Map size invalidated');
                        
                        // Populate markers after map is ready
                        this.populateModalMarkers(dataList,selectedColorColumn,selectedIconColumn);
                    }, 200);

                } catch (error) {
                    console.error('Error initializing map:', error);
                    mapContainer.innerHTML = '<div style="text-align: center; padding: 20px; color: red;">Error loading map: ' + error.message + '</div>';
                }
            });
        };

        // const iconDropdown = document.getElementById('iconDropdown');
        // if (iconDropdown) {
        //     iconDropdown.onchange = () => {
        //         if (latestSelectedColumn) {
        //             this.populateModalMarkers(dataList, latestSelectedColumn);
        //         }
        //     };
        // }

        // Handle modal close event to cleanup
        const onModalHidden = () => {
            console.log('Map modal hidden, cleaning up...');
            if (this.modalMap) {
                this.modalMap.remove();
                this.modalMap = null;
                console.log('Modal map cleaned up');
            }
            
            // Reset container content
            const mapContainer = document.getElementById('map-view-container');
            if (mapContainer) {
                mapContainer.innerHTML = '<div style="text-align: center; padding: 20px;">Loading map...</div>';
            }
            
            // Remove event listeners
            mapModal.removeEventListener('shown.bs.modal', onModalShown);
            mapModal.removeEventListener('hidden.bs.modal', onModalHidden);
        };

        // Add event listeners
        mapModal.addEventListener('shown.bs.modal', onModalShown, { once: true });
        mapModal.addEventListener('hidden.bs.modal', onModalHidden, { once: true });

        // Show the modal
        bootstrapModal.show();
        console.log('Map modal shown');
    }

    // Updated populateModalMarkers function with legend updates
    populateModalMarkers(dataList, colorColumn, iconColumn) {
        if (!this.modalMap) return;

        if (this.modalMarkers) {
            this.modalMarkers.forEach(marker => this.modalMap.removeLayer(marker));
        }
        this.modalMarkers = [];

        // Initialize persistent color and icon maps if they don't exist or if colorColumn changed
        if (!this.persistentColorMap || this.lastColorColumn !== colorColumn) {
            this.persistentColorMap = {};
            this.usedColors = new Set();
            this.lastColorColumn = colorColumn;
            console.log('Initialized new color mapping for column:', colorColumn);
        }

        // Initialize persistent icon map if it doesn't exist or if iconColumn changed
        if (!this.persistentIconMap || this.lastIconColumn !== iconColumn) {
            this.persistentIconMap = {};
            this.lastIconColumn = iconColumn;
            console.log('Initialized new icon mapping for column:', iconColumn);
        }

        // Extended icon options with Font Awesome icons
        const iconShapes = [
            'circle', 'square', 'triangle', 'diamond', 'star',
            'fa-heart', 'fa-bolt', 'fa-fire', 'fa-hospital', 'fa-school',
            'fa-building', 'fa-truck', 'fa-car', 'fa-tree', 'fa-user',
            'fa-users', 'fa-wrench', 'fa-shopping-cart', 'fa-dog','fa-plus', 'fa-times'
        ];

        const getColor = () => {
            // Predefined colors with their names
            const namedColors = [
                { hex: '#FF6B6B', name: 'Coral Red' },
                { hex: '#4ECDC4', name: 'Turquoise' },
                { hex: '#45B7D1', name: 'Sky Blue' },
                { hex: '#96CEB4', name: 'Mint Green' },
                { hex: '#FFEAA7', name: 'Light Yellow' },
                { hex: '#DDA0DD', name: 'Plum' },
                { hex: '#98D8C8', name: 'Aqua' },
                { hex: '#F7DC6F', name: 'Banana Yellow' },
                { hex: '#BB8FCE', name: 'Light Purple' },
                { hex: '#85C1E9', name: 'Light Blue' },
                { hex: '#F8C471', name: 'Peach' },
                { hex: '#82E0AA', name: 'Light Green' },
                { hex: '#F1948A', name: 'Salmon' },
                { hex: '#D2B4DE', name: 'Lavender' },
                { hex: '#AED6F1', name: 'Powder Blue' },
                { hex: '#A3E4D7', name: 'Sea Green' },
                { hex: '#F9E79F', name: 'Cream' },
                { hex: '#FADBD8', name: 'Rose' },
                { hex: '#FF8C69', name: 'Orange' },
                { hex: '#20B2AA', name: 'Teal' }
            ];

            // Find available colors (not used yet)
            const availableColors = namedColors.filter(colorObj => !this.usedColors.has(colorObj.hex));
            
            let selectedColor;
            
            if (availableColors.length > 0) {
                // Pick a random color from available named colors
                selectedColor = availableColors[Math.floor(Math.random() * availableColors.length)];
            } else {
                // Fallback to random color generation if all named colors are used
                let randomHex;
                do {
                    randomHex = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase();
                } while (this.usedColors.has(randomHex));
                
                selectedColor = { hex: randomHex, name: 'Custom Color' };
            }
            
            this.usedColors.add(selectedColor.hex);
            return selectedColor;
        };

        const createDivIcon = (color, shape) => {
            let html = '';
            
            // Check if it's a Font Awesome icon
            if (shape.startsWith('fa-')) {
                html = `<div style="color: ${color}; font-size: 16px; text-shadow: 1px 1px 1px #333; display: flex; align-items: center; justify-content: center; width: 20px; height: 20px;"><i class="fas ${shape}"></i></div>`;
            } else {
                // Original geometric shapes
                switch (shape) {
                    case 'circle':
                        html = `<div style="background-color: ${color}; width: 16px; height: 16px; border-radius: 50%; border: 2px solid #333;"></div>`;
                        break;
                    case 'square':
                        html = `<div style="background-color: ${color}; width: 16px; height: 16px; border: 2px solid #333;"></div>`;
                        break;
                    case 'triangle':
                        html = `<div style="width: 0; height: 0; border-left: 8px solid transparent; border-right: 8px solid transparent; border-bottom: 16px solid ${color}; border-top: 2px solid #333;"></div>`;
                        break;
                    case 'diamond':
                        html = `<div style="background-color: ${color}; width: 12px; height: 12px; transform: rotate(45deg); border: 2px solid #333; margin: 2px;"></div>`;
                        break;
                    case 'star':
                        html = `<div style="color: ${color}; font-size: 16px; text-shadow: 1px 1px 1px #333;">★</div>`;
                        break;
                    default:
                        html = `<div style="background-color: ${color}; width: 16px; height: 16px; border-radius: 50%; border: 2px solid #333;"></div>`;
                }
            }

            return L.divIcon({
                html,
                className: '',
                iconSize: [20, 20],
                iconAnchor: [10, 10],
                popupAnchor: [0, -10]
            });
        };

        // Helper function to create legend icon HTML
        const createLegendIcon = (color, shape, size = '14px') => {
            // Check if it's a Font Awesome icon
            if (shape.startsWith('fa-')) {
                return `<div style="display: inline-block; color: ${color}; font-size: 14px; text-shadow: 1px 1px 1px #333; margin-right: 8px; vertical-align: middle; width: 16px; text-align: center;"><i class="fas ${shape}"></i></div>`;
            } else {
                // Original geometric shapes
                switch (shape) {
                    case 'circle':
                        return `<div style="display: inline-block; background-color: ${color}; width: ${size}; height: ${size}; border-radius: 50%; border: 1px solid #333; margin-right: 8px; vertical-align: middle;"></div>`;
                    case 'square':
                        return `<div style="display: inline-block; background-color: ${color}; width: ${size}; height: ${size}; border: 1px solid #333; margin-right: 8px; vertical-align: middle;"></div>`;
                    case 'triangle':
                        return `<div style="display: inline-block; width: 0; height: 0; border-left: 7px solid transparent; border-right: 7px solid transparent; border-bottom: 14px solid ${color}; margin-right: 8px; vertical-align: middle;"></div>`;
                    case 'diamond':
                        return `<div style="display: inline-block; background-color: ${color}; width: 10px; height: 10px; transform: rotate(45deg); border: 1px solid #333; margin-right: 12px; margin-left: 4px; vertical-align: middle;"></div>`;
                    case 'star':
                        return `<div style="display: inline-block; color: ${color}; font-size: 14px; text-shadow: 1px 1px 1px #333; margin-right: 8px; vertical-align: middle;">★</div>`;
                    default:
                        return `<div style="display: inline-block; background-color: ${color}; width: ${size}; height: ${size}; border-radius: 50%; border: 1px solid #333; margin-right: 8px; vertical-align: middle;"></div>`;
                }
            }
        };

        const latlngs = [];

        // Get unique values for icon mapping (only assign new shapes if not already mapped)
        const iconKeys = Array.from(new Set(dataList.map(item => (item._originalRow?.[iconColumn] || '').toString().toLowerCase().trim())));
        
        // Assign shapes to icon keys that don't already have them
        iconKeys.forEach(key => {
            if (!this.persistentIconMap[key]) {
                const existingShapes = Object.values(this.persistentIconMap);
                // Find the first available shape or cycle through them
                const availableShape = iconShapes.find(shape => !existingShapes.includes(shape)) || 
                                      iconShapes[Object.keys(this.persistentIconMap).length % iconShapes.length];
                this.persistentIconMap[key] = availableShape;
                console.log(`Assigned shape "${availableShape}" to icon key "${key}"`);
            }
        });

        dataList.forEach((item) => {
            const { lat, lng, _originalRow = {}, ...meta } = item;
            const latNum = parseFloat(lat);
            const lngNum = parseFloat(lng);
            if (isNaN(latNum) || isNaN(lngNum)) return;

            const colorKeyRaw = _originalRow[colorColumn];
            const iconKeyRaw = _originalRow[iconColumn];
            const colorKey = (colorKeyRaw || '').toString().toLowerCase().trim();
            const iconKey = (iconKeyRaw || '').toString().toLowerCase().trim();

            // Assign color if not already mapped
            if (!this.persistentColorMap[colorKey]) {
                this.persistentColorMap[colorKey] = getColor();
                console.log(`Assigned color "${this.persistentColorMap[colorKey].name}" (${this.persistentColorMap[colorKey].hex}) to color key "${colorKey}"`);
            }

            const color = this.persistentColorMap[colorKey].hex;
            const shape = this.persistentIconMap[iconKey] || 'circle'; // fallback shape
            const icon = createDivIcon(color, shape);
            latlngs.push([latNum, lngNum]);

            let popupContent = `<div style="max-width: 250px;">`;
            for (const [key, value] of Object.entries(meta)) {
                popupContent += `<strong>${key}:</strong> ${value || 'N/A'}<br>`;
            }
            popupContent += `<strong>${colorColumn}:</strong> ${colorKeyRaw || 'N/A'} <span style="display: inline-block; width: 12px; height: 12px; background-color: ${color}; border-radius: 50%; margin-left: 5px;"></span><br>`;
            popupContent += `<strong>${iconColumn}:</strong> ${iconKeyRaw || 'N/A'} (${shape})<br>`;
            popupContent += `<strong>Location:</strong> ${latNum.toFixed(6)}, ${lngNum.toFixed(6)}</div>`;

            const marker = L.marker([latNum, lngNum], { icon }).bindPopup(popupContent).addTo(this.modalMap);
            this.modalMarkers.push(marker);
        });

        if (latlngs.length > 0) {
            this.modalMap.fitBounds(L.latLngBounds(latlngs), { padding: [20, 20] });
        }

        // Update Color Legend
        const colorLegendElement = document.getElementById('colorLegend');
        if (colorLegendElement && colorColumn && this.persistentColorMap) {
            // Group values by their colors
            const colorGroups = {};
            Object.entries(this.persistentColorMap)
                .forEach(([key, colorObj]) => {
                    const colorKey = colorObj.hex;
                    if (!colorGroups[colorKey]) {
                        colorGroups[colorKey] = {
                            name: colorObj.name,
                            values: []
                        };
                    }
                    // Get all original case versions from data for this key
                    const matchingItems = dataList.filter(item => 
                        (item._originalRow?.[colorColumn] || '').toString().toLowerCase().trim() === key
                    );
                    
                    matchingItems.forEach(item => {
                        const originalKey = item._originalRow?.[colorColumn] || key || 'N/A';
                        colorGroups[colorKey].values.push(originalKey);
                    });
                });
            
            if (Object.keys(colorGroups).length > 0) {
                colorLegendElement.innerHTML = Object.entries(colorGroups)
                    .sort(([, a], [, b]) => a.values[0].localeCompare(b.values[0]))
                    .map(([colorHex, colorData]) => {
                        const sortedValues = colorData.values.sort();
                        return `
                            <div style="margin-bottom: 8px; font-size: 12px;">
                                <div style="margin-bottom: 2px;">
                                    <span style="display: inline-block; width: 16px; height: 16px; background-color: ${colorHex}; border-radius: 50%; border: 1px solid #333; margin-right: 8px; vertical-align: middle;"></span>
                                    <span style="font-weight: bold;">${colorData.name}</span>
                                </div>
                                <div style="margin-left: 24px; font-size: 11px; color: #666;">
                                    ${sortedValues.map(value => `<div style="margin-bottom: 1px;">${value}</div>`).join('')}
                                </div>
                            </div>
                        `;
                    }).join('');
            } else {
                colorLegendElement.innerHTML = '<small class="text-muted">No color mappings found</small>';
            }
        }

        // Update Icon Legend - Group by icon but show all entries
        const iconLegendElement = document.getElementById('iconLegend');
        if (iconLegendElement && iconColumn && this.persistentIconMap) {
            // Group values by their icons
            const iconGroups = {};
            Object.entries(this.persistentIconMap)
                .forEach(([key, shape]) => {
                    if (!iconGroups[shape]) {
                        iconGroups[shape] = [];
                    }
                    // Get all original case versions from data for this key
                    const matchingItems = dataList.filter(item => 
                        (item._originalRow?.[iconColumn] || '').toString().toLowerCase().trim() === key
                    );
                    
                    matchingItems.forEach(item => {
                        const originalKey = item._originalRow?.[iconColumn] || key || 'N/A';
                        iconGroups[shape].push(originalKey);
                    });
                });
            
            if (Object.keys(iconGroups).length > 0) {
                iconLegendElement.innerHTML = Object.entries(iconGroups)
                    .sort(([, valuesA], [, valuesB]) => valuesA[0].localeCompare(valuesB[0])) // Sort by first value
                    .map(([shape, values]) => {
                        // Use default color for legend icons
                        const defaultColor = '#666';
                        const iconHtml = createLegendIcon(defaultColor, shape);
                        
                        // Get readable name for the icon
                        const getIconDisplayName = (shape) => {
                            const iconNames = {
                                'fa-heart': 'Heart',
                                'fa-bolt': 'Bolt',
                                'fa-fire': 'Fire',
                                'fa-hospital': 'Hospital',
                                'fa-school': 'School',
                                'fa-building': 'Building',
                                'fa-truck': 'Truck',
                                'fa-car': 'Car',
                                'fa-tree': 'Tree',
                                'fa-user': 'Person',
                                'fa-users': 'Users',
                                'fa-wrench': 'Wrench',
                                'fa-shopping-cart': 'Shopping Cart',
                                'fa-dog': 'Dog',
                                'fa-plus': 'Plus',
                                'fa-times': 'Times'
                            };
                            return iconNames[shape] || shape;
                        };
                        
                        // Sort values within each icon group
                        const sortedValues = values.sort();
                        
                        return `
                            <div style="margin-bottom: 8px; font-size: 12px;">
                                <div style="margin-bottom: 2px;">
                                    ${iconHtml}
                                    <span style="font-weight: bold;">${getIconDisplayName(shape)}</span>
                                </div>
                                <div style="margin-left: 24px; font-size: 11px; color: #666;">
                                    ${sortedValues.map(value => `<div style="margin-bottom: 1px;">${value}</div>`).join('')}
                                </div>
                            </div>
                        `;
                    }).join('');
            } else {
                iconLegendElement.innerHTML = '<small class="text-muted">No icon mappings found</small>';
            }
        }
    }

    // Venue control methods
    set value(venueData) {
        if (!venueData) return;
        if (typeof venueData === "string") venueData = JSON.parse(venueData);

        const shadow = this.shadowRoot;
        shadow.getElementById("building").value = venueData.building || "";
        shadow.getElementById("street").value = venueData.street || "";
        shadow.getElementById("area").value = venueData.area || "";
        shadow.getElementById("city").value = venueData.city || "";
        shadow.getElementById("state").value = venueData.state || "";
        shadow.getElementById("country").value = venueData.country || "";
        shadow.getElementById("url_address").value = venueData.url_address || "";
        shadow.getElementById("latitude").value = venueData.latitude || "";
        shadow.getElementById("longitude").value = venueData.longitude || "";
        
        if (venueData.latitude && venueData.longitude) {
            const lat = parseFloat(venueData.latitude);
            const lng = parseFloat(venueData.longitude);
            
            if (!isNaN(lat) && !isNaN(lng)) {
                shadow.getElementById("lat-input").value = lat;
                shadow.getElementById("lng-input").value = lng;

                // Store the coordinates to use when map is ready
                this.pendingCoordinates = { lat, lng };
                
                if (this.map) {
                    // Map exists, just update location and add marker
                    this.log('Map exists, updating location and adding marker');
                    this.goToCoordinates(lat, lng);
                    this.addMarker(lat, lng, 'Loaded Venue Location', 'purple');
                    this.pendingCoordinates = null;
                } else {
                    // Map doesn't exist, initialize it with these coordinates
                    this.log('Map not ready, initializing with coordinates');
                    this.initMap(lat, lng);
                }
                
                this.selectedLocation = {
                    lat: lat,
                    lng: lng,
                    address: `Loaded: ${lat}, ${lng}`
                };
            }
        }
    }

    get value() {
        const shadow = this.shadowRoot;
        
        // Debug: Check what's actually in the form fields
        const venueData = {
            building: shadow.getElementById("building").value,
            street: shadow.getElementById("street").value,
            area: shadow.getElementById("area").value,
            city: shadow.getElementById("city").value,
            state: shadow.getElementById("state").value,
            country: shadow.getElementById("country").value,
            url_address: shadow.getElementById("url_address").value,
            latitude: shadow.getElementById("latitude").value,
            longitude: shadow.getElementById("longitude").value
        };
        
        // Debug logging
        console.log('=== VENUE GET VALUE DEBUG ===');
        console.log('Building field value:', venueData.building);
        console.log('Street field value:', venueData.street);
        console.log('Area field value:', venueData.area);
        console.log('City field value:', venueData.city);
        console.log('URL field value:', venueData.url_address);
        console.log('Latitude field value:', venueData.latitude);
        console.log('Longitude field value:', venueData.longitude);
        console.log('Complete venue data object:', venueData);
        console.log('=== END DEBUG ===');
        
        return JSON.stringify(venueData);
    }

    // **Public methods for external use**
    setCenter(lat, lng, zoom = 13) {
        if (this.map) {
            this.map.setView([lat, lng], zoom);
        }
    }

    addCustomMarker(lat, lng, options = {}) {
        const { popup = '', color = 'blue', draggable = true } = options;
        return this.addMarker(lat, lng, popup, color);
    }

    getCenter() {
        if (this.map) {
            const center = this.map.getCenter();
            return { lat: center.lat, lng: center.lng };
        }
        return null;
    }

    // Get all marker positions and their metadata
    getAllMarkers() {
        return this.markers.map(marker => {
            const pos = marker.getLatLng();
            return {
                position: { lat: pos.lat, lng: pos.lng },
                originalData: marker.originalData,
                id: marker._leaflet_id
            };
        });
    }

    // Find marker by ID
    getMarkerById(id) {
        return this.markers.find(marker => marker._leaflet_id === id);
    }

    // Get current selected location
    getSelectedLocation() {
        return this.selectedLocation;
    }

    // Reset the entire control
    reset() {
        const shadow = this.shadowRoot;
        
        // Clear venue form
        shadow.getElementById("building").value = "";
        shadow.getElementById("street").value = "";
        shadow.getElementById("area").value = "";
        shadow.getElementById("city").value = "";
        shadow.getElementById("state").value = "";
        shadow.getElementById("country").value = "";
        shadow.getElementById("url_address").value = "";
        shadow.getElementById("latitude").value = "";
        shadow.getElementById("longitude").value = "";
        
        // Clear map inputs
        shadow.getElementById("lat-input").value = "";
        shadow.getElementById("lng-input").value = "";
        shadow.getElementById("location-input").value = "";
        
        // Clear markers and location info
        this.clearAllMarkers();
        shadow.getElementById('location-info').classList.remove('show');
        
        // Reset map to default position
        if (this.map) {
            this.map.setView([51.505, -0.09], 13);
        }
        
        this.updateStatus('Control reset to default state');
    }
}

// **Register the custom element**
customElements.define("venue-location-control", VenueLocationControl);


class GraphsControl extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.shadowRoot.innerHTML = `
            <style>
                .graphs-container {
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    background: #f9f9f9;
                }
                .graphs-menu {
                    display: flex;
                    gap: 10px;
                    margin-bottom: 15px;
                }
                .graphs-menu button {
                    padding: 10px;
                    border: none;
                    border-radius: 5px;
                    background: #007bff;
                    color: white;
                    cursor: pointer;
                }
                .graphs-menu button:hover {
                    background: #0056b3;
                }
                .graphs-menu button.active {
                    background: #0056b3;
                }
                #graphCanvas {
                    width: 100%;
                    height: 400px;
                }
                .modal {
                    display: none;
                    position: fixed;
                    z-index: 1050;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    overflow: auto;
                    background-color: rgba(0, 0, 0, 0.5);
                }
                .modal-content {
                    background-color: #fefefe;
                    margin: 10% auto;
                    padding: 20px;
                    border: 1px solid #888;
                    width: 80%;
                    border-radius: 10px;
                }
                .close {
                    color: #aaa;
                    float: right;
                    font-size: 28px;
                    font-weight: bold;
                    cursor: pointer;
                }
                .close:hover,
                .close:focus {
                    color: black;
                    text-decoration: none;
                    cursor: pointer;
                }
            </style>
            <div class="modal" id="graphsModal">
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <div class="graphs-container">
                        <div class="graphs-menu">
                            <button data-type="scatter" class="active">Scatter Plot</button>
                            <button data-type="bar">Bar Chart</button>
                            <button data-type="line">Line Chart</button>
                            <button data-type="pie">Pie Chart</button>
                        </div>
                        <canvas id="graphCanvas"></canvas>
                    </div>
                </div>
            </div>
        `;

        this.graphCanvas = this.shadowRoot.getElementById("graphCanvas");
        this.graphType = "scatter";
        this.chart = null;
        this.rowData = []; // Store row data

        this.shadowRoot.querySelectorAll(".graphs-menu button").forEach((button) => {
            button.addEventListener("click", () => {
                this.changeGraphType(button.dataset.type);
            });
        });

        this.shadowRoot.querySelector(".close").addEventListener("click", () => {
            this.closeModal();
        });

        this.shadowRoot.getElementById("graphsModal").addEventListener("click", (event) => {
            if (event.target === this.shadowRoot.getElementById("graphsModal")) {
                this.closeModal();
            }
        });
    }

    connectedCallback() {
        this.initializeChart();
    }

    changeGraphType(type) {
        this.graphType = type;
        this.shadowRoot.querySelectorAll(".graphs-menu button").forEach((button) => {
            button.classList.toggle("active", button.dataset.type === type);
        });
        this.updateChart();
    }

    initializeChart() {
        if (!window.Chart) {
            const script = document.createElement("script");
            script.src = "https://cdn.jsdelivr.net/npm/chart.js";
            script.onload = () => this.updateChart();
            document.head.appendChild(script);
        } else {
            this.updateChart();
        }
    }

    updateChart() {
        if (this.chart) {
            this.chart.destroy();
        }

        const data = this.prepareData();
        const config = this.getChartConfig(data);

        this.chart = new Chart(this.graphCanvas, config);
    }

    prepareData() {
        // Use the row data to prepare labels and dataset
        const labels = this.rowData.map((row, index) => `Row ${index + 1}`);
        const dataset = this.rowData.map((row) => row.value || 0); // Replace 'value' with the actual key in your data

        return { labels, dataset };
    }

    getChartConfig(data) {
        const { labels, dataset } = data;

        const config = {
            type: this.graphType,
            data: {
                labels,
                datasets: [
                    {
                        label: "Row Data",
                        data: dataset,
                        backgroundColor: "rgba(75, 192, 192, 0.2)",
                        borderColor: "rgba(75, 192, 192, 1)",
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: "top",
                    },
                },
            },
        };

        return config;
    }

    openModal() {
        this.shadowRoot.getElementById("graphsModal").style.display = "block";
    }

    closeModal() {
        this.shadowRoot.getElementById("graphsModal").style.display = "none";
    }

    initializeAndOpenModal(rowData) {
        console.log("Row data received:", rowData);
        this.rowData = rowData; // Store the row data
        this.initializeChart();
        this.openModal();
    }
}

// Register the custom element
customElements.define("graphs-control", GraphsControl);
class TemplateMappingControl extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    // 🧪 Default Test Data
    this.jsonFields = [
      { field: "fullName", label: "Full Name" },
      { field: "ageBlock", label: "Age Block" },
      { field: "addressLine", label: "Address" }
    ];

    this.templateHTML = `
      <div>
        <p>Name: {{fullName}}</p>
        <p>Age Block: {{ageBlock}}</p>
        <p>Address: {{addressLine}}</p>
      </div>
    `;

    // Extract templateFields from templateHTML for test
    this.templateFields = ["fullName", "ageBlock", "addressLine"];

    // Optional: sample mapping to prepopulate UI
    this.mappings = {
      fullName: "fullName",
      ageBlock: "ageBlock",
      addressLine: "addressLine"
    };

  }

  connectedCallback() {
    this.render();
  }

  set data({ jsonFields, htmlTemplate }) {
    this.jsonFields = jsonFields;
    this.templateHTML = htmlTemplate;
    this.templateFields = this.extractTemplateFields(htmlTemplate);
    this.render();
  }

  get value() {
    return this.mappings;
  }

  extractTemplateFields(html) {
    const matches = html.match(/{{\s*([^{}\s]+)\s*}}/g) || [];
    return [...new Set(matches.map(m => m.replace(/{{|}}|\s/g, '')))].sort();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        .draggable { cursor: grab; }
        .dropzone {
          min-height: 40px;
          border: 1px dashed #ced4da;
          padding: 5px;
          background-color: #f8f9fa;
        }
      </style>
      <div class="p-2">
        <div id="templateFields" class="d-flex flex-column gap-3"></div>

        <div class="mt-3">
          <button class="btn btn-primary" id="save">💾 Save</button>
          <button class="btn btn-danger ms-2" id="clear">🗑️ Clear</button>
          <button class="btn btn-secondary ms-2" id="export">📤 Export</button>
          <label class="btn btn-info mb-0 ms-2">
            📥 Import <input type="file" accept=".json" id="import" hidden />
          </label>
        </div>

        <pre class="bg-white mt-3 p-2 border rounded" id="output"></pre>
      </div>
    `;

    const shadow = this.shadowRoot;
    const templateContainer = shadow.getElementById("templateFields");

    this.templateFields.forEach(field => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <div class="card-header"><strong>{{${field}}}</strong></div>
        <div class="card-body">
          <ul id="drop_${field}" class="list-group dropzone"></ul>
          <input type="text" class="form-control mt-2" id="input_${field}" placeholder="Mapped fields" />
        </div>
      `;
      templateContainer.appendChild(card);

      const dropzone = card.querySelector(`#drop_${field}`);
      const input = card.querySelector(`#input_${field}`);

      new Sortable(dropzone, {
        group: { name: "shared", pull: true, put: true },
        animation: 150,
        onAdd: update,
        onUpdate: update
      });

      input.addEventListener("change", () => syncInputToDropzone(input, dropzone));

      function update() {
        const values = Array.from(dropzone.children).map(el => el.textContent.trim());
        input.value = values.join(", ");
      }
    });

    function syncInputToDropzone(input, dropzone) {
      const values = input.value.split(',').map(v => v.trim()).filter(Boolean);
      dropzone.innerHTML = "";
      values.forEach(val => {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = val;
        dropzone.appendChild(li);
      });
    }

    shadow.getElementById("save").onclick = () => {
      this.mappings = {};
      this.templateFields.forEach(field => {
        const val = shadow.getElementById(`input_${field}`).value.trim();
        this.mappings[field] = val;
      });
      shadow.getElementById("output").textContent = JSON.stringify(this.mappings, null, 2);
    };

    shadow.getElementById("clear").onclick = () => {
      this.templateFields.forEach(field => {
        shadow.getElementById(`input_${field}`).value = "";
        shadow.getElementById(`drop_${field}`).innerHTML = "";
      });
      this.mappings = {};
      shadow.getElementById("output").textContent = "";
    };

    shadow.getElementById("export").onclick = () => {
      const blob = new Blob([JSON.stringify(this.mappings, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "field_mapping.json";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    };

    shadow.getElementById("import").addEventListener("change", event => {
      const file = event.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = e => {
        try {
          const data = JSON.parse(e.target.result);
          this.templateFields.forEach(field => {
            const val = data[field] || "";
            const input = shadow.getElementById(`input_${field}`);
            const dropzone = shadow.getElementById(`drop_${field}`);
            input.value = val;
            syncInputToDropzone(input, dropzone);
          });
          shadow.getElementById("output").textContent = JSON.stringify(data, null, 2);
          this.mappings = data;
        } catch {
          alert("Invalid JSON file");
        }
      };
      reader.readAsText(file);
    });
  }
}

customElements.define("template-mapping-control", TemplateMappingControl);

