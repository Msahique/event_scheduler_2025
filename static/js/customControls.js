
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
    this.fields = [];
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          font-family: Arial, sans-serif;
        }
        
        .fields-container {
          padding: 15px;
          border: 1px solid #ddd;
          border-radius: 5px;
          background: #f5f5f5;
          width: 100%;
          box-sizing: border-box;
        }
        
        .fields-header, .field-group {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr auto;
          gap: 12px;
          align-items: center;
          padding: 8px 12px;
        }
        
        .fields-header {
          font-weight: bold;
          background-color: #f0f0f0;
          border-radius: 4px;
          margin-bottom: 8px;
        }
        
        .field-group {
          background: white;
          border-radius: 4px;
          margin-bottom: 8px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        
        .field-group input, 
        .field-group select {
          padding: 8px;
          border: 1px solid #ddd;
          border-radius: 4px;
          width: 100%;
          box-sizing: border-box;
          font-size: 14px;
        }
        
        .field-group select {
          appearance: none;
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 8px center;
          background-size: 14px;
          padding-right: 30px;
        }
        
        .add-btn {
          padding: 10px 16px;
          background: #4CAF50;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          margin-top: 12px;
          font-size: 14px;
          transition: background 0.2s;
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
          font-size: 13px;
          transition: background 0.2s;
        }
        
        .delete-btn:hover {
          background: #d32f2f;
        }
        
        @media (max-width: 768px) {
          .fields-header, .field-group {
            grid-template-columns: 1.5fr 1fr 1fr 1fr auto;
            gap: 8px;
          }
        }
      </style>
      <div class="fields-container">
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
    `;

    this.shadowRoot.getElementById("add-field").addEventListener("click", () => this.addField());
    this.renderFields();
  }

  addField() {
    this.fields.push({
      name: "",
      unique: "false",
      datatype: "string",
      not_null: "false"
    });
    this.renderFields();
    this.dispatchEvent(new CustomEvent('change', { bubbles: true, composed: true }));
  }

  deleteField(index) {
    this.fields.splice(index, 1);
    this.renderFields();
    this.dispatchEvent(new CustomEvent('change', { bubbles: true, composed: true }));
  }

  renderFields() {
    const fieldsList = this.shadowRoot.getElementById("fields-list");
    fieldsList.innerHTML = "";

    this.fields.forEach((field, index) => {
      const fieldGroup = document.createElement("div");
      fieldGroup.className = "field-group";
      
      fieldGroup.innerHTML = `
        <input type="text" class="field-name" placeholder="Enter field name" value="${field.name}">
        <select class="field-datatype">
          <option value="string" ${field.datatype === 'string' ? 'selected' : ''}>String</option>
          <option value="number" ${field.datatype === 'number' ? 'selected' : ''}>Number</option>
          <option value="boolean" ${field.datatype === 'boolean' ? 'selected' : ''}>Boolean</option>
          <option value="date" ${field.datatype === 'date' ? 'selected' : ''}>Date</option>
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

      // Add event listeners
      const addListener = (selector, property) => {
        fieldGroup.querySelector(selector).addEventListener("change", (e) => {
          this.fields[index][property] = e.target.value;
          this.dispatchEvent(new CustomEvent('change', { bubbles: true, composed: true }));
        });
      };

      fieldGroup.querySelector(".field-name").addEventListener("input", (e) => {
        this.fields[index].name = e.target.value;
        this.dispatchEvent(new CustomEvent('change', { bubbles: true, composed: true }));
      });

      addListener(".field-datatype", "datatype");
      addListener(".field-unique", "unique");
      addListener(".field-notnull", "not_null");

      fieldGroup.querySelector(".delete-btn").addEventListener("click", () => {
        this.deleteField(index);
      });

      fieldsList.appendChild(fieldGroup);
    });
  }

  set value(data) {
    try {
      const parsed = typeof data === 'string' ? JSON.parse(data) : data;
      if (parsed?.fields && Array.isArray(parsed.fields)) {
        this.fields = parsed.fields;
        this.renderFields();
      }
    } catch (e) {
      console.error("Invalid data format", e);
    }
  }

  get value() {
    return JSON.stringify({ fields: this.fields });
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

/* WORKING CODE FOR FIELD ATTRIBUTE CONTROL *//*
class FieldAttributeControl extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.jobs = { create: [], list: [], update: [] };
    this.currentJob = 'create';
    this.fieldsByDocType = {}; // To be filled dynamically
  }

  connectedCallback() {
    this.render();
    this.loadDocTypesFromBackend();
  }

  async loadDocTypesFromBackend() {
    try {
      const templates = await getDocTemplates1({});
      console.log("[INFO] Loaded doc types:", templates);

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
                field: f.name || "",
                control: f.control || "text",
                trigger: f.trigger || "",
                edit: true,
                show: true,
                mandatory: true,
                default: "",
                filter_type: "",
                filter_default_value: "",
                lang: { english: "", german: "", arabic: "", french: "" }
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

        console.log("[INFO] Unique Doc types ready:", Object.keys(this.fieldsByDocType));
      }
    } catch (err) {
      console.error("[ERROR] Could not load doc types:", err);
    }
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        table { width: 100%; border-collapse: collapse; margin-bottom: 1rem; }
        th, td { border: 1px solid #ccc; padding: 0.5rem; text-align: left; }
        button { margin: 0.5rem 0.25rem; }
        input, select { width: 100%; }
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
          </select>
        </label>
        <button id="addJob">Add Job +</button>
        <button id="switchJob">Switch Job</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Field</th><th>Control</th><th>Edit</th><th>Show</th><th>Mandatory</th>
            <th>Default</th><th>Filter Type</th><th>Filter Default</th><th>Trigger</th>
            <th>Lang (EN)</th><th>Lang (DE)</th><th>Lang (AR)</th><th>Lang (FR)</th><th>Remove</th>
          </tr>
        </thead>
        <tbody id="field-body"></tbody>
      </table>

      <button id="add-field">Add Field</button>
      <button id="export-json">Export Config</button>
      <button id="alert-json">Show JSON in Alert</button>
      <pre id="output"></pre>
    `;

    this.shadowRoot.getElementById('add-field').addEventListener('click', () => this.addField());
    this.shadowRoot.getElementById('switchJob').addEventListener('click', () => this.switchJob());
    this.shadowRoot.getElementById('docTypeSelector').addEventListener('change', (e) => this.loadDocTypeFields(e.target.value));
    this.shadowRoot.getElementById('export-json').addEventListener('click', () => {
      const config = this.exportConfig();
      this.shadowRoot.getElementById('output').textContent = JSON.stringify(config, null, 2);
    });
    this.shadowRoot.getElementById('alert-json').addEventListener('click', () => {
      const config = this.exportConfig();
      alert(JSON.stringify(config, null, 2));
    });

    this.loadFields();
  }

  loadFields() {
    const tbody = this.shadowRoot.getElementById('field-body');
    tbody.innerHTML = '';
    (this.jobs[this.currentJob] || []).forEach(f => this.addFieldFromObject(f));
  }

  loadDocTypeFields(docType) {
    if (!docType) return;
    this.jobs[this.currentJob] = this.fieldsByDocType[docType] || [];
    this.loadFields();
  }

  addField(field = "", control = "text", trigger = "") {
    this.addFieldFromObject({
      field, control, trigger,
      edit: false, show: false, mandatory: false,
      default: "", filter_type: "", filter_default_value: "",
      lang: { english: "", german: "", arabic: "", french: "" }
    });
  }

  addFieldFromObject(obj) {
    const tbody = this.shadowRoot.getElementById('field-body');
    const row = document.createElement('tr');
    row.innerHTML = `
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
      <td><input type="text" class="filter_type" value="${obj.filter_type || ""}"/></td>
      <td><input type="text" class="filter_default_value" value="${obj.filter_default_value || ""}"/></td>
      <td><input type="text" class="trigger" value="${obj.trigger || ""}"/></td>
      <td><input type="text" class="lang-en" value="${obj.lang?.english || ""}"/></td>
      <td><input type="text" class="lang-de" value="${obj.lang?.german || ""}"/></td>
      <td><input type="text" class="lang-ar" value="${obj.lang?.arabic || ""}"/></td>
      <td><input type="text" class="lang-fr" value="${obj.lang?.french || ""}"/></td>
      <td><button class="remove">X</button></td>
    `;
    row.querySelector('.control').value = obj.control || "text";
    row.querySelector('.remove').addEventListener('click', () => row.remove());
    tbody.appendChild(row);
  }

  switchJob() {
    const selector = this.shadowRoot.getElementById('jobSelector');
    this.jobs[this.currentJob] = this.captureFields();
    this.currentJob = selector.value;
    this.loadFields();
  }

  captureFields() {
    const rows = this.shadowRoot.querySelectorAll('#field-body tr');
    return Array.from(rows).map(row => ({
      field: row.querySelector('.field-name').value,
      control: row.querySelector('.control').value,
      trigger: row.querySelector('.trigger').value,
      edit: row.querySelector('.edit').checked,
      show: row.querySelector('.show').checked,
      mandatory: row.querySelector('.mandatory').checked,
      default: row.querySelector('.default').value,
      filter_type: row.querySelector('.filter_type').value,
      filter_default_value: row.querySelector('.filter_default_value').value,
      lang: {
        english: row.querySelector('.lang-en').value,
        german: row.querySelector('.lang-de').value,
        arabic: row.querySelector('.lang-ar').value,
        french: row.querySelector('.lang-fr').value
      }
    }));
  }

  exportConfig() {
    this.jobs[this.currentJob] = this.captureFields();
    const job = {};
    Object.keys(this.jobs).forEach(jobType => {
      if (this.jobs[jobType].length) {
        job[jobType] = {
          roles: ["Admin"],
          data: [{
            helper: "none",
            fields: this.jobs[jobType],
            edit_option: true,
            delete_option: true
          }],
          api: `config/${jobType === 'list' ? 'list_details' : jobType === 'update' ? 'modifications' : 'new'}`,
          onSuccess: `Role_${jobType}ed()`
        };
      }
    });
    job["cancel"] = {
      api: "config",
      onSuccess: "Role_canceled()"
    };
    return {
      getDataApi: this.shadowRoot.getElementById('getDataApi').value,
      key: this.shadowRoot.getElementById('key').value,
      attchment_files_path: this.shadowRoot.getElementById('attchment_files_path').value,
      job
    };
  }
}
customElements.define('field-attribute-control', FieldAttributeControl);
*/
/*
class FieldAttributeControl extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.jobs = { create: [], list: [], update: [] };
    this.fieldsByDocType = {}; // To be filled dynamically
    this.currentDocType = '';
  }

  connectedCallback() {
    this.render();
    this.loadDocTypesFromBackend();
  }

  async loadDocTypesFromBackend() {
    try {
      const templates = await getDocTemplates1({});
      console.log("[INFO] Loaded doc types:", templates);

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
                field: f.name || "",
                control: f.control || "text",
                trigger: f.trigger || "",
                edit: true,
                show: true,
                mandatory: true,
                default: "",
                filter_type: "",
                filter_default_value: "",
                lang: { english: "", german: "", arabic: "", french: "" }
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

        console.log("[INFO] Unique Doc types ready:", Object.keys(this.fieldsByDocType));
      }
    } catch (err) {
      console.error("[ERROR] Could not load doc types:", err);
    }
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        table { width: 100%; border-collapse: collapse; margin-bottom: 1rem; }
        th, td { border: 1px solid #ccc; padding: 0.5rem; text-align: left; }
        button { margin: 0.5rem 0.25rem; }
        input, select { width: 100%; }
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
          </select>
        </label>
      </div>

      <div>
        <button id="loadJobFields">Load Fields</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Field</th><th>Control</th><th>Edit</th><th>Show</th><th>Mandatory</th>
            <th>Default</th><th>Filter Type</th><th>Filter Default</th><th>Trigger</th>
            <th>Lang (EN)</th><th>Lang (DE)</th><th>Lang (AR)</th><th>Lang (FR)</th><th>Remove</th>
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
    this.shadowRoot.getElementById('export-json').addEventListener('click', () => {
      const config = this.exportConfig();
      this.shadowRoot.getElementById('output').textContent = JSON.stringify(config, null, 2);
    });
    this.shadowRoot.getElementById('alert-json').addEventListener('click', () => {
      const config = this.exportConfig();
      alert(JSON.stringify(config, null, 2));
    });
  }

  loadFields(job = 'create') {
    const tbody = this.shadowRoot.getElementById('field-body');
    tbody.innerHTML = '';
    (this.jobs[job] || []).forEach(f => this.addFieldFromObject(f));
  }

  saveFields(job = 'create') {
    this.jobs[job] = this.captureFields();
  }

  populateAllJobs(docType) {
    if (!docType) return;
    this.currentDocType = docType;
    const fields = this.fieldsByDocType[docType] || [];
    ['create', 'list', 'update'].forEach(job => {
      if (!this.jobs[job] || this.jobs[job].length === 0) {
        this.jobs[job] = JSON.parse(JSON.stringify(fields));
      }
    });
    this.loadFields('create');
  }

  addField(field = "", control = "text", trigger = "") {
    this.addFieldFromObject({
      field, control, trigger,
      edit: false, show: false, mandatory: false,
      default: "", filter_type: "", filter_default_value: "",
      lang: { english: "", german: "", arabic: "", french: "" }
    });
  }

  addFieldFromObject(obj) {
    const tbody = this.shadowRoot.getElementById('field-body');
    const row = document.createElement('tr');
    row.innerHTML = `
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
      <td><input type="text" class="filter_type" value="${obj.filter_type || ""}"/></td>
      <td><input type="text" class="filter_default_value" value="${obj.filter_default_value || ""}"/></td>
      <td><input type="text" class="trigger" value="${obj.trigger || ""}"/></td>
      <td><input type="text" class="lang-en" value="${obj.lang?.english || ""}"/></td>
      <td><input type="text" class="lang-de" value="${obj.lang?.german || ""}"/></td>
      <td><input type="text" class="lang-ar" value="${obj.lang?.arabic || ""}"/></td>
      <td><input type="text" class="lang-fr" value="${obj.lang?.french || ""}"/></td>
      <td><button class="remove">X</button></td>
    `;
    row.querySelector('.control').value = obj.control || "text";
    row.querySelector('.remove').addEventListener('click', () => row.remove());
    tbody.appendChild(row);
  }

  captureFields() {
    const rows = this.shadowRoot.querySelectorAll('#field-body tr');
    return Array.from(rows).map(row => ({
      field: row.querySelector('.field-name').value,
      control: row.querySelector('.control').value,
      trigger: row.querySelector('.trigger').value,
      edit: row.querySelector('.edit').checked,
      show: row.querySelector('.show').checked,
      mandatory: row.querySelector('.mandatory').checked,
      default: row.querySelector('.default').value,
      filter_type: row.querySelector('.filter_type').value,
      filter_default_value: row.querySelector('.filter_default_value').value,
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
      job[jobType] = {
        roles: ["Admin"],
        data: [{
          helper: "none",
          fields: this.jobs[jobType],
          edit_option: true,
          delete_option: true
        }],
        api: `config/${jobType === 'list' ? 'list_details' : jobType === 'update' ? 'modifications' : 'new'}`,
        onSuccess: `Role_${jobType}ed()`
      };
    });
    job["cancel"] = {
      api: "config",
      onSuccess: "Role_canceled()"
    };
    return {
      getDataApi: this.shadowRoot.getElementById('getDataApi').value,
      key: this.shadowRoot.getElementById('key').value,
      attchment_files_path: this.shadowRoot.getElementById('attchment_files_path').value,
      job
    };
  }
}
customElements.define('field-attribute-control', FieldAttributeControl);
*/
/*
class FieldAttributeControl extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.jobs = { create: [], list: [], update: [], cancel: { api: '', onSuccess: '' } };
    this.fieldsByDocType = {}; // To be filled dynamically
    this.currentDocType = '';
  }

  connectedCallback() {
    this.render();
    this.loadDocTypesFromBackend();
  }

  async loadDocTypesFromBackend() {
    try {
      const templates = await getDocTemplates1({});
      console.log("[INFO] Loaded doc types:", templates);

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
                field: f.name || "",
                control: f.control || "text",
                trigger: f.trigger || "",
                edit: true,
                show: true,
                mandatory: true,
                default: "",
                filter_type: "",
                filter_default_value: "",
                lang: { english: "", german: "", arabic: "", french: "" }
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

        console.log("[INFO] Unique Doc types ready:", Object.keys(this.fieldsByDocType));
      }
    } catch (err) {
      console.error("[ERROR] Could not load doc types:", err);
    }
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        table { width: 100%; border-collapse: collapse; margin-bottom: 1rem; }
        th, td { border: 1px solid #ccc; padding: 0.5rem; text-align: left; }
        button { margin: 0.5rem 0.25rem; }
        input, select { width: 100%; }
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

      <table>
        <thead>
          <tr>
            <th>Field</th><th>Control</th><th>Edit</th><th>Show</th><th>Mandatory</th>
            <th>Default</th><th>Filter Type</th><th>Filter Default</th><th>Trigger</th>
            <th>Lang (EN)</th><th>Lang (DE)</th><th>Lang (AR)</th><th>Lang (FR)</th><th>Remove</th>
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
    this.shadowRoot.getElementById('export-json').addEventListener('click', () => {
      const config = this.exportConfig();
      this.shadowRoot.getElementById('output').textContent = JSON.stringify(config, null, 2);
    });
    this.shadowRoot.getElementById('alert-json').addEventListener('click', () => {
      const config = this.exportConfig();
      alert(JSON.stringify(config, null, 2));
    });
  }

  loadFields(job = 'create') {
    const tbody = this.shadowRoot.getElementById('field-body');
    tbody.innerHTML = '';
    (this.jobs[job] || []).forEach(f => this.addFieldFromObject(f));
  }

  saveFields(job = 'create') {
    if (job === 'cancel') {
      const cancelApi = prompt('Enter Cancel API:', this.jobs.cancel.api || 'config') || 'config';
      const cancelOnSuccess = prompt('Enter Cancel onSuccess function:', this.jobs.cancel.onSuccess || 'Role_canceled()') || 'Role_canceled()';
      this.jobs.cancel = { api: cancelApi, onSuccess: cancelOnSuccess };
    } else {
      this.jobs[job] = this.captureFields();
    }
  }

  populateAllJobs(docType) {
    if (!docType) return;
    this.currentDocType = docType;
    const fields = this.fieldsByDocType[docType] || [];
    ['create', 'list', 'update'].forEach(job => {
      if (!this.jobs[job] || this.jobs[job].length === 0) {
        this.jobs[job] = JSON.parse(JSON.stringify(fields));
      }
    });
    this.jobs.cancel = { api: "config", onSuccess: "Role_canceled()" };
    this.loadFields('create');
  }

  addField(field = "", control = "text", trigger = "") {
    this.addFieldFromObject({
      field, control, trigger,
      edit: false, show: false, mandatory: false,
      default: "", filter_type: "", filter_default_value: "",
      lang: { english: "", german: "", arabic: "", french: "" }
    });
  }

  addFieldFromObject(obj) {
    const tbody = this.shadowRoot.getElementById('field-body');
    const row = document.createElement('tr');
    row.innerHTML = `
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
      <td><input type="text" class="filter_type" value="${obj.filter_type || ""}"/></td>
      <td><input type="text" class="filter_default_value" value="${obj.filter_default_value || ""}"/></td>
      <td><input type="text" class="trigger" value="${obj.trigger || ""}"/></td>
      <td><input type="text" class="lang-en" value="${obj.lang?.english || ""}"/></td>
      <td><input type="text" class="lang-de" value="${obj.lang?.german || ""}"/></td>
      <td><input type="text" class="lang-ar" value="${obj.lang?.arabic || ""}"/></td>
      <td><input type="text" class="lang-fr" value="${obj.lang?.french || ""}"/></td>
      <td><button class="remove">X</button></td>
    `;
    row.querySelector('.control').value = obj.control || "text";
    row.querySelector('.remove').addEventListener('click', () => row.remove());
    tbody.appendChild(row);
  }

  captureFields() {
    const rows = this.shadowRoot.querySelectorAll('#field-body tr');
    return Array.from(rows).map(row => ({
      field: row.querySelector('.field-name').value,
      control: row.querySelector('.control').value,
      trigger: row.querySelector('.trigger').value,
      edit: row.querySelector('.edit').checked,
      show: row.querySelector('.show').checked,
      mandatory: row.querySelector('.mandatory').checked,
      default: row.querySelector('.default').value,
      filter_type: row.querySelector('.filter_type').value,
      filter_default_value: row.querySelector('.filter_default_value').value,
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
        job[jobType] = {
          roles: ["Admin"],
          data: [{
            helper: "none",
            fields: this.jobs[jobType],
            edit_option: true,
            delete_option: true
          }],
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
*/
class FieldAttributeControl extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.jobs = { create: [], list: [], update: [], cancel: { api: '', onSuccess: '' } };
    this.fieldsByDocType = {}; // To be filled dynamically
    this.currentDocType = '';
  }

  connectedCallback() {
    this.render();
    this.loadDocTypesFromBackend();
  }

  async loadDocTypesFromBackend() {
    try {
      const templates = await getDocTemplates1({});
      console.log("[INFO] Loaded doc types:", templates);

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
                field: f.name || "",
                control: f.control || "text",
                trigger: f.trigger || "",
                edit: true,
                show: true,
                mandatory: true,
                default: "",
                filter_type: "",
                filter_default_value: "",
                lang: { english: "", german: "", arabic: "", french: "" }
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

        console.log("[INFO] Unique Doc types ready:", Object.keys(this.fieldsByDocType));
      }
    } catch (err) {
      console.error("[ERROR] Could not load doc types:", err);
    }
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        table { width: 100%; border-collapse: collapse; margin-bottom: 1rem; }
        th, td { border: 1px solid #ccc; padding: 0.5rem; text-align: left; }
        button { margin: 0.5rem 0.25rem; }
        input, select { width: 100%; }
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
            <th>Field</th><th>Control</th><th>Edit</th><th>Show</th><th>Mandatory</th>
            <th>Default</th><th>Filter Type</th><th>Filter Default</th><th>Trigger</th>
            <th>Lang (EN)</th><th>Lang (DE)</th><th>Lang (AR)</th><th>Lang (FR)</th><th>Remove</th>
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

  saveCancelConfig() {
    const api = this.shadowRoot.getElementById('cancelApi').value || 'config';
    const onSuccess = this.shadowRoot.getElementById('cancelOnSuccess').value || 'Role_canceled()';
    this.jobs.cancel = { api, onSuccess };
  }

  loadFields(job = 'create') {
    const tbody = this.shadowRoot.getElementById('field-body');
    tbody.innerHTML = '';
    if (!Array.isArray(this.jobs[job])) return;
    this.jobs[job].forEach(f => this.addFieldFromObject(f));
  }

  saveFields(job = 'create') {
    this.jobs[job] = this.captureFields();
  }

  populateAllJobs(docType) {
    if (!docType) return;
    this.currentDocType = docType;
    const fields = this.fieldsByDocType[docType] || [];
    ['create', 'list', 'update'].forEach(job => {
      this.jobs[job] = JSON.parse(JSON.stringify(fields));
    });
    this.jobs.cancel = { api: "config", onSuccess: "Role_canceled()" };
    this.shadowRoot.getElementById('cancelApi').value = this.jobs.cancel.api;
    this.shadowRoot.getElementById('cancelOnSuccess').value = this.jobs.cancel.onSuccess;
    this.loadFields('create');
  }

  addField(field = "", control = "text", trigger = "") {
    this.addFieldFromObject({
      field, control, trigger,
      edit: false, show: false, mandatory: false,
      default: "", filter_type: "", filter_default_value: "",
      lang: { english: "", german: "", arabic: "", french: "" }
    });
  }

  addFieldFromObject(obj) {
    const tbody = this.shadowRoot.getElementById('field-body');
    const row = document.createElement('tr');
    row.innerHTML = `
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
      <td><input type="text" class="filter_type" value="${obj.filter_type || ""}"/></td>
      <td><input type="text" class="filter_default_value" value="${obj.filter_default_value || ""}"/></td>
      <td><input type="text" class="trigger" value="${obj.trigger || ""}"/></td>
      <td><input type="text" class="lang-en" value="${obj.lang?.english || ""}"/></td>
      <td><input type="text" class="lang-de" value="${obj.lang?.german || ""}"/></td>
      <td><input type="text" class="lang-ar" value="${obj.lang?.arabic || ""}"/></td>
      <td><input type="text" class="lang-fr" value="${obj.lang?.french || ""}"/></td>
      <td><button class="remove">X</button></td>
    `;
    row.querySelector('.control').value = obj.control || "text";
    row.querySelector('.remove').addEventListener('click', () => row.remove());
    tbody.appendChild(row);
  }

  captureFields() {
    const rows = this.shadowRoot.querySelectorAll('#field-body tr');
    return Array.from(rows).map(row => ({
      field: row.querySelector('.field-name').value,
      control: row.querySelector('.control').value,
      trigger: row.querySelector('.trigger').value,
      edit: row.querySelector('.edit').checked,
      show: row.querySelector('.show').checked,
      mandatory: row.querySelector('.mandatory').checked,
      default: row.querySelector('.default').value,
      filter_type: row.querySelector('.filter_type').value,
      filter_default_value: row.querySelector('.filter_default_value').value,
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
        job[jobType] = {
          roles: ["Admin"],
          data: [{
            helper: "none",
            fields: this.jobs[jobType],
            edit_option: true,
            delete_option: true
          }],
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