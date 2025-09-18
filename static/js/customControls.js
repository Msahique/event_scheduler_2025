
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

/*******************************
 📂 File Attachment
*******************************/
class FileAttachment extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = this.template("📂 File Attachment", "fileHelperSelect", "fileInput", "fileList");
        this.init();
    }
    template(title, selectId, inputId, listId) {
        return `
        <style>${AttachmentStyles}</style>
        <div class="wrapper">
            <h4>${title}</h4>
            <label>Choose from existing:</label>
            <select id="${selectId}">
                <option value="">-- Select from existing --</option>
            </select>
            <label>Or upload new:</label>
            <input type="file" id="${inputId}" multiple>
            <div id="${listId}"></div>
        </div>`;
    }
    async init() {
        this.fileList = this.shadowRoot.getElementById("fileList");
        this.fileInput = this.shadowRoot.getElementById("fileInput");
        this.fileHelperSelect = this.shadowRoot.getElementById("fileHelperSelect");

        let options = await get_file_list();
        this.populateSelect(this.fileHelperSelect, options);

        this.fileInput.addEventListener("change", e => this.showFiles(e.target.files));
        this.fileHelperSelect.addEventListener("change", e => this.addRow("[Existing] " + e.target.value));
    }
    populateSelect(select, options) {
        if (options && Array.isArray(options)) {
            options.forEach(opt => {
                let o = document.createElement("option");
                o.value = opt.filename;
                o.textContent = opt.filename;
                select.appendChild(o);
            });
        }
    }
    showFiles(files) {
        Array.from(files).forEach(file => this.addRow(file.name));
    }
    addRow(name) {
        if (!name) return;
        let wrap = document.createElement("div");
        wrap.classList.add("itemWrapper");
        wrap.innerHTML = `<button class="delete-btn">❌</button><span>${name}</span>`;
        wrap.querySelector(".delete-btn").addEventListener("click", () => wrap.remove());
        this.fileList.appendChild(wrap);
    }
}
customElements.define("file-attachment", FileAttachment);


/*******************************
 🖼️ Image Attachment
*******************************/
class ImageAttachment extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode:"open" });
        this.shadowRoot.innerHTML = `
            <style>${AttachmentStyles}</style>
            <div class="wrapper">
                <h4>🖼️ Image Attachment</h4>
                <label>Choose from existing:</label>
                <select id="imageHelperSelect"><option value="">-- Select --</option></select>
                <video id="video" autoplay style="max-width:300px;display:none;"></video>
                <button id="captureBtn">📸 Capture</button>
                <div id="imageList"></div>
            </div>
        `;
        this.init();
    }
    async init() {
        this.video = this.shadowRoot.getElementById("video");
        this.captureBtn = this.shadowRoot.getElementById("captureBtn");
        this.imageList = this.shadowRoot.getElementById("imageList");
        this.imageHelperSelect = this.shadowRoot.getElementById("imageHelperSelect");

        let options = await get_image_list();
        this.populateSelect(this.imageHelperSelect, options);

        this.captureBtn.addEventListener("click", () => this.captureImage());
        this.imageHelperSelect.addEventListener("change", e => this.addImage(`/uploads/images/${e.target.value}`));

        navigator.mediaDevices.getUserMedia({ video:true }).then(stream=>{
            this.video.srcObject = stream;
            this.video.style.display="block";
        });
    }
    populateSelect(select, options) {
        if (options && Array.isArray(options)) {
            options.forEach(opt => {
                let o = document.createElement("option");
                o.value = opt.filename;
                o.textContent = opt.filename;
                select.appendChild(o);
            });
        }
    }
    captureImage() {
        let canvas = document.createElement("canvas");
        canvas.width = this.video.videoWidth;
        canvas.height = this.video.videoHeight;
        canvas.getContext("2d").drawImage(this.video, 0, 0);
        this.addImage(canvas.toDataURL("image/png"));
    }
    addImage(src) {
        if (!src) return;
        let wrap = document.createElement("div");
        wrap.classList.add("itemWrapper");
        let img = document.createElement("img");
        img.src = src;
        img.style.width="100px";
        wrap.appendChild(img);
        let del = document.createElement("button");
        del.textContent="❌";
        del.classList.add("delete-btn");
        del.addEventListener("click",()=>wrap.remove());
        wrap.appendChild(del);
        this.imageList.appendChild(wrap);
    }
}
customElements.define("image-attachment", ImageAttachment);


/*******************************
 🎬 Video Attachment
*******************************/
class VideoAttachment extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode:"open" });
        this.shadowRoot.innerHTML = `
            <style>${AttachmentStyles}</style>
            <div class="wrapper">
                <h4>🎬 Video Attachment</h4>
                <label>Choose from existing:</label>
                <select id="videoHelperSelect"><option value="">-- Select --</option></select>
                <video id="preview" autoplay style="max-width:300px;"></video>
                <button id="recordBtn">⏺ Start Recording</button>
                <div id="videoList"></div>
            </div>
        `;
        this.init();
    }
    async init() {
        this.preview = this.shadowRoot.getElementById("preview");
        this.recordBtn = this.shadowRoot.getElementById("recordBtn");
        this.videoList = this.shadowRoot.getElementById("videoList");
        this.videoHelperSelect = this.shadowRoot.getElementById("videoHelperSelect");
        this.recorder=null; this.chunks=[];

        let options = await get_video_list();
        this.populateSelect(this.videoHelperSelect, options);

        this.recordBtn.addEventListener("click",()=>this.toggleRecording());
        this.videoHelperSelect.addEventListener("change", e => this.addVideo(`/uploads/videos/${e.target.value}`));

        navigator.mediaDevices.getUserMedia({ video:true, audio:true }).then(stream=>{
            this.preview.srcObject=stream; this.stream=stream;
        });
    }
    populateSelect(select, options) {
        if (options && Array.isArray(options)) {
            options.forEach(opt => {
                let o = document.createElement("option");
                o.value = opt.filename;
                o.textContent = opt.filename;
                select.appendChild(o);
            });
        }
    }
    toggleRecording() {
        if (!this.recorder || this.recorder.state==="inactive") {
            this.chunks=[];
            this.recorder=new MediaRecorder(this.stream);
            this.recorder.ondataavailable=e=>this.chunks.push(e.data);
            this.recorder.onstop=()=>{
                let blob=new Blob(this.chunks,{type:"video/webm"});
                let url=URL.createObjectURL(blob);
                this.addVideo(url);
            };
            this.recorder.start();
            this.recordBtn.textContent="⏹ Stop Recording";
        } else {
            this.recorder.stop();
            this.recordBtn.textContent="⏺ Start Recording";
        }
    }
    addVideo(src) {
        if (!src) return;
        let wrap=document.createElement("div");
        wrap.classList.add("itemWrapper");
        let vid=document.createElement("video");
        vid.src=src; vid.controls=true; vid.style.width="200px";
        wrap.appendChild(vid);
        let del=document.createElement("button");
        del.textContent="❌"; del.classList.add("delete-btn");
        del.addEventListener("click",()=>wrap.remove());
        wrap.appendChild(del);
        this.videoList.appendChild(wrap);
    }
}
customElements.define("video-attachment", VideoAttachment);


/*******************************
 🎤 Audio Attachment
*******************************/
class AudioAttachment extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode:"open" });
        this.shadowRoot.innerHTML = `
            <style>${AttachmentStyles}</style>
            <div class="wrapper">
                <h4>🎤 Audio Attachment</h4>
                <label>Choose from existing:</label>
                <select id="audioHelperSelect"><option value="">-- Select --</option></select>
                <button id="recordBtn">🎙️ Start Recording</button>
                <div id="audioList"></div>
            </div>
        `;
        this.init();
    }
    async init() {
        this.recordBtn=this.shadowRoot.getElementById("recordBtn");
        this.audioList=this.shadowRoot.getElementById("audioList");
        this.audioHelperSelect=this.shadowRoot.getElementById("audioHelperSelect");
        this.recorder=null; this.chunks=[];

        let options=await get_audio_list();
        this.populateSelect(this.audioHelperSelect, options);

        this.recordBtn.addEventListener("click",()=>this.toggleRecording());
        this.audioHelperSelect.addEventListener("change", e=>this.addAudio(`/uploads/audios/${e.target.value}`));
    }
    populateSelect(select, options) {
        if (options && Array.isArray(options)) {
            options.forEach(opt => {
                let o=document.createElement("option");
                o.value=opt.filename;
                o.textContent=opt.filename;
                select.appendChild(o);
            });
        }
    }
    toggleRecording() {
        if (!this.recorder || this.recorder.state==="inactive") {
            navigator.mediaDevices.getUserMedia({audio:true}).then(stream=>{
                this.chunks=[];
                this.recorder=new MediaRecorder(stream);
                this.recorder.ondataavailable=e=>this.chunks.push(e.data);
                this.recorder.onstop=()=>{
                    let blob=new Blob(this.chunks,{type:"audio/webm"});
                    let url=URL.createObjectURL(blob);
                    this.addAudio(url);
                };
                this.recorder.start();
                this.recordBtn.textContent="⏹ Stop Recording";
            });
        } else {
            this.recorder.stop();
            this.recordBtn.textContent="🎙️ Start Recording";
        }
    }
    addAudio(src) {
        if (!src) return;
        let wrap=document.createElement("div");
        wrap.classList.add("itemWrapper");
        let audio=document.createElement("audio");
        audio.src=src; audio.controls=true;
        wrap.appendChild(audio);
        let del=document.createElement("button");
        del.textContent="❌"; del.classList.add("delete-btn");
        del.addEventListener("click",()=>wrap.remove());
        wrap.appendChild(del);
        this.audioList.appendChild(wrap);
    }
}
customElements.define("audio-attachment", AudioAttachment);


/*******************************
 🔳 QR Attachment
*******************************/
class QRAttachment extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:"open"});
        this.shadowRoot.innerHTML=`
            <style>${AttachmentStyles}</style>
            <div class="wrapper">
                <h4>🔳 QR Attachment</h4>
                <label>Choose from existing:</label>
                <select id="qrHelperSelect"><option value="">-- Select --</option></select>
                <input type="text" id="qrText" placeholder="Enter text for QR">
                <button id="genBtn">Generate QR</button>
                <div id="qrList"></div>
            </div>
        `;
        this.init();
    }
    async init() {
        this.qrHelperSelect=this.shadowRoot.getElementById("qrHelperSelect");
        this.qrText=this.shadowRoot.getElementById("qrText");
        this.genBtn=this.shadowRoot.getElementById("genBtn");
        this.qrList=this.shadowRoot.getElementById("qrList");

        let options=await get_qr_list();
        this.populateSelect(this.qrHelperSelect, options);

        this.genBtn.addEventListener("click",()=>this.generateQR(this.qrText.value));
        this.qrHelperSelect.addEventListener("change", e=>this.generateQR(e.target.value));
    }
    populateSelect(select, options) {
        if (options && Array.isArray(options)) {
            options.forEach(opt => {
                let o=document.createElement("option");
                o.value=opt.filename;
                o.textContent=opt.filename;
                select.appendChild(o);
            });
        }
    }
    generateQR(text) {
        if (!text) return;
        let wrap=document.createElement("div");
        wrap.classList.add("itemWrapper");
        let qrDiv=document.createElement("div");
        new QRCode(qrDiv,{text:text,width:128,height:128});
        wrap.appendChild(qrDiv);
        let del=document.createElement("button");
        del.textContent="❌"; del.classList.add("delete-btn");
        del.addEventListener("click",()=>wrap.remove());
        wrap.appendChild(del);
        this.qrList.appendChild(wrap);
    }
}
customElements.define("qr-attachment", QRAttachment);


/*******************************
 Common Styles
*******************************/
const AttachmentStyles=`
.wrapper{padding:10px;border:1px solid #ccc;border-radius:5px;background:#f9f9f9;margin-bottom:10px;}
.itemWrapper{display:flex;align-items:center;margin:5px 0;background:#fff;padding:5px;border-radius:4px;box-shadow:0 1px 2px rgba(0,0,0,0.1);}
.delete-btn{background:#d9534f;color:#fff;border:none;border-radius:3px;cursor:pointer;margin-left:8px;padding:2px 6px;}
.delete-btn:hover{background:#c9302c;}
select,input[type="file"],input[type="text"],button{margin:5px 0;padding:5px;width:100%;}
`;



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
          <option value="smallint" ${field.datatype === 'smallint' ? 'selected' : ''}>Boolean</option>
          <option value="number" ${field.datatype === 'number' ? 'selected' : ''}>Number</option>
          <option value="decimal" ${field.datatype === 'decimal' ? 'selected' : ''}>Decimal</option>
          <option value="double" ${field.datatype === 'double' ? 'selected' : ''}>Double</option>
          <option value="float" ${field.datatype === 'float' ? 'selected' : ''}>Float</option>
          <option value="int" ${field.datatype === 'int' ? 'selected' : ''}>Int</option>
          <option value="bigint" ${field.datatype === 'bigint' ? 'selected' : ''}>Bigint</option>
          <option value="date" ${field.datatype === 'date' ? 'selected' : ''}>Date</option>
          <option value="time" ${field.datatype === 'time' ? 'selected' : ''}>time</option>
          <option value="datetime" ${field.datatype === 'datetime' ? 'selected' : ''}>Datetime</option>
          <option value="mediumtext" ${field.datatype === 'mediumtext' ? 'selected' : ''}>MediumText</option>
          <option value="json" ${field.datatype === 'json' ? 'selected' : ''}>JSON</option>
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
      console.log("Populating Doc_template_Control from template", config);
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
    console.log(data)
    try {
      const parsed = typeof data === 'string' ? JSON.parse(data) : data;
      this.populateFromTemplate(parsed);
    } catch (e) {
      console.error("Invalid data format", e);
    }
  }


  get value() {
    //console.log(fields)
    
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
    this.jobs = {};
    this.fieldsByDocType = {};
    this.currentDocType = '';
    this.currentJob = 'create'; // track currently selected job
  }

  connectedCallback() {
    this.render();
    this.loadDocTypesFromBackend();
  }

  async loadDocTypesFromBackend() {
    try {
      const templates = await getDocTemplates1({});
      console.log("[DEBUG] Loaded templates:", templates);

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
              fields = parsed.fields.map((f, index) => ({
                seqno: f.seqno ?? index,
                field: f.name || f.field || "",
                control: f.control || "text",
                trigger: f.trigger || [],
                edit: f.edit ?? (f.not_null === "false"),
                show: f.show ?? true,
                mandatory: f.mandatory ?? (f.not_null === "true"),
                default: f.default || "",
                helper: f.helper || "none",
                unique: f.unique || "false",
                datatype: f.datatype || "",
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
            <th>Default</th><th>Trigger</th><th>Unique</th><th>DataType</th>
            <th>Lang (EN)</th><th>Lang (DE)</th><th>Lang (AR)</th><th>Lang (FR)</th><th>Helper</th><th>Remove</th>
          </tr>
        </thead>
        <tbody id="field-body"></tbody>
      </table>
      <button id="add-field" style="display:none;">Add Field</button>
      <button id="save-fields" style="display:none;">Save Job Fields</button>
      <button id="export-json" style="display:none;">Export Current Job</button>
      <button id="alert-json" style="display:none;">Show JSON in Alert</button>

      <pre id="output"></pre>
    `;

    this.shadowRoot.getElementById('add-field').addEventListener('click', () => this.addField());
    this.shadowRoot.getElementById('docTypeSelector').addEventListener('change', (e) => this.populateAllJobs(e.target.value));
    this.shadowRoot.getElementById('loadJobFields').addEventListener('click', () => this.loadFields(this.currentJob));
    this.shadowRoot.getElementById('save-fields').addEventListener('click', () => this.saveFields(this.currentJob));
    this.shadowRoot.getElementById('save-cancel').addEventListener('click', () => this.saveCancelConfig());
    this.shadowRoot.getElementById('export-json').addEventListener('click', () => {
      const config = this.exportConfig(this.currentJob);
      this.shadowRoot.getElementById('output').textContent = JSON.stringify(config, null, 2);
    });
    this.shadowRoot.getElementById('alert-json').addEventListener('click', () => {
      const config = this.exportConfig(this.currentJob);
      alert(JSON.stringify(config, null, 2));
    });
    this.shadowRoot.getElementById('jobSelector').addEventListener('change', e => {
      this.currentJob = e.target.value;
      this.shadowRoot.getElementById('cancel-section').style.display = this.currentJob === 'cancel' ? 'block' : 'none';
      this.loadFields(this.currentJob);
    });
  }

  populateAllJobs(docType) {
    if (!docType) return;
    this.currentDocType = docType;
    const fields = this.fieldsByDocType[docType] || [];
    this.jobs[this.currentJob] = JSON.parse(JSON.stringify(fields));
    if (this.currentJob === 'cancel') {
      this.jobs.cancel = { api: "config", onSuccess: "Role_canceled()" };
    }
    this.loadFields(this.currentJob);
  }

  saveCancelConfig() {
    const api = this.shadowRoot.getElementById('cancelApi').value || 'config';
    const onSuccess = this.shadowRoot.getElementById('cancelOnSuccess').value || 'Role_canceled()';
    this.jobs.cancel = { api, onSuccess };
    console.log("[DEBUG] Saved cancel config:", this.jobs.cancel);
  }

  loadFields(job) {
    const tbody = this.shadowRoot.getElementById('field-body');
    tbody.innerHTML = '';
    if (!Array.isArray(this.jobs[job])) return;
    this.jobs[job].forEach(f => this.addFieldFromObject(f));
  }

  saveFields(job) {
    if (job === 'cancel') {
      this.saveCancelConfig();
      return;
    }
    this.jobs[job] = this.captureFields();
    console.log(`[DEBUG] Saved job '${job}' only:`, this.jobs[job]);
  }

  exportConfig(job) {
    if (job === 'cancel') {
      return {
        job: { cancel: this.jobs.cancel || { api: "config", onSuccess: "Role_canceled()" } }
      };
    }

    const fields = this.jobs[job] || [];
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

    return {
      getDataApi: this.shadowRoot.getElementById('getDataApi').value,
      doc_type: this.currentDocType,
      fields: (this.fieldsByDocType[this.currentDocType] || []).map(f => ({ name: f.field, datatype: f.datatype })),
      job: {
        [job]: {
          roles: ["Admin"],
          data,
          api: `config/${job === 'list' ? 'list_details' : job === 'update' ? 'modifications' : 'new'}`,
          onSuccess: `Role_${job}ed()`
        }
      }
    };
  }

  addField(field = "", control = "text", trigger = []) {
    this.addFieldFromObject({
      field,
      control,
      trigger,
      edit: false, show: false, mandatory: false,
      default: "",
      unique: "false",
      datatype: "",
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
        <option value="datime">datime</option>
      </select></td>
      <td><input type="checkbox" class="edit" ${obj.edit ? "checked" : ""}/></td>
      <td><input type="checkbox" class="show" ${obj.show ? "checked" : ""}/></td>
      <td><input type="checkbox" class="mandatory" ${obj.mandatory ? "checked" : ""}/></td>
      <td><input type="text" class="default" value="${obj.default || ""}"/></td>
      <td><button class="trigger-btn">⚙️ Configure</button><textarea class="trigger" style="display:none">${JSON.stringify(obj.trigger || [])}</textarea></td>
      <td><input type="text" class="unique" value="${obj.unique || "false"}"/></td>
      <td><input type="text" class="datatype" value="${obj.datatype || ""}"/></td>
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
      let existingTriggers = [];
      try {
        existingTriggers = JSON.parse(textarea.value || "[]");
      } catch (e) {
        existingTriggers = [];
      }
      openTriggerModal(existingTriggers, (updatedTriggers) => {
        textarea.value = JSON.stringify(updatedTriggers, null, 2);
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
      unique: row.querySelector('.unique').value,
      datatype: row.querySelector('.datatype').value,
      helper: row.querySelector('.helper').value,
      lang: {
        english: row.querySelector('.lang-en').value,
        german: row.querySelector('.lang-de').value,
        arabic: row.querySelector('.lang-ar').value,
        french: row.querySelector('.lang-fr').value
      }
    }));
  }
}

customElements.define('field-attribute-control', FieldAttributeControl);




/*
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
              fields = parsed.fields.map((f, index) => ({
                seqno: f.seqno ?? index,
                field: f.name || f.field || "",           // Backend uses 'name'
                control: f.control || "text",
                trigger: f.trigger || [],
                edit: f.edit ?? (f.not_null === "false"),  // Map not_null to edit
                show: f.show ?? true,
                mandatory: f.mandatory ?? (f.not_null === "true"), // Map not_null to mandatory
                default: f.default || "",
                helper: f.helper || "none",
                unique: f.unique || "false",               // Add unique field from backend
                datatype: f.datatype || "",                // Add datatype field from backend
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
    console.log(">>>>>>>>>* Populate from template:", templateJson);
    try {
      const jobKeys = ['create', 'update', 'list', 'cancel'];
      this.jobs = {}; // reset

      for (const job of jobKeys) {
        const jobData = templateJson?.job?.[job];

        // In your JSON, jobData is already an array of field objects
        if (!Array.isArray(jobData)) {
          this.jobs[job] = [];
          continue;
        }

        // Sort fields by seqno
        const fields = [...jobData].sort((a, b) => (a.seqno ?? 0) - (b.seqno ?? 0));
        this.jobs[job] = fields;
      }

      const currentJob = this.shadowRoot.querySelector('.job-tab.active')?.dataset.job || 'create';
      this.loadFields(currentJob);

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
            <th>Default</th><th>Trigger</th><th>Unique</th><th>DataType</th>
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
    // Include the original fields from the selected document type (only name and datatype)
    const originalFields = this.currentDocType ? 
      (this.fieldsByDocType[this.currentDocType] || []).map(f => ({
        name: f.field,
        datatype: f.datatype
      })) : [];
    
    return {
      getDataApi: this.shadowRoot.getElementById('getDataApi')?.value || '',
      fields: originalFields,
      job: this.jobs
    };
  }

  set value(val) {
    if (typeof val === "object") {
      this.jobs = val.job || {};
      this.currentDocType = val.doc_type || "";
      this.shadowRoot.getElementById('getDataApi').value = val.getDataApi || '';
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
    this.loadFields('create');
  }

  addField(field = "", control = "text", trigger = []) {
    this.addFieldFromObject({
      field,
      control,
      trigger,
      edit: false,  show: false,  mandatory: false,
      default: "",
      unique: "false",
      datatype: "",
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
        <option value="datime">datime</option>
      </select></td>
      <td><input type="checkbox" class="edit" ${obj.edit ? "checked" : ""}/></td>
      <td><input type="checkbox" class="show" ${obj.show ? "checked" : ""}/></td>
      <td><input type="checkbox" class="mandatory" ${obj.mandatory ? "checked" : ""}/></td>
      <td><input type="text" class="default" value="${obj.default || ""}"/></td>
      <td><button class="trigger-btn">⚙️ Configure</button><textarea class="trigger" style="display:none">${JSON.stringify(obj.trigger || [])}</textarea></td>
      <td><input type="text" class="unique" value="${obj.unique || "false"}"/></td>
      <td><input type="text" class="datatype" value="${obj.datatype || ""}"/></td>
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
      let existingTriggers = [];
      try {
        existingTriggers = JSON.parse(textarea.value || "[]");
      } catch (e) {
        existingTriggers = [];
      }
      openTriggerModal(existingTriggers, (updatedTriggers) => {
        textarea.value = JSON.stringify(updatedTriggers, null, 2);
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
      unique: row.querySelector('.unique').value,
      datatype: row.querySelector('.datatype').value,
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
    
    // Include the original fields from the selected document type (only name and datatype)
    const originalFields = this.currentDocType ? 
      (this.fieldsByDocType[this.currentDocType] || []).map(f => ({
        name: f.field,
        datatype: f.datatype
      })) : [];
    
    return {
      getDataApi: this.shadowRoot.getElementById('getDataApi').value,
      fields: originalFields,
      job
    };
  }
}
customElements.define('field-attribute-control', FieldAttributeControl);
*/


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

  // Define available trigger types and their corresponding functions
  const functionTypes = {
    'sourcing': ['sourceFunction1', 'sourceFunction2', 'sourceFunction3'],
    'storing': ['destFunction1', 'destFunction2', 'destFunction3'],
    'processing': ['processFunction1', 'processFunction2', 'processFunction3'],
    'systemcall': ['systemFunction1', 'systemFunction2']
  };

  // Default trigger events (you can customize these)
  const triggerEvents = ['onchange', 'onselect', 'onload', 'onclick', 'onsubmit'];

  const createRow = (trigger = {}) => {
    const row = document.createElement('tr');
    
   

    // Create type dropdown
    const typeSelect = document.createElement('select');
    typeSelect.className = 'trigger-type';
    Object.keys(functionTypes).forEach(type => {
      const opt = document.createElement('option');
      opt.value = type;
      opt.textContent = type.charAt(0).toUpperCase() + type.slice(1);
      if (trigger.type === type) opt.selected = true;
      typeSelect.appendChild(opt);
    });

     // Create event dropdown
    const eventSelect = document.createElement('select');
    eventSelect.className = 'trigger-event';
    triggerEvents.forEach(ev => {
      const opt = document.createElement('option');
      opt.value = ev;
      opt.textContent = ev;
      if (trigger.event === ev) opt.selected = true;
      eventSelect.appendChild(opt);
    });

     

    // Create function dropdown (will be populated based on type)
    const funcSelect = document.createElement('select');
    funcSelect.className = 'trigger-function';
    
    // Populate function dropdown based on selected type
    const updateFunctionDropdown = () => {
      const selectedType = typeSelect.value;
      funcSelect.innerHTML = ''; // Clear existing options
      
      functionTypes[selectedType].forEach(fn => {
        const opt = document.createElement('option');
        opt.value = fn;
        opt.textContent = fn;
        if (trigger.function === fn) opt.selected = true;
        funcSelect.appendChild(opt);
      });
    };
    
    // Initial population
    updateFunctionDropdown();
    
    // Update functions when type changes
    typeSelect.addEventListener('change', updateFunctionDropdown);

    // Create remove button
    const removeBtn = document.createElement('button');
    removeBtn.className = "btn btn-danger btn-sm";
    removeBtn.innerHTML = "&times;";
    removeBtn.onclick = () => row.remove();

    // Append all elements to the row
    row.appendChild(tdWrap(typeSelect));
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

  // Initialize with existing triggers
  existing.forEach(createRow);

  // Add new row button
  document.getElementById('addTriggerRow').onclick = () => createRow();

  // Save button handler
  document.getElementById('saveTrigger').onclick = () => {
    const updated = [];
    tbody.querySelectorAll('tr').forEach(row => {
      const [typeSel, eventSel, funcSel] = row.querySelectorAll('select');
      updated.push({ 
        type: typeSel.value, 
        event: eventSel.value, 
        function: funcSel.value 
      });
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
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    background: #ffffff;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    overflow-y: auto; /* Changed from overflow: hidden */
                    overflow-x: hidden;
                    padding: 20px;
                }
                /* Control Panel Styles */
                .control-panel {
                    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
                    border: 1px solid #dee2e6;
                    border-radius: 12px;
                    padding: 20px;
                    margin-bottom: 20px;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
                }

                .control-panel-title {
                    font-size: 18px;
                    font-weight: 600;
                    color: #495057;
                    margin-bottom: 16px;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .control-panel-title::before {
                    content: "⚙️";
                    font-size: 20px;
                }

                .controls-row {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr 1fr;
                    gap: 20px;
                    align-items: end;
                }

                .control-group {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }

                .control-group label {
                    font-weight: 600;
                    font-size: 14px;
                    color: #495057;
                    margin-bottom: 4px;
                }

                .control-group select {
                    padding: 10px 12px;
                    border: 2px solid #e9ecef;
                    border-radius: 8px;
                    background: #ffffff;
                    font-size: 14px;
                    color: #495057;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    min-height: 44px;
                }

                .control-group select:hover {
                    border-color: #0d6efd;
                    box-shadow: 0 0 0 0.2rem rgba(13,110,253,0.15);
                }

                .control-group select:focus {
                    outline: none;
                    border-color: #0d6efd;
                    box-shadow: 0 0 0 0.2rem rgba(13,110,253,0.25);
                }

                /* Multi-select containers */
                #customMultiSelectContainer, 
                #customThirdMultiSelectContainer {
                    min-height: 44px;
                    max-height: 120px;
                    overflow-y: auto;
                    display: flex;
                    flex-wrap: wrap;
                    gap: 6px;
                    background: #ffffff;
                    border: 2px solid #e9ecef;
                    border-radius: 8px;
                    padding: 8px;
                    transition: all 0.2s ease;
                }

                #customMultiSelectContainer:hover,
                #customThirdMultiSelectContainer:hover {
                    border-color: #0d6efd;
                    box-shadow: 0 0 0 0.2rem rgba(13,110,253,0.15);
                }

                #customMultiSelectContainer select,
                #customThirdMultiSelectContainer select {
                    margin: 0;
                    min-width: 100px;
                    border: 1px solid #dee2e6;
                    border-radius: 6px;
                    padding: 4px 8px;
                    font-size: 12px;
                }

                #customMultiSelectContainer span,
                #customThirdMultiSelectContainer span {
                    background: #e7f3ff;
                    color: #0066cc;
                    padding: 4px 8px;
                    border-radius: 16px;
                    font-size: 12px;
                    font-weight: 500;
                    border: 1px solid #b3d9ff;
                }

                /* Graph Container Styles */
                .graph-container {
                    flex: 0 0 auto; /* Changed from flex: 1 */
                    background: #ffffff;
                    border: 1px solid #dee2e6;
                    border-radius: 12px;
                    padding: 20px;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
                    display: flex;
                    flex-direction: column;
                    width: fit-content;
                    min-height: 200px; /* Set minimum height for proper initial display */
                    
                }
                .graph-header {
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    margin-bottom: 16px;
                    padding-bottom: 12px;
                    border-bottom: 2px solid #f8f9fa;
                    position: relative;
                }

                .graph-title {
                    font-size: 18px;
                    font-weight: 600;
                    color: #495057;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .graph-title::before {
                    content: "📊";
                    font-size: 20px;
                }

                .legend-control-panel {
                    grid-column: 2;
                    grid-row: 3;
                    background: #f8f9fa;
                    border: 1px solid #dee2e6;
                    border-radius: 8px;
                    padding: 15px;
                    margin-top: 10px;
                    overflow: auto;
                }

                .legend-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 10px;
                }

                .legend-title {
                    font-size: 16px;
                    font-weight: 600;
                    color: #495057;
                    margin: 0;
                }

                .legend-toggle {
                    background: #0d6efd;
                    color: white;
                    border: none;
                    padding: 8px 16px;
                    border-radius: 6px;
                    cursor: pointer;
                    font-size: 14px;
                    font-weight: 500;
                    transition: background-color 0.2s ease;
                }

                .legend-toggle:hover {
                    background: #0056b3;
                }

                .legend-items {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                }

                .legend-color-box {
                    width: 16px !important;
                    height: 16px !important;
                    display: inline-block !important;
                    margin-right: 8px !important;
                    border: 1px solid #ccc !important;
                    border-radius: 3px !important;
                    vertical-align: middle !important;
                    /* Ensure the background color shows up */
                    background-color: inherit !important;
                    /* Prevent any other styles from overriding */
                    background-image: none !important;
                    background-repeat: no-repeat !important;
                }

                .legend-item {
                    display: flex !important;
                    align-items: center !important;
                    padding: 4px 8px !important;
                    margin: 2px 0 !important;
                    cursor: pointer !important;
                    border-radius: 4px !important;
                    transition: background-color 0.2s ease !important;
                }

                .legend-item:hover {
                    background-color: rgba(0, 0, 0, 0.05) !important;
                }
                
                .legend-item.hidden {
                    opacity: 0.5 !important;
                }

                .legend-label {
                    flex: 1 !important;
                    margin: 0 8px !important;
                    font-size: 14px !important;
                    color: #333 !important;
                }

                .legend-visibility-icon {
                    font-size: 16px !important;
                    margin-left: auto !important;
                    opacity: 0.7 !important;
                }

                .legend-visibility-icon:hover {
                    opacity: 1 !important;
                }

                .legend-color {
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    border: 1px solid #ccc;
                }

                .color-swatch {
                    width: 24px !important;
                    height: 24px !important;
                    border-radius: 50% !important;
                    cursor: pointer !important;
                    border: 2px solid #fff !important;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.3) !important;
                    transition: transform 0.1s ease !important;
                }

                .color-swatch:hover {
                    transform: scale(1.1) !important;
                    border-color: #007bff !important;
                }

                /* Custom Plotly Toolbar positioned above graph */
                .plotly-toolbar-container {
                    display: flex;
                    gap: 8px;
                    align-items: center;
                    background: #ffffff;
                    padding: 8px;
                    border: 1px solid #dee2e6;
                    border-radius: 8px;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                    margin-bottom: 10px;
                }

                /* Hide the original Plotly modebar that appears on the graph */
                #graphCanvas .modebar {
                    display: none !important;
                }

                /* Style the relocated modebar */
                .custom-modebar {
                    display: flex !important;
                    gap: 4px !important;
                    background: transparent !important;
                    border: none !important;
                    position: static !important;
                }

                .custom-modebar .modebar-group {
                    display: flex !important;
                    gap: 2px !important;
                    margin: 0 4px !important;
                    border-right: 1px solid #dee2e6 !important;
                    padding-right: 8px !important;
                }

                .custom-modebar .modebar-group:last-child {
                    border-right: none !important;
                    padding-right: 0 !important;
                }

                .custom-modebar .modebar-btn {
                    background: #ffffff !important;
                    border: 1px solid #dee2e6 !important;
                    border-radius: 4px !important;
                    padding: 6px !important;
                    margin: 0 1px !important;
                    cursor: pointer !important;
                    transition: all 0.2s ease !important;
                    color: #495057 !important;
                }

                .custom-modebar .modebar-btn:hover {
                    background: #f8f9fa !important;
                    border-color: #0d6efd !important;
                }

                .custom-modebar .modebar-btn svg {
                    width: 16px !important;
                    height: 16px !important;
                }

                .chart-wrapper {
                    flex: 1;
                    display: grid;
                    grid-template-columns: 80px 1fr;
                    grid-template-rows: 1fr auto auto;
                    gap: 10px;
                    min-height: 500px; /* Ensure minimum height */
                    height: 100%; /* Take full height */
                    align-items: stretch;
                    max-width: 100%; /* Add max-width constraint */
                    width: fit-content; 
                }

                .y-axis-title {
                    grid-column: 1;
                    grid-row: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    writing-mode: vertical-rl;
                    text-orientation: mixed;
                    transform: rotate(180deg);
                    font-size: 16px;
                    font-weight: 600;
                    color: #495057;
                    background: #f8f9fa;
                    border-radius: 8px;
                    margin-right: 5px;
                }

                .x-axis-title {
                    grid-column: 2;
                    grid-row: 2;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 16px;
                    font-weight: 600;
                    color: #495057;
                    background: #f8f9fa;
                    border-radius: 8px;
                    padding: 10px;
                    min-height: 40px;
                }
                
                .graph-title-display {
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%); /* true horizontal centering */
                    text-align: center;
                    font-weight: bold;
                    color: #333;
                    margin-bottom: 8px;
                }
                .font-controls-container {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 12px;
                    padding: 10px;
                    background: #f8f9fa;
                    border: 1px solid #dee2e6;
                    border-radius: 6px;
                    margin-bottom: 16px;
                }

                #graphCanvas {
                    grid-column: 2;
                    grid-row: 1;
                    width: 100%;
                    height: 100%;
                    background: #ffffff;
                    border: 1px solid #e9ecef;
                    border-radius: 8px;
                    min-height: 450px; /* Ensure minimum height for initial render */
                    overflow: visible;
                    max-width: 100%;
                }

                .btn {
                    padding: 12px 24px;
                    border: none;
                    border-radius: 8px;
                    font-size: 14px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    min-width: 120px;
                    justify-content: center;
                }

                .btn-primary {
                    background: linear-gradient(135deg, #0d6efd 0%, #0056b3 100%);
                    color: white;
                    box-shadow: 0 2px 4px rgba(13, 110, 253, 0.3);
                }

                .btn-primary:hover {
                    background: linear-gradient(135deg, #0056b3 0%, #004085 100%);
                    transform: translateY(-1px);
                    box-shadow: 0 4px 8px rgba(13, 110, 253, 0.4);
                }

                .btn-secondary {
                    background: linear-gradient(135deg, #6c757d 0%, #5a6268 100%);
                    color: white;
                    box-shadow: 0 2px 4px rgba(108, 117, 125, 0.3);
                }

                .btn-secondary:hover {
                    background: linear-gradient(135deg, #5a6268 0%, #495057 100%);
                    transform: translateY(-1px);
                    box-shadow: 0 4px 8px rgba(108, 117, 125, 0.4);
                }

                .btn:active {
                    transform: translateY(0);
                    box-shadow: 0 1px 2px rgba(0,0,0,0.2);
                }

                /* Responsive adjustments */
                @media (max-width: 1200px) {
                    .controls-row {
                        grid-template-columns: 1fr 1fr;
                        gap: 16px;
                    }
                }

                @media (max-width: 768px) {
                    .controls-row {
                        grid-template-columns: 1fr;
                        gap: 12px;
                    }
                    
                    .chart-wrapper {
                        grid-template-columns: 50px 1fr;
                        min-height: 300px;
                    }
                    
                    .control-panel {
                        padding: 16px;
                    }
                    .disabled-axis {
                        opacity: 0.5;
                        pointer-events: none;
                        background-color: #f5f5f5;
                    }

                    .control-group.disabled {
                        opacity: 0.5;
                    }

                    .control-group.disabled label {
                        color: #999;
                    }

                    .modal-footer {
                        padding: 16px;
                    }

                    .btn {
                        padding: 10px 20px;
                        font-size: 13px;
                        min-width: 100px;
                    }
                    .doc-type-panel {
                        background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
                        border: 2px solid #2196f3;
                        border-radius: 12px;
                        padding: 20px;
                        margin-bottom: 20px;
                        box-shadow: 0 2px 8px rgba(33,150,243,0.2);
                    }
                    .doc-type-panel-title {
                        font-size: 18px;
                        font-weight: 600;
                        color: #1976d2;
                        margin-bottom: 16px;
                        display: flex;
                        align-items: center;
                        gap: 8px;
                    }
                    .doc-type-panel-title::before {
                        content: "📋";
                        font-size: 20px;
                    }
                    .doc-type-row {
                        display: flex;
                        gap: 20px;
                        align-items: end;
                    }
                }
                /* Help Button Styles - Add to your existing CSS */
                .help-button {
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
                    color: white;
                    border: none;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 18px;
                    font-weight: bold;
                    box-shadow: 0 2px 8px rgba(40, 167, 69, 0.3);
                    transition: all 0.3s ease;
                    z-index: 100;
                }

                .help-button:hover {
                    background: linear-gradient(135deg, #20c997 0%, #17a2b8 100%);
                    transform: scale(1.1);
                    box-shadow: 0 4px 12px rgba(40, 167, 69, 0.4);
                }

                /* Help Modal Styles */
                .help-modal {
                    display: none;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.7);
                    z-index: 2000;
                    overflow-y: auto;
                    backdrop-filter: blur(5px);
                }

                .help-modal.active {
                    display: flex;
                    align-items: flex-start;
                    justify-content: center;
                    padding: 20px;
                }

                .help-content {
                    background: white;
                    border-radius: 16px;
                    width: 90%;
                    max-width: 1200px;
                    max-height: 90vh;
                    overflow-y: auto;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
                    margin-top: 20px;
                    position: relative;
                }

                .help-header {
                    background: linear-gradient(135deg, #6f42c1 0%, #e83e8c 100%);
                    color: white;
                    padding: 30px;
                    border-radius: 16px 16px 0 0;
                    text-align: center;
                    position: sticky;
                    top: 0;
                    z-index: 10;
                }

                .help-title {
                    font-size: 28px;
                    font-weight: 700;
                    margin: 0 0 10px 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 12px;
                }

                .help-subtitle {
                    font-size: 16px;
                    opacity: 0.9;
                    margin: 0;
                    font-weight: 300;
                }

                .help-close {
                    position: absolute;
                    top: 20px;
                    right: 30px;
                    background: rgba(255, 255, 255, 0.2);
                    border: none;
                    color: white;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    cursor: pointer;
                    font-size: 20px;
                    font-weight: bold;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .help-close:hover {
                    background: rgba(255, 255, 255, 0.3);
                    transform: rotate(90deg);
                }

                .help-body {
                    padding: 0;
                }

                .help-nav {
                    display: flex;
                    background: #f8f9fa;
                    border-bottom: 1px solid #dee2e6;
                    overflow-x: auto;
                    position: sticky;
                    top: 100px;
                    z-index: 9;
                }

                .help-nav-item {
                    padding: 15px 25px;
                    background: none;
                    border: none;
                    cursor: pointer;
                    font-size: 14px;
                    font-weight: 500;
                    color: #495057;
                    white-space: nowrap;
                    transition: all 0.3s ease;
                    border-bottom: 3px solid transparent;
                }

                .help-nav-item:hover {
                    background: #e9ecef;
                    color: #6f42c1;
                }

                .help-nav-item.active {
                    background: white;
                    color: #6f42c1;
                    border-bottom-color: #6f42c1;
                }

                .help-section {
                    display: none;
                    padding: 30px;
                }

                .help-section.active {
                    display: block;
                }

                .help-cards {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
                    gap: 25px;
                    margin-bottom: 30px;
                }

                .help-card {
                    background: white;
                    border: 1px solid #e9ecef;
                    border-radius: 12px;
                    padding: 25px;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                }

                .help-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 4px;
                    background: linear-gradient(90deg, #6f42c1, #e83e8c, #fd7e14, #28a745);
                    border-radius: 12px 12px 0 0;
                }

                .help-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
                }

                .help-card-title {
                    font-size: 18px;
                    font-weight: 600;
                    color: #495057;
                    margin: 0 0 15px 0;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                .help-card-content {
                    font-size: 14px;
                    line-height: 1.6;
                    color: #6c757d;
                    margin-bottom: 20px;
                }

                .help-steps {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    counter-reset: step-counter;
                }

                .help-steps li {
                    padding: 10px 0;
                    border-bottom: 1px solid #f8f9fa;
                    position: relative;
                    padding-left: 30px;
                }

                .help-steps li::before {
                    content: counter(step-counter);
                    counter-increment: step-counter;
                    position: absolute;
                    left: 0;
                    top: 10px;
                    background: #6f42c1;
                    color: white;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 11px;
                    font-weight: bold;
                }

                .help-code {
                    background: #f8f9fa;
                    border: 1px solid #e9ecef;
                    border-radius: 6px;
                    padding: 15px;
                    font-family: 'Courier New', monospace;
                    font-size: 13px;
                    margin: 15px 0;
                    overflow-x: auto;
                }

                .help-warning {
                    background: #fff3cd;
                    border-left: 4px solid #ffc107;
                    padding: 15px;
                    margin: 15px 0;
                    border-radius: 0 6px 6px 0;
                }

                .help-info {
                    background: #d1ecf1;
                    border-left: 4px solid #17a2b8;
                    padding: 15px;
                    margin: 15px 0;
                    border-radius: 0 6px 6px 0;
                }

                .help-success {
                    background: #d4edda;
                    border-left: 4px solid #28a745;
                    padding: 15px;
                    margin: 15px 0;
                    border-radius: 0 6px 6px 0;
                }

                .feature-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 20px;
                    margin: 20px 0;
                }

                .feature-item {
                    text-align: center;
                    padding: 20px;
                    background: #f8f9fa;
                    border-radius: 8px;
                    transition: all 0.3s ease;
                }

                .feature-item:hover {
                    background: #e9ecef;
                    transform: translateY(-2px);
                }

                .feature-icon {
                    font-size: 32px;
                    margin-bottom: 10px;
                }

                @media (max-width: 768px) {
                    .help-content {
                        width: 95%;
                        margin: 10px auto;
                    }
                    
                    .help-cards {
                        grid-template-columns: 1fr;
                    }
                    
                    .help-nav {
                        flex-wrap: wrap;
                    }
                    
                    .help-nav-item {
                        padding: 10px 15px;
                        font-size: 13px;
                    }
                }
            </style>

                <div class="graphs-container">
                    <button class="help-button" id="helpButton" title="Open Help Guide">?</button>
                    <!-- NEW: Doc Type Selection Panel -->
                    <div class="doc-type-panel">
                        <div class="doc-type-panel-title"></div>
                        <div class="doc-type-row">
                            <div class="control-group">
                                <select id="docTypeSelect">
                                    <option value="">Select Document Type...</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <!-- Control Panel -->
                    <div class="control-panel">
                        <div class="controls-row">
                            <div class="control-group">
                                <label for="chartType">Chart Type</label>
                                <select id="chartType">
                                    <!-- Basic Charts -->
                                    <option value="scatter">Scatter Plot</option>
                                    <option value="line">Line Chart</option>
                                    <option value="bar">Bar Chart</option>
                                    <option value="pie">Pie Chart</option>
                                    <option value="donut">Donut Chart</option>
                                    <option value="bubble">Bubble Chart</option>
                                    <option value="area">Area Chart</option>
                                    <option value="histogram">Histogram</option>
                                    <option value="box">Box Plot</option>
                                    <option value="violin">Violin Plot</option>
                                    
                                    <!-- Statistical Charts -->
                                    <option value="error-bars">Error Bars</option>
                                    <option value="bar-error">Bar Chart with Error Bars</option>
                                    <option value="histogram-kde">Histogram with KDE</option>
                                    <option value="rug">Rug Plot</option>
                                    <option value="funnel">Funnel Chart</option>
                                    <option value="waterfall">Waterfall Chart</option>
                                    
                                                                                
                                    <!-- Scientific Charts -->
                                    <option value="heatmap">Heatmaps</option>
                                    <option value="contour">Contour Plots</option>
                                    <option value="2d-histogram">2D Histogram</option>
                                    <option value="3d-scatter">3D Scatter</option>
                                    <option value="3d-surface">3D Surface Plot</option>
                                    <option value="3d-mesh">3D Mesh Plot</option>
                                    <option value="3d-line">3D Line Plot</option>
                                    <option value="ternary">Ternary Plot</option>
                                    <option value="polar">Polar Chart</option>
                                    <option value="wind-rose">Wind Rose Chart</option>
                                    
                                    <!-- Financial Charts -->
                                    <option value="time-series">Time Series Line/Bar</option>
                                    
                                    <!-- Other & Specialized -->
                                    <option value="parallel-coordinates">Parallel Coordinates</option>
                                    <option value="parallel-categories">Parallel Categories</option>
                                    <option value="table">Table</option>
                                    <option value="indicator">Indicator</option>
                                    <option value="radar">Radar</option>
                                </select>
                            </div>
                            
                            <div class="control-group">
                                <label for="singleSelectDropdown">X-Axis</label>
                                <select id="singleSelectDropdown">
                                    <!-- Dynamically populated options -->
                                </select>
                            </div>
                            
                            <div class="control-group">
                                <label>Y-Axis</label>
                                <div id="customMultiSelectContainer"></div>
                            </div>
                            
                            <div class="control-group">
                                <label>Z-Axis</label>
                                <div id="customThirdMultiSelectContainer"></div>
                            </div>
                            <div class="graph-title">
                              <label for="graphTitleInput">Graph Title:</label>
                              <input type="text" id="graphTitleInput" placeholder="Enter graph title" class="form-control" style="width: 180px;">
                            </div>
                            <div>
                              <!-- X Axis Input -->
                              <label for="xAxisInput">X Axis:</label>
                              <input type="text" id="xAxisInput" placeholder="Enter X axis label" class="form-control" style="width: 150px;">

                              <!-- Y Axis Input -->
                              <label for="yAxisInput">Y Axis:</label>
                              <input type="text" id="yAxisInput" placeholder="Enter Y axis label" class="form-control" style="width: 150px;">
                            </div>  
                        </div>
                    </div>
                    <div class="font-controls-container">
                        <label for="graphTitleFontSize">Graph Title Font</label>
                        <select id="graphTitleFontSize">
                            <option value="14">14px</option>
                            <option value="16">16px</option>
                            <option value="18" selected>18px</option>
                            <option value="20">20px</option>
                            <option value="22">22px</option>
                            <option value="24">24px</option>
                            <option value="26">26px</option>
                            <option value="28">28px</option>
                            <option value="30">30px</option>
                            <option value="32">32px</option>
                            <option value="34">34px</option>
                            <option value="36">36px</option>
                            <option value="38">38px</option>
                            <option value="40">40px</option>
                        </select>

                        <label for="xAxisTitleFontSize">X-Axis Title Font</label>
                        <select id="xAxisTitleFontSize">
                            <option value="14">14px</option>
                            <option value="16">16px</option>
                            <option value="18">18px</option>
                            <option value="20" selected>20px</option>
                            <option value="22">22px</option>
                            <option value="24">24px</option>
                            <option value="26">26px</option>
                            <option value="28">28px</option>
                            <option value="30">30px</option>
                            <option value="32">32px</option>
                            <option value="34">34px</option>
                            <option value="36">36px</option>
                            <option value="38">38px</option>
                            <option value="40">40px</option>
                        </select>

                        <label for="yAxisTitleFontSize">Y-Axis Title Font</label>
                        <select id="yAxisTitleFontSize">
                            <option value="14">14px</option>
                            <option value="16">16px</option>
                            <option value="18">18px</option>
                            <option value="20" selected>20px</option>
                            <option value="22">22px</option>
                            <option value="24">24px</option>
                            <option value="26">26px</option>
                            <option value="28">28px</option>
                            <option value="30">30px</option>
                            <option value="32">32px</option>
                            <option value="34">34px</option>
                            <option value="36">36px</option>
                            <option value="38">38px</option>
                            <option value="40">40px</option>
                        </select>

                        <label for="xAxisFontSize">X-Axis Font</label>
                        <select id="xAxisFontSize">
                            <option value="10">10px</option>
                            <option value="12">12px</option>
                            <option value="14">14px</option>
                            <option value="16">16px</option>
                            <option value="18">18px</option>
                            <option value="20">20px</option>
                            <option value="22" selected>22px</option>
                            <option value="24">24px</option>
                            <option value="26">26px</option>
                            <option value="28">28px</option>
                            <option value="30">30px</option>
                            <option value="32">32px</option>
                            <option value="34">34px</option>
                            <option value="36">36px</option>
                            <option value="38">38px</option>
                            <option value="40">40px</option>
                        </select>

                        <label for="yAxisFontSize">Y-Axis Font</label>
                        <select id="yAxisFontSize">
                            <option value="10">10px</option>
                            <option value="12">12px</option>
                            <option value="14">14px</option>
                            <option value="16">16px</option>
                            <option value="18">18px</option>
                            <option value="20">20px</option>
                            <option value="22" selected>22px</option>
                            <option value="24">24px</option>
                            <option value="26">26px</option>
                            <option value="28">28px</option>
                            <option value="30">30px</option>
                            <option value="32">32px</option>
                            <option value="34">34px</option>
                            <option value="36">36px</option>
                            <option value="38">38px</option>
                            <option value="40">40px</option>
                        </select>

                        <label for="zAxisFontSize">Z-Axis Font</label>
                        <select id="zAxisFontSize">
                            <option value="10">10px</option>
                            <option value="12">12px</option>
                            <option value="14">14px</option>
                            <option value="16">16px</option>
                            <option value="18">18px</option>
                            <option value="20">20px</option>
                            <option value="22" selected>22px</option>
                            <option value="24">24px</option>
                            <option value="26">26px</option>
                            <option value="28">28px</option>
                            <option value="30">30px</option>
                            <option value="32">32px</option>
                            <option value="34">34px</option>
                            <option value="36">36px</option>
                            <option value="38">38px</option>
                            <option value="40">40px</option>
                        </select>
                    </div>
                    <!-- Graph Container -->
                    <div class="graph-container">
                        <div class="graph-header">
                            <!-- Center: Title -->
                            <div id="graphTitleDisplay" class="graph-title-display">Sample Graph Title</div>

                            <!-- Right: Toolbar -->
                            <div class="plotly-toolbar-container">
                                <div id="customToolbar" class="custom-modebar">🔧 Tools</div>
                            </div>
                        </div>
                        <div class="chart-wrapper">
                            <div class="y-axis-title" id="yAxisTitle">Values</div>
                            <div id="graphCanvas"></div>
                            <div class="x-axis-title" id="xAxisTitle">Labels</div>

                            <!-- Legend Control Panel -->
                            <div class="legend-control-panel" id="legendControlPanel" style="display: none;">
                                <div class="legend-header">
                                    <h3 class="legend-title">Chart Legend</h3>
                                </div>
                                <div class="legend-items" id="legendItems">
                                    <!-- Legend items will be populated dynamically -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Help Modal - Add this just before the closing </div> of graphs-container -->
                    <div class="help-modal" id="helpModal">
                        <div class="help-content">
                            <div class="help-header">
                                <button class="help-close" id="helpClose">&times;</button>
                                <h1 class="help-title">
                                    📊 Graphs Control Help Guide
                                </h1>
                                <p class="help-subtitle">Comprehensive guide to creating, saving, and managing chart templates</p>
                            </div>
                            
                            <nav class="help-nav">
                                <button class="help-nav-item active" data-section="overview">Overview</button>
                                <button class="help-nav-item" data-section="getting-started">Getting Started</button>
                                <button class="help-nav-item" data-section="chart-types">Chart Types</button>
                                <button class="help-nav-item" data-section="templates">Templates</button>
                                <button class="help-nav-item" data-section="customization">Customization</button>
                                <button class="help-nav-item" data-section="troubleshooting">Troubleshooting</button>
                            </nav>

                            <div class="help-body">
                                <!-- Overview Section -->
                                <div class="help-section active" id="overview">
                                    <h2>📋 Overview</h2>
                                    <p>The Graphs Control is a powerful visualization tool that allows you to create, customize, and save chart templates from your data. You can generate various types of charts, customize their appearance, and save configurations for reuse.</p>
                                    
                                    <div class="feature-grid">
                                        <div class="feature-item">
                                            <div class="feature-icon">📈</div>
                                            <h4>30+ Chart Types</h4>
                                            <p>From basic bar charts to complex 3D visualizations</p>
                                        </div>
                                        <div class="feature-item">
                                            <div class="feature-icon">🎨</div>
                                            <h4>Full Customization</h4>
                                            <p>Colors, fonts, titles, and styling options</p>
                                        </div>
                                        <div class="feature-item">
                                            <div class="feature-icon">💾</div>
                                            <h4>Template System</h4>
                                            <p>Save and reuse chart configurations</p>
                                        </div>
                                        <div class="feature-item">
                                            <div class="feature-icon">📊</div>
                                            <h4>Interactive Charts</h4>
                                            <p>Zoom, pan, and toggle data series</p>
                                        </div>
                                    </div>
                                </div>

                                <!-- Getting Started Section -->
                                <div class="help-section" id="getting-started">
                                    <h2>🚀 Getting Started</h2>
                                    <div class="help-cards">
                                        <div class="help-card">
                                            <h3 class="help-card-title">
                                                📋 Step 1: Select Document Type
                                            </h3>
                                            <div class="help-card-content">
                                                Choose your data source from the Document Type dropdown. This determines which dataset will be used for your chart.
                                            </div>
                                            <ol class="help-steps">
                                                <li>Click on "Select Document Type..." dropdown</li>
                                                <li>Choose your desired document type</li>
                                                <li>Wait for data to load</li>
                                            </ol>
                                        </div>

                                        <div class="help-card">
                                            <h3 class="help-card-title">
                                                📊 Step 2: Choose Chart Type
                                            </h3>
                                            <div class="help-card-content">
                                                Select the type of visualization that best represents your data. Different chart types work better for different data relationships.
                                            </div>
                                            <ol class="help-steps">
                                                <li>Click on "Chart Type" dropdown</li>
                                                <li>Browse through available options</li>
                                                <li>Select the most appropriate chart type</li>
                                            </ol>
                                        </div>

                                        <div class="help-card">
                                            <h3 class="help-card-title">
                                                📐 Step 3: Configure Axes
                                            </h3>
                                            <div class="help-card-content">
                                                Map your data columns to chart axes. Different chart types require different axis configurations.
                                            </div>
                                            <ol class="help-steps">
                                                <li>Select X-Axis column</li>
                                                <li>Add one or more Y-Axis columns</li>
                                                <li>Add Z-Axis columns if using 3D charts</li>
                                                <li>Set custom axis titles</li>
                                            </ol>
                                        </div>

                                        <div class="help-card">
                                            <h3 class="help-card-title">
                                                🎨 Step 4: Customize Appearance
                                            </h3>
                                            <div class="help-card-content">
                                                Personalize your chart with titles, colors, and font sizes to match your presentation needs.
                                            </div>
                                            <ol class="help-steps">
                                                <li>Enter a descriptive chart title</li>
                                                <li>Adjust font sizes for different elements</li>
                                                <li>Use the legend to show/hide data series</li>
                                                <li>Right-click legend items to change colors</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>

                                <!-- Chart Types Section -->
                                <div class="help-section" id="chart-types">
                                    <h2>📈 Chart Types</h2>
                                    <div class="help-cards">
                                        <div class="help-card">
                                            <h3 class="help-card-title">
                                                📊 Basic Charts
                                            </h3>
                                            <div class="help-card-content">
                                                <strong>Scatter Plot:</strong> Show relationships between two variables<br>
                                                <strong>Line Chart:</strong> Display trends over time<br>
                                                <strong>Bar Chart:</strong> Compare categories<br>
                                                <strong>Pie/Donut:</strong> Show parts of a whole<br>
                                                <strong>Area Chart:</strong> Emphasize magnitude of change
                                            </div>
                                            <div class="help-info">
                                                <strong>Best for:</strong> General data visualization, presentations, reports
                                            </div>
                                        </div>

                                        <div class="help-card">
                                            <h3 class="help-card-title">
                                                🧪 Scientific Charts
                                            </h3>
                                            <div class="help-card-content">
                                                <strong>Heatmap:</strong> Show data density or correlation<br>
                                                <strong>Contour Plot:</strong> Display 3D data in 2D<br>
                                                <strong>Box Plot:</strong> Show statistical distributions<br>
                                                <strong>Violin Plot:</strong> Combine box plot with density<br>
                                                <strong>Histogram:</strong> Show frequency distributions
                                            </div>
                                            <div class="help-info">
                                                <strong>Best for:</strong> Statistical analysis, research, data exploration
                                            </div>
                                        </div>

                                        <div class="help-card">
                                            <h3 class="help-card-title">
                                                🌐 3D Charts
                                            </h3>
                                            <div class="help-card-content">
                                                <strong>3D Scatter:</strong> Three-dimensional data points<br>
                                                <strong>3D Surface:</strong> Mathematical surface visualization<br>
                                                <strong>3D Line:</strong> Trajectories in 3D space<br>
                                                <strong>3D Mesh:</strong> Wireframe 3D objects
                                            </div>
                                            <div class="help-warning">
                                                <strong>Note:</strong> 3D charts require X, Y, and Z axis data
                                            </div>
                                        </div>

                                        <div class="help-card">
                                            <h3 class="help-card-title">
                                                📊 Specialized Charts
                                            </h3>
                                            <div class="help-card-content">
                                                <strong>Radar Chart:</strong> Multivariate data comparison<br>
                                                <strong>Parallel Coordinates:</strong> High-dimensional data<br>
                                                <strong>Waterfall:</strong> Sequential positive/negative changes<br>
                                                <strong>Funnel:</strong> Process flow visualization<br>
                                                <strong>Bubble Chart:</strong> Three-variable relationships
                                            </div>
                                            <div class="help-info">
                                                <strong>Best for:</strong> Specific business cases, complex data relationships
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Templates Section -->
                                <div class="help-section" id="templates">
                                    <h2>💾 Chart Templates</h2>
                                    <div class="help-cards">
                                        <div class="help-card">
                                            <h3 class="help-card-title">
                                                🛠️ Creating Templates
                                            </h3>
                                            <div class="help-card-content">
                                                Chart templates save your entire chart configuration for reuse with different datasets.
                                            </div>
                                            <ol class="help-steps">
                                                <li>Configure your chart completely (type, axes, colors, titles)</li>
                                                <li>Click the "Register" to Store Template</li>
                                                <li>Provide a detailed description</li>
                                                <li>Click "Save" to store the template as a Draft</li>
                                            </ol>
                                            <div class="help-success">
                                                Templates automatically include: chart type, axis mappings, colors, titles, font sizes, and visibility settings.
                                            </div>
                                        </div>

                                        <div class="help-card">
                                            <h3 class="help-card-title">
                                                🔄 Applying Templates
                                            </h3>
                                            <div class="help-card-content">
                                                Reuse saved templates with new data to maintain consistent visualizations.
                                            </div>
                                            <ol class="help-steps">
                                                <li>Select a document type with data</li>
                                                <li>Choose "Load Template" option</li>
                                                <li>Select your saved template</li>
                                                <li>The chart will automatically configure</li>
                                                <li>Adjust if needed for new data</li>
                                            </ol>
                                            <div class="help-info">
                                                Templates work best when the new dataset has similar column names and structure.
                                            </div>
                                        </div>

                                        <div class="help-card">
                                            <h3 class="help-card-title">
                                                📝 Template Naming Convention
                                            </h3>
                                            <div class="help-card-content">
                                                Templates are automatically named based on your selections:
                                            </div>
                                            <div class="help-code">
                    Format: [DocType]_[ChartType]_[XAxis]_[YAxis]_[ZAxis]

                    Example: "Sales_bar_Region_Revenue_Profit"
                                            </div>
                                            <ol class="help-steps">
                                                <li>Document Type (from dropdown selection)</li>
                                                <li>Chart Type (scatter, bar, line, etc.)</li>
                                                <li>X-Axis column name</li>
                                                <li>Y-Axis column names (joined with dashes)</li>
                                                <li>Z-Axis column names (if any)</li>
                                            </ol>
                                        </div>

                                        <div class="help-card">
                                            <h3 class="help-card-title">
                                                🔧 Template Management
                                            </h3>
                                            <div class="help-card-content">
                                                Best practices for organizing and maintaining your chart templates.
                                            </div>
                                            <ol class="help-steps">
                                                <li>Use descriptive names and descriptions</li>
                                                <li>Include purpose and usage notes</li>
                                                <li>Group similar templates together</li>
                                                <li>Regularly review and update templates</li>
                                                <li>Document any special requirements</li>
                                            </ol>
                                            <div class="help-warning">
                                                Templates are stored on the backend and shared across users with appropriate permissions.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Customization Section -->
                                <div class="help-section" id="customization">
                                    <h2>🎨 Customization Options</h2>
                                    <div class="help-cards">
                                        <div class="help-card">
                                            <h3 class="help-card-title">
                                                🎭 Colors and Legend
                                            </h3>
                                            <div class="help-card-content">
                                                Customize the visual appearance of your data series.
                                            </div>
                                            <ol class="help-steps">
                                                <li>Each Y-axis column gets a unique color automatically</li>
                                                <li>Click legend items to show/hide data series</li>
                                                <li>Right-click legend items to change colors</li>
                                                <li>Choose from the preset color palette</li>
                                                <li>Colors are saved with templates</li>
                                            </ol>
                                            <div class="help-info">
                                                The color system ensures consistent visualization across different chart types.
                                            </div>
                                        </div>

                                        <div class="help-card">
                                            <h3 class="help-card-title">
                                                🔤 Font Customization
                                            </h3>
                                            <div class="help-card-content">
                                                Adjust text sizes for better readability and presentation.
                                            </div>
                                            <ol class="help-steps">
                                                <li>Graph Title Font: 14px - 40px</li>
                                                <li>X-Axis Title Font: 14px - 40px</li>
                                                <li>Y-Axis Title Font: 14px - 40px</li>
                                                <li>Axis Label Fonts: 10px - 40px</li>
                                                <li>Z-Axis Font: For 3D charts</li>
                                            </ol>
                                            <div class="help-success">
                                                Default sizes are optimized for most use cases: 18px for titles, 22px for axis labels.
                                            </div>
                                        </div>

                                        <div class="help-card">
                                            <h3 class="help-card-title">
                                                🏷️ Titles and Labels
                                            </h3>
                                            <div class="help-card-content">
                                                Provide clear, descriptive titles for better understanding.
                                            </div>
                                            <ol class="help-steps">
                                                <li>Enter a descriptive graph title</li>
                                                <li>Set custom X-axis label</li>
                                                <li>Set custom Y-axis label</li>
                                                <li>Titles update automatically on the chart</li>
                                                <li>Empty fields use default labels</li>
                                            </ol>
                                        </div>

                                        <div class="help-card">
                                            <h3 class="help-card-title">
                                                🛠️ Interactive Features
                                            </h3>
                                            <div class="help-card-content">
                                                Use built-in tools for better chart interaction.
                                            </div>
                                            <ol class="help-steps">
                                                <li>Zoom: Use zoom tool or mouse wheel</li>
                                                <li>Pan: Click and drag to move around</li>
                                                <li>Reset: Return to original view</li>
                                                <li>Download: Save chart as PNG image</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>

                                <!-- Troubleshooting Section -->
                                <div class="help-section" id="troubleshooting">
                                    <h2>🔧 Troubleshooting</h2>
                                    <div class="help-cards">
                                        <div class="help-card">
                                            <h3 class="help-card-title">
                                                ❌ Common Issues
                                            </h3>
                                            <div class="help-card-content">
                                                Solutions to frequently encountered problems.
                                            </div>
                                            <div class="help-warning">
                                                <strong>Chart not displaying:</strong><br>
                                                • Ensure you've selected a document type<br>
                                                • Check that data is loaded<br>
                                                • Verify axis selections are appropriate for chart type
                                            </div>
                                            <div class="help-warning">
                                                <strong>Template not loading:</strong><br>
                                                • Check if column names match between template and data<br>
                                                • Ensure document type has the required columns<br>
                                                • Try refreshing the control
                                            </div>
                                        </div>

                                        <div class="help-card">
                                            <h3 class="help-card-title">
                                                📊 Chart Type Requirements
                                            </h3>
                                            <div class="help-card-content">
                                                Understanding what each chart type needs to work properly.
                                            </div>
                                            <div class="help-code">
                    Single Axis: Histogram, Rug, Indicator
                    - X-Axis only

                    Two Axis: Scatter, Line, Bar, Pie, etc.
                    - X-Axis + Y-Axis (one or more)

                    Three Axis: 3D Charts
                    - X-Axis + Y-Axis + Z-Axis required
                                            </div>
                                        </div>

                                        <div class="help-card">
                                            <h3 class="help-card-title">
                                                🔄 Performance Tips
                                            </h3>
                                            <div class="help-card-content">
                                                Optimize your charts for better performance.
                                            </div>
                                            <ol class="help-steps">
                                                <li>Limit the number of data points for complex charts</li>
                                                <li>Use appropriate chart types for your data size</li>
                                                <li>Avoid too many Y-axis columns simultaneously</li>
                                                <li>Close unused modals and controls</li>
                                                <li>Refresh the page if charts become unresponsive</li>
                                            </ol>
                                        </div>

                                        <div class="help-card">
                                            <h3 class="help-card-title">
                                                💡 Best Practices
                                            </h3>
                                            <div class="help-card-content">
                                                Guidelines for creating effective visualizations.
                                            </div>
                                            <ol class="help-steps">
                                                <li>Choose chart types that match your data story</li>
                                                <li>Use consistent colors across related charts</li>
                                                <li>Provide clear, descriptive titles and labels</li>
                                                <li>Test templates with different datasets</li>
                                                <li>Document template purposes and requirements</li>
                                            </ol>
                                            <div class="help-success">
                                                Well-designed charts communicate information clearly and effectively.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        `;

        this.singleSelectDropdown = this.shadowRoot.getElementById("singleSelectDropdown");
        this.selectedMultiColumns = [];
        this.selectedThirdMultiColumns = [];

        this.graphCanvas = this.shadowRoot.getElementById("graphCanvas");
        this.xAxisTitleElement = this.shadowRoot.getElementById("xAxisTitle");
        this.yAxisTitleElement = this.shadowRoot.getElementById("yAxisTitle");
        this.chartType = "scatter";
        this.rowData = []; // Store row data
        this.xAxisTitle = "Labels"; // Configurable x-axis title
        this.yAxisTitle = "Values"; // Configurable y-axis title
 
        // Bind methods to maintain 'this' context
        this.toggleAllLegendItems = this.toggleAllLegendItems.bind(this);

        this.shadowRoot.getElementById("docTypeSelect").addEventListener("change", (event) => {
            this.handleDocTypeChange(event.target.value);
        });

        this.shadowRoot.getElementById("chartType").addEventListener("change", (event) => {
            this.changeGraphType(event.target.value);
        });

        this.shadowRoot.getElementById("xAxisInput").addEventListener("input", () => {
            this.updateAxisTitlesFromInputs();
        });

        this.shadowRoot.getElementById("yAxisInput").addEventListener("input", () => {
            this.updateAxisTitlesFromInputs();
        });

        const titleInput = this.shadowRoot.getElementById("graphTitleInput");
        const titleDisplay = this.shadowRoot.getElementById("graphTitleDisplay");

        if (titleInput && titleDisplay) {
            titleInput.addEventListener("input", () => {
                titleDisplay.textContent = titleInput.value || "";
            });
        }

        this.shadowRoot.getElementById("graphTitleFontSize").addEventListener("change", (e) => {
            const size = e.target.value + "px";
            const graphTitleDisplay = this.shadowRoot.getElementById("graphTitleDisplay");
            if (graphTitleDisplay) {
                graphTitleDisplay.style.fontSize = size;
            }
        });

        // X-Axis Title Font
        this.shadowRoot.getElementById("xAxisTitleFontSize").addEventListener("change", (e) => {
            const size = e.target.value + "px";
            const xAxisTitle = this.shadowRoot.getElementById("xAxisTitle");
            if (xAxisTitle) {
                xAxisTitle.style.fontSize = size;
            }
        });

        // Y-Axis Title Font
        this.shadowRoot.getElementById("yAxisTitleFontSize").addEventListener("change", (e) => {
            const size = e.target.value + "px";
            const yAxisTitle = this.shadowRoot.getElementById("yAxisTitle");
            if (yAxisTitle) {
                yAxisTitle.style.fontSize = size;
            }
        });


        this.shadowRoot.getElementById("xAxisFontSize").addEventListener("change", () => {
            this.updateChart();
        });

        this.shadowRoot.getElementById("yAxisFontSize").addEventListener("change", () => {
            this.updateChart();
        });

        this.shadowRoot.getElementById("zAxisFontSize").addEventListener("change", () => {
            this.updateChart();
        });

        this.shadowRoot.getElementById("helpButton").addEventListener("click", () => {
            this.openHelpModal();
        });

        this.shadowRoot.getElementById("helpClose").addEventListener("click", () => {
            this.closeHelpModal();
        });

        this.shadowRoot.getElementById("helpModal").addEventListener("click", (e) => {
            if (e.target.id === "helpModal") {
                this.closeHelpModal();
            }
        });

        // Help navigation
        const helpNavItems = this.shadowRoot.querySelectorAll(".help-nav-item");
        helpNavItems.forEach(item => {
            item.addEventListener("click", () => {
                this.switchHelpSection(item.dataset.section);
            });
        });

        // Keyboard support for help modal
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && this.shadowRoot.getElementById("helpModal").classList.contains("active")) {
                this.closeHelpModal();
            }
        });
    }

    updateAxisTitlesFromInputs() {
        const xAxisInput = this.shadowRoot.getElementById("xAxisInput");
        const yAxisInput = this.shadowRoot.getElementById("yAxisInput");
        
        const xTitle = xAxisInput.value.trim() || "X-Axis";
        const yTitle = yAxisInput.value.trim() || "Y-Axis";
        
        this.setAxisTitles(xTitle, yTitle);
        
        // Update the chart if it exists
        if (this.graphCanvas && this.graphCanvas.data && this.graphCanvas.data.length > 0) {
            this.updateChart();
        }
    }

    initializeColors() {
        if (!this.colorPalette || this.colorPalette.length === 0) {
            this.colorPalette = [
                '#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd',
                '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf',
                '#aec7e8', '#ffbb78', '#98df8a', '#ff9896', '#c5b0d5',
                '#c49c94', '#f7b6d3', '#c7c7c7', '#dbdb8d', '#9edae5'
            ];
        }
        
        if (!this.columnColors) {
            this.columnColors = {};
        }
        
        if (!this.hiddenColumns) {
            this.hiddenColumns = new Set();
        }
        
        // console.log('Color system initialized:', {
        //     paletteLength: this.colorPalette.length,
        //     columnColorsEmpty: Object.keys(this.columnColors).length === 0
        // });
    }

    connectedCallback() {
        setTimeout(() => {
            this.populateDocTypeDropdown();
        }, 100);
        
        this.initializeChart();
    }

    changeGraphType(type) {
        this.chartType = type;
        this.updateChart();
    }

    initializeChart() {
        if (!window.Plotly) {
            const script = document.createElement("script");
            script.src = "https://cdn.plot.ly/plotly-3.1.0.min.js";
            script.onload = () => this.updateChart();
            document.head.appendChild(script);
        } else {
            this.updateChart();
        }
    }

    generateColumnColors(columns) {
        // console.log('Generating colors for columns:', columns);

        // Step 1: Remove colors for columns that are no longer present
        const currentCols = new Set(columns);
        Object.keys(this.columnColors).forEach((col) => {
            if (!currentCols.has(col)) {
                // console.log(`🗑 Removing color for column "${col}"`);
                delete this.columnColors[col];
            }
        });

        // Step 2: Find used colors in order
        const usedColors = Object.values(this.columnColors);
        
        // Step 3: Assign colors to new columns
        columns.forEach((col) => {
            if (!this.columnColors[col]) {
                // Find the first available color not in use
                let color = this.colorPalette.find(c => !usedColors.includes(c));
                
                // If all colors are used, wrap around
                if (!color) {
                    const assignedCount = Object.keys(this.columnColors).length;
                    color = this.colorPalette[assignedCount % this.colorPalette.length];
                }

                this.columnColors[col] = color;
                usedColors.push(color);
                console.log(`🎨 Assigned color ${color} to column "${col}"`);
            } else {
                console.log(`✓ Column "${col}" already has color ${this.columnColors[col]}`);
            }
        });

        // console.log('✅ Final column colors:', this.columnColors);
    }

    // Create the legend control panel
    createLegendControlPanel() {
        const legendPanel = this.shadowRoot?.getElementById('legendControlPanel') || 
                          document.getElementById('legendControlPanel');
        const legendItems = this.shadowRoot?.getElementById('legendItems') || 
                          document.getElementById('legendItems');
        
        if (!legendPanel || !legendItems) {
            console.warn('Legend panel elements not found');
            return;
        }
        
        // Get all columns that have data traces
        const allColumns = [...(this.selectedMultiColumns || [])];
        console.log('ALL COLUMNS', allColumns);
        if (allColumns.length === 0) {
            legendItems.innerHTML = '';
            legendPanel.style.display = 'none';
            return;
        }
        
        legendPanel.style.display = 'block';
        this.generateColumnColors(allColumns);
        
        legendItems.innerHTML = '';
        
        allColumns.forEach((column, index) => {
            const color = this.columnColors[column] || '#cccccc';
            console.log(`Creating legend item for ${column} with color ${color}`);
            
            const legendItem = document.createElement('div');
            legendItem.className = `legend-item ${this.hiddenColumns.has(column) ? 'hidden' : ''}`;
            legendItem.dataset.column = column;
            legendItem.title = `Click to toggle visibility, right-click to change color`;
            
            // Use SVG for guaranteed color display
            const colorBox = document.createElement('div');
            colorBox.innerHTML = `
                <svg width="16" height="16" style="margin-right: 8px; vertical-align: middle;">
                    <rect width="16" height="16" fill="${color}" stroke="#999" stroke-width="1" rx="2"/>
                </svg>
            `;
            
            const label = document.createElement('span');
            label.className = 'legend-label';
            label.textContent = column;
            label.style.cssText = `
                margin: 0 8px !important;
                font-size: 14px !important;
                color: #333 !important;
                flex: 1 !important;
            `;
            
            const visibilityIcon = document.createElement('span');
            visibilityIcon.className = 'legend-visibility-icon';
            visibilityIcon.style.cssText = `
                font-size: 16px !important;
                margin-left: auto !important;
                opacity: 0.7 !important;
                cursor: pointer !important;
            `;
            
            // Set up the legend item layout with very specific styles
            legendItem.style.cssText = `
                display: flex !important;
                align-items: center !important;
                padding: 4px 8px !important;
                margin: 2px 0 !important;
                cursor: pointer !important;
                border-radius: 4px !important;
                transition: background-color 0.2s ease !important;
                min-height: 24px !important;
            `;
            
            legendItem.appendChild(colorBox);
            legendItem.appendChild(label);
            legendItem.appendChild(visibilityIcon);
            
            // Hover effect
            legendItem.addEventListener('mouseenter', () => {
                legendItem.style.backgroundColor = 'rgba(0, 0, 0, 0.05)';
            });
            
            legendItem.addEventListener('mouseleave', () => {
                legendItem.style.backgroundColor = 'transparent';
            });
            
            // Click handler for toggling visibility
            legendItem.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleColumnVisibility(column);
            });
            
            // Color change on right-click
            legendItem.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                this.showColorPicker(column, e);
            });
            
            legendItems.appendChild(legendItem);
            
            console.log(`✓ Added legend item for ${column} with SVG color box`);
        });
    }
    
    // Toggle column visibility
    toggleColumnVisibility(column) {
        if (this.hiddenColumns.has(column)) {
            this.hiddenColumns.delete(column);
        } else {
            this.hiddenColumns.add(column);
        }
        
        this.updateChartVisibility();
        this.createLegendControlPanel(); // Refresh legend
    }
    
    // Update chart trace visibility
    updateChartVisibility() {
        if (this.graphCanvas && window.Plotly && this.graphCanvas.data) {
            const visibilityUpdates = {};
            
            this.graphCanvas.data.forEach((trace, index) => {
                if (trace.name) {
                    const isHidden = this.hiddenColumns.has(trace.name);
                    visibilityUpdates[`visible[${index}]`] = !isHidden;
                }
            });
            
            if (Object.keys(visibilityUpdates).length > 0) {
                Plotly.restyle(this.graphCanvas, visibilityUpdates);
            }
        }
    }
    
    // Show color picker
    showColorPicker(column, event) {
        const colorOptions = this.colorPalette.slice(0, 10);
        
        // Remove existing color picker
        const existing = document.getElementById('colorPicker');
        if (existing) existing.remove();
        
        const picker = document.createElement('div');
        picker.id = 'colorPicker';
        picker.style.cssText = `
            position: fixed;
            left: ${event.pageX}px;
            top: ${event.pageY}px;
            background: white;
            border: 1px solid #ccc;
            border-radius: 4px;
            padding: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
            z-index: 1000;
            display: flex;
            gap: 4px;
        `;
        
        colorOptions.forEach(color => {
            const colorSwatch = document.createElement('div');
            colorSwatch.className = 'color-swatch';
            colorSwatch.style.backgroundColor = color;
            colorSwatch.title = `Change to ${color}`;
            
            colorSwatch.addEventListener('click', () => {
                this.changeColumnColor(column, color);
                picker.remove();
            });
            
            picker.appendChild(colorSwatch);
        });
        
        document.body.appendChild(picker);
        
        // Close picker when clicking outside
        setTimeout(() => {
            const closeHandler = (e) => {
                if (!picker.contains(e.target)) {
                    picker.remove();
                    document.removeEventListener('click', closeHandler);
                }
            };
            document.addEventListener('click', closeHandler);
        }, 100);
    }
    
    // Change column color
    changeColumnColor(column, newColor) {
        this.columnColors[column] = newColor;
        
        // Update chart colors using Plotly.restyle
        if (this.graphCanvas && window.Plotly && this.graphCanvas.data) {
            const colorUpdates = {};
            
            this.graphCanvas.data.forEach((trace, index) => {
                if (trace.name === column) {
                    // Handle different chart types
                    if (trace.type === 'scatter' || trace.type === 'line') {
                        colorUpdates[`marker.color[${index}]`] = newColor;
                        if (trace.mode && trace.mode.includes('lines')) {
                            colorUpdates[`line.color[${index}]`] = newColor;
                        }
                    } else if (trace.type === 'bar') {
                        colorUpdates[`marker.color[${index}]`] = newColor;
                    }
                    // Add more chart types as needed
                }
            });
            
            if (Object.keys(colorUpdates).length > 0) {
                Plotly.restyle(this.graphCanvas, colorUpdates);
            }
        }
        
        this.createLegendControlPanel(); // Refresh legend
    }
    
    // Toggle all legend items
    toggleAllLegendItems() {
        const allColumns = [...(this.selectedMultiColumns || [])];
        
        if (this.hiddenColumns.size === 0) {
            // Hide all
            allColumns.forEach(col => this.hiddenColumns.add(col));
        } else {
            // Show all
            this.hiddenColumns.clear();
        }
        
        this.updateChartVisibility();
        this.createLegendControlPanel();
    }

    updateAxisSelections(chartType) {
        // console.log("Reached HERE !!!!!!!!!!!")
        const singleAxisCharts = ["histogram","rug", "indicator"];
        const twoDAxisCharts = [
            "scatter", "line", "bar", "area", "box", "violin", "bubble","pie", "donut", 
            "heatmap", "contour", "2d-histogram", "radar", "polar", "wind-rose",
            "funnel", "waterfall", "time-series", "error-bars", "bar-error", 
            "histogram-kde"
        ];
        const threeDAxisCharts = ["3d-scatter", "3d-line", "3d-surface", "3d-mesh"];
        
        if (singleAxisCharts.includes(chartType)) {
            this.disableAxisSelector("y");
            this.disableAxisSelector("z");
        } else if (twoDAxisCharts.includes(chartType)) {
            this.enableAxisSelector("y");
            this.disableAxisSelector("z");
        } else if (threeDAxisCharts.includes(chartType)) {
            this.enableAxisSelector("x");
            this.enableAxisSelector("y");
            this.enableAxisSelector("z");
        } else {
            this.enableAxisSelector("x");
            this.enableAxisSelector("y");
            this.disableAxisSelector("z");
        }
    }

    disableAxisSelector(axis) {
        let container;
        if (axis === "x") {
            container = document.querySelector("#singleSelectDropdown") || 
                      this.shadowRoot?.querySelector("#singleSelectDropdown");
        } else if (axis === "y") {
            container = this.shadowRoot?.querySelector("#customMultiSelectContainer");
        } else if (axis === "z") {
            container = this.shadowRoot?.querySelector("#customThirdMultiSelectContainer");
        }

        if (container) {
            const controlGroup = container.closest(".control-group") || container; 
            controlGroup.style.display = "none";
            controlGroup.classList.add("hidden-axis");
        } else {
            console.warn(`${axis}-axis container not found`);
        }
    }

    enableAxisSelector(axis) {
        let container;
        if (axis === "x") {
            container = document.querySelector("#singleSelectDropdown") || 
                      this.shadowRoot?.querySelector("#singleSelectDropdown");
        } else if (axis === "y") {
            container = this.shadowRoot?.querySelector("#customMultiSelectContainer");
        } else if (axis === "z") {
            container = this.shadowRoot?.querySelector("#customThirdMultiSelectContainer");
        }

        if (container) {
            const controlGroup = container.closest(".control-group") || container;
            controlGroup.style.display = "";
            controlGroup.classList.remove("hidden-axis");
        }
    }

    updateChart() {
        if (!this.rowData || this.rowData.length === 0) {
            this.graphCanvas.innerHTML = "<p>No data available to display.</p>";
            return;
        }
        this.graphCanvas.innerHTML = '';
        const chartType = this.chartType;
        
        this.updateAxisSelections(chartType);
        const xCol = this.singleSelectDropdown.value;
        const yCols = this.selectedMultiColumns || [];
        const zCols = this.selectedThirdMultiColumns || [];

        const data = [];
        const xValues = xCol ? this.rowData.map(row => row[xCol]) : [];
        const layout = this.getChartLayout();
        this.initializeColors();
        
        // FIXED: Generate colors only for columns that will actually be used as traces
        let columnsForTraces = [];
        
        // Determine which columns will actually be used for traces based on chart type
        if (["scatter", "line", "bar", "area", "box", "violin", "time-series"].includes(chartType)) {
            columnsForTraces = [...yCols];
        } else if (chartType === "histogram" || chartType === "rug") {
            columnsForTraces = [xCol];
        } else if (chartType === "pie" || chartType === "donut") {
            columnsForTraces = [...yCols];
        } else if (chartType === "bubble") {
            columnsForTraces = [...yCols];
        } else if (["3d-scatter", "3d-line", "3d-surface", "3d-mesh"].includes(chartType)) {
            // For 3D charts, only Y columns get traces (Z is used as the Z-axis data)
            columnsForTraces = [...yCols];
        } else if (chartType === "heatmap" || chartType === "contour" || chartType === "2d-histogram") {
            columnsForTraces = [...yCols];
        } else if (chartType === "parallel-coordinates" || chartType === "parallel-categories") {
            columnsForTraces = [...yCols, ...zCols];
        } else {
            // Default case
            columnsForTraces = [...yCols];
        }
        
        // Generate colors for the correct columns
        console.log('🎨 Generating colors for trace columns:', columnsForTraces);
        this.generateColumnColors(columnsForTraces);
        console.log('🎨 Final column colors after generation:', this.columnColors);

        // Helper for error display
        const showError = (msg) => {
            this.graphCanvas.innerHTML = `<p style="color:red">${msg}</p>`;
        };

        // Simplified applyTraceProperties function
        const applyTraceProperties = (trace, columnName) => {
            console.log(`🔍 Applying properties to trace for column: ${columnName}`);
            
            if (this.columnColors[columnName]) {
                const color = this.columnColors[columnName];
                console.log(`🎨 Found color ${color} for column ${columnName}`);
                
                // Apply color based on trace type
                if (trace.type === 'scatter3d') {
                    if (!trace.marker) trace.marker = {};
                    trace.marker.color = color;
                    
                    // For lines in 3D
                    if (trace.mode && trace.mode.includes('lines')) {
                        if (!trace.line) trace.line = {};
                        trace.line.color = color;
                    }
                } else if (trace.type === 'surface') {
                    trace.colorscale = [[0, color], [1, color]];
                    trace.showscale = false;
                } else if (trace.type === 'mesh3d') {
                    trace.color = color;
                } else {
                    // 2D charts
                    if (!trace.marker) trace.marker = {};
                    trace.marker.color = color;
                    
                    if (trace.mode && trace.mode.includes('lines')) {
                        if (!trace.line) trace.line = {};
                        trace.line.color = color;
                    }
                }
                
                console.log(`✅ Applied color to ${columnName}:`, {
                    type: trace.type,
                    markerColor: trace.marker?.color,
                    lineColor: trace.line?.color
                });
            } else {
                console.error(`❌ No color found for column: ${columnName}`);
                console.log(`Available colors:`, Object.keys(this.columnColors));
            }
            
            // Set visibility
            if (this.hiddenColumns.has(columnName)) {
                trace.visible = false;
            }
            
            return trace;
        };

        // 1. Basic 2D Charts
        if (["scatter", "line", "bar", "area", "box", "violin"].includes(chartType)) {
            if (!xCol || yCols.length === 0) {
                this.graphCanvas.innerHTML = `<p style="color:red">Select X and at least one Y column.</p>`;
                return;
            }
            
            yCols.forEach((yCol, index) => {
                let trace = {
                    x: xValues,
                    y: this.rowData.map(row => row[yCol]),
                    type: chartType === "area" ? "scatter" : chartType,
                    mode: chartType === "scatter" ? "markers" : (chartType === "line" || chartType === "area" ? "lines+markers" : undefined),
                    fill: chartType === "area" ? "tozeroy" : undefined,
                    name: yCol
                };
                
                console.log(`Creating trace for ${yCol}, type: ${trace.type}`);
                
                // Apply colors and visibility
                trace = applyTraceProperties(trace, yCol);
                data.push(trace);
            });
        }
        // 2. Histogram
        else if (chartType === "histogram") {
            if (!xCol) return showError("Select a column for histogram.");
            let trace = {
                x: xValues,
                type: "histogram",
                name: xCol
            };
            
            trace = applyTraceProperties(trace, xCol);
            data.push(trace);
        }
        // 3. Pie/Donut
        else if (chartType === "pie" || chartType === "donut") {
            if (!xCol || yCols.length === 0) return showError("Select label (X) and value (Y) columns.");
            let trace = {
                labels: xValues,
                values: this.rowData.map(row => row[yCols[0]]),
                type: "pie",
                hole: chartType === "donut" ? 0.3 : 0,
                textinfo: "label+percent",
                textposition: "outside",
                automargin: true,
                name: yCols[0]
            };
            
            trace = applyTraceProperties(trace, yCols[0]);
            data.push(trace);
        }
        // 4. Bubble Chart
        else if (chartType === "bubble") {
            if (!xCol || yCols.length < 2) return showError("Select X, Y, and a size column (Y2) for bubble chart.");
            let trace = {
                x: xValues,
                y: this.rowData.map(row => row[yCols[0]]),
                mode: "markers",
                marker: {
                    size: this.rowData.map(row => row[yCols[1]]),
                    sizemode: "area",
                    sizeref: 2.0 * Math.max(...this.rowData.map(row => row[yCols[1]])) / (40 ** 2),
                    sizemin: 4
                },
                type: "scatter",
                name: yCols[0]
            };
            
            trace = applyTraceProperties(trace, yCols[0]);
            data.push(trace);
        }
        // 5. 3D Charts - FIXED VERSION
        else if (["3d-scatter", "3d-line", "3d-surface", "3d-mesh"].includes(chartType)) {
            if (!xCol || yCols.length === 0 || zCols.length === 0) return showError("Select X, Y, and Z columns for 3D chart.");
            const x = this.rowData.map(row => row[xCol]);
            const z = this.rowData.map(row => row[zCols[0]]);
            
            if (chartType === "3d-scatter" || chartType === "3d-line") {
                // Create separate traces for each Y column
                yCols.forEach((yCol, index) => {
                    const yData = this.rowData.map(row => row[yCol]);
                    
                    let trace = {
                        x: x,
                        y: yData,
                        z: z,
                        type: "scatter3d",
                        mode: chartType === "3d-line" ? "lines+markers" : "markers",
                        marker: { size: 4 },
                        name: yCol
                    };
                    
                    console.log(`🔵 Creating 3D trace for ${yCol}`);
                    trace = applyTraceProperties(trace, yCol);
                    data.push(trace);
                });
            } else if (chartType === "3d-surface") {
                // For surface, z should be a 2D array. Here we just reshape if possible.
                let zMatrix = [];
                const sqrtLength = Math.sqrt(z.length);
                for (let i = 0; i < x.length; i += sqrtLength) {
                    zMatrix.push(z.slice(i, i + sqrtLength));
                }
                
                yCols.forEach((yCol, index) => {
                    const yData = this.rowData.map(row => row[yCol]);
                    let trace = {
                        x: x,
                        y: yData,
                        z: zMatrix,
                        type: "surface",
                        name: yCol
                    };
                    
                    trace = applyTraceProperties(trace, yCol);
                    data.push(trace);
                });
            } else if (chartType === "3d-mesh") {
                yCols.forEach((yCol, index) => {
                    const yData = this.rowData.map(row => row[yCol]);
                    let trace = {
                        x: x,
                        y: yData,
                        z: z,
                        type: "mesh3d",
                        name: yCol
                    };
                    
                    trace = applyTraceProperties(trace, yCol);
                    data.push(trace);
                });
            }
        }
        // 6. Heatmap/Contour/2D Histogram
        else if (chartType === "heatmap" || chartType === "contour" || chartType === "2d-histogram") {
            if (!xCol || yCols.length === 0) return showError("Select X and Y columns.");
            const x = this.rowData.map(row => row[xCol]);
            const y = this.rowData.map(row => row[yCols[0]]);
            // Z is optional for contour
            let z = [];
            if (zCols.length > 0) z = this.rowData.map(row => row[zCols[0]]);
            
            let trace;
            if (chartType === "heatmap") {
                trace = { 
                    x, y, 
                    z: [z.length ? z : y], 
                    type: "heatmap",
                    name: yCols[0]
                };
            } else if (chartType === "contour") {
                trace = { 
                    x, y, 
                    z: [z.length ? z : y], 
                    type: "contour",
                    name: yCols[0]
                };
            } else if (chartType === "2d-histogram") {
                trace = { 
                    x, y, 
                    type: "histogram2d",
                    name: yCols[0]
                };
            }
            
            if (trace) {
                trace = applyTraceProperties(trace, yCols[0]);
                data.push(trace);
            }
        }
        // 7. Parallel Coordinates
        else if (chartType === "parallel-coordinates") {
            const allCols = [...yCols, ...zCols];
            if (allCols.length < 2) return showError("Select at least two columns for parallel coordinates.");
            let trace = {
                type: "parcoords",
                dimensions: allCols.map(col => ({
                    label: col,
                    values: this.rowData.map(row => row[col])
                })),
                name: "Parallel Coordinates"
            };
            
            // For parallel coordinates, we'll use the first column for coloring
            trace = applyTraceProperties(trace, allCols[0]);
            data.push(trace);
        }
        // 8. Table
        else if (chartType === "table") {
            const cols = [xCol, ...yCols, ...zCols].filter(Boolean);
            if (cols.length === 0) return showError("Select at least one column for table.");
            let trace = {
                type: "table",
                header: { values: cols },
                cells: {
                    values: cols.map(col => this.rowData.map(row => row[col]))
                },
                name: "Data Table"
            };
            
            data.push(trace); // Tables don't need color application
        }
        // 9. Indicator
        else if (chartType === "indicator") {
            if (yCols.length === 0) return showError("Select a Y column for indicator.");
            const val = this.rowData.reduce((sum, row) => sum + (parseFloat(row[yCols[0]]) || 0), 0);
            let trace = {
                type: "indicator",
                mode: "number+delta",
                value: val,
                title: { text: yCols[0] },
                name: yCols[0]
            };
            
            trace = applyTraceProperties(trace, yCols[0]);
            data.push(trace);
        }
        // 10. Radar/Polar charts
        else if (chartType === "radar" || chartType === "polar" || chartType === "wind-rose") {
            // Needs theta and r
            if (!xCol || yCols.length === 0) return showError("Select theta (X) and r (Y) columns.");
            let trace = {
                type: "scatterpolar",
                r: this.rowData.map(row => row[yCols[0]]),
                theta: xValues,
                fill: "toself",
                name: yCols[0]
            };
            
            trace = applyTraceProperties(trace, yCols[0]);
            data.push(trace);
            layout.polar = { radialaxis: { visible: true } };
        }
        else if (chartType === "funnel") {
            if (!xCol || yCols.length === 0) return showError("Select X and Y columns for funnel.");
            let trace = {
                type: "funnel",
                y: xValues,
                x: this.rowData.map(row => row[yCols[0]]),
                name: yCols[0]
            };
            
            trace = applyTraceProperties(trace, yCols[0]);
            data.push(trace);
        }
        else if (chartType === "waterfall") {
            if (!xCol || yCols.length === 0) return showError("Select X and Y columns for waterfall.");
            let trace = {
                type: "waterfall",
                x: xValues,
                y: this.rowData.map(row => row[yCols[0]]),
                name: yCols[0]
            };
            
            trace = applyTraceProperties(trace, yCols[0]);
            data.push(trace);
        }
        else if (chartType === "rug") {
            if (!xCol) return showError("Select a column for rug plot.");
            let trace = {
                type: "rug",
                x: xValues,
                name: xCol
            };
            
            trace = applyTraceProperties(trace, xCol);
            data.push(trace);
        }
        else if (chartType === "histogram-kde") {
            if (!xCol) return showError("Select a column for histogram with KDE.");
            
            // Histogram trace
            let histTrace = {
                type: "histogram",
                x: xValues,
                histnorm: "probability density",
                name: `${xCol} Histogram`
            };
            histTrace = applyTraceProperties(histTrace, xCol);
            data.push(histTrace);
            
            // KDE trace (simplified)
            let kdeTrace = {
                type: "scatter",
                x: xValues,
                y: this.rowData.map(row => row[xCol]), // Not a true KDE, but placeholder
                mode: "lines",
                name: `${xCol} KDE`
            };
            kdeTrace = applyTraceProperties(kdeTrace, `${xCol}_KDE`);
            data.push(kdeTrace);
        }
        else if (chartType === "error-bars" || chartType === "bar-error") {
            if (!xCol || yCols.length < 2) return showError("Select X, Y, and error columns.");
            let trace = {
                type: chartType === "bar-error" ? "bar" : "scatter",
                x: xValues,
                y: this.rowData.map(row => row[yCols[0]]),
                error_y: {
                    type: "data",
                    array: this.rowData.map(row => row[yCols[1]]),
                    visible: true
                },
                name: yCols[0]
            };
            
            trace = applyTraceProperties(trace, yCols[0]);
            data.push(trace);
        }
        else if (chartType === "time-series") {
            if (!xCol || yCols.length === 0) return showError("Select X (time) and Y columns.");
            yCols.forEach(yCol => {
                let trace = {
                    x: xValues,
                    y: this.rowData.map(row => row[yCol]),
                    type: "scatter",
                    mode: "lines+markers",
                    name: yCol
                };
                
                trace = applyTraceProperties(trace, yCol);
                data.push(trace);
            });
        }
        else if (chartType === "parallel-categories") {
            const allCols = [xCol, ...yCols, ...zCols].filter(Boolean);
            if (allCols.length < 2) return showError("Select at least two columns for parallel categories.");
            let trace = {
                type: "parcats",
                dimensions: allCols.map(col => ({
                    label: col,
                    values: this.rowData.map(row => row[col])
                })),
                name: "Parallel Categories"
            };
            
            // For parallel categories, use first column for coloring
            trace = applyTraceProperties(trace, allCols[0]);
            data.push(trace);
        }
        else {
            return showError("Chart type not implemented or not supported.");
        }

        console.log('=== ALL TRACES BEFORE PLOTTING ===');
        data.forEach((trace, index) => {
            console.log(`Trace ${index}:`, {
                name: trace.name,
                type: trace.type,
                markerColor: trace.marker?.color,
                lineColor: trace.line?.color,
                visible: trace.visible !== false
            });
        });

        // Plotly config - DISABLE BUILT-IN LEGEND
        const config = {
            responsive: true,
            displayModeBar: true,
            modeBarButtonsToRemove: ['select2d', 'lasso2d', 'autoScale2d', 'hoverClosestCartesian', 'hoverCompareCartesian'],
            displaylogo: false,
            modeBarButtons: [
                ['toImage'],
                ['zoom2d', 'pan2d'],
                ['zoomIn2d', 'zoomOut2d'],
                ['resetScale2d']
            ],
            toImageButtonOptions: {
                format: 'png',
                filename: 'chart',
                height: 800,
                width: 1200,
                scale: 2
            }
        };

        Plotly.newPlot(this.graphCanvas, data, layout, config).then(() => {
            console.log("Data:", data);
            console.log('Chart plotted successfully');
            setTimeout(() => {
                this.relocateToolbar();
                this.createLegendControlPanel(); // Create legend after chart is rendered
                // this.forceResize(); // Force resize after chart creation
                window.addEventListener('resize', () => this.handleResize());
                console.log("Chart fully loaded and resized!");
            }, 500);
        }).catch((error) => {
            console.error('Error creating chart:', error);
            this.graphCanvas.innerHTML = '<p style="color:red">Error creating chart. Check console for details.</p>';
        });
    }

    initializeDropdownListeners() {
        // X-axis single select listener
        const singleSelectDropdown = this.shadowRoot.getElementById('singleSelectDropdown');
        if (singleSelectDropdown) {
            singleSelectDropdown.addEventListener('change', () => {
                this.updateChart(); // This will auto-update titles
            });
        }
    }

    relocateToolbar() {
        const originalToolbar = this.graphCanvas.querySelector('.modebar');
        const customToolbarContainer = this.shadowRoot.getElementById('customToolbar');
        
        if (originalToolbar && customToolbarContainer) {
            // Clone the toolbar
            const clonedToolbar = originalToolbar.cloneNode(true);
            
            // Clear the custom container and add the cloned toolbar
            customToolbarContainer.innerHTML = '';
            customToolbarContainer.appendChild(clonedToolbar);
            
            // Hide the original toolbar
            originalToolbar.style.display = 'none';
            
            // Make the cloned toolbar visible and functional
            clonedToolbar.style.display = 'flex';
            clonedToolbar.style.position = 'static';
            clonedToolbar.style.background = 'transparent';
            clonedToolbar.style.border = 'none';
            
            // Re-attach event listeners to the cloned buttons
            this.attachToolbarEvents(clonedToolbar);
        }
    }
    
    // Method to attach events to the relocated toolbar buttons
    attachToolbarEvents(toolbar) {
        const buttons = toolbar.querySelectorAll('.modebar-btn');
        buttons.forEach(button => {
            const newButton = button.cloneNode(true);
            button.parentNode.replaceChild(newButton, button);
            
            // Get the original button's data attributes
            const originalButton = this.graphCanvas.querySelector(`[data-title="${newButton.getAttribute('data-title')}"]`);
            if (originalButton) {
                newButton.addEventListener('click', (e) => {
                    e.preventDefault();
                    originalButton.click();
                });
            }
        });
    }

    getChartLayout() {
        // Read selected font sizes from the UI
        const xAxisFontSize = parseInt(this.shadowRoot.getElementById("xAxisFontSize").value, 10);
        const yAxisFontSize = parseInt(this.shadowRoot.getElementById("yAxisFontSize").value, 10);
        const zAxisFontSize = parseInt(this.shadowRoot.getElementById("zAxisFontSize").value, 10);
        
        const layout = {
            font: {
                family: "Arial, sans-serif",
                size: 22,   // <-- Title font size
                color: "#333"
            },
            plot_bgcolor: 'white',
            paper_bgcolor: 'white',
            autosize: true
        };

        // Check if this is a 3D chart
        const is3DChart = ["3d-scatter", "3d-line", "3d-surface", "3d-mesh"].includes(this.chartType);

        // Chart type specific margins and axis configuration
        if (this.chartType === 'pie' || this.chartType === 'donut') {
            layout.margin = { t: 40, l: 80, r: 80, b: 0 };
        } else if (is3DChart) {
            // 3D charts use scene configuration
            layout.margin = { t: 60, l: 60, r: 60, b: 60 };
            layout.scene = {
                xaxis: {
                    showgrid: true,
                    gridcolor: '#e6e6e6',
                    tickfont: {
                        size: xAxisFontSize,
                        color: "#333"
                    },
                    showline: true,
                    linecolor: '#333',
                    linewidth: 1,
                    showticklabels: true
                },
                yaxis: {
                    showgrid: true,
                    gridcolor: '#e6e6e6',
                    tickfont: {
                        size: yAxisFontSize,
                        color: "#333"
                    },
                    showline: true,
                    linecolor: '#333',
                    linewidth: 1,
                    showticklabels: true
                },
                zaxis: {
                    showgrid: true,
                    gridcolor: '#e6e6e6',
                    tickfont: {
                        size: zAxisFontSize,
                        color: "#333"
                    },
                    showline: true,
                    linecolor: '#333',
                    linewidth: 1,
                    showticklabels: true
                }
            };
        } else {
            // 2D charts use regular axis configuration
            layout.margin = { t: 60, l: 80, r: 60, b: 0 };

            layout.xaxis = {
                showgrid: true,
                gridcolor: '#e6e6e6',
                tickfont: {
                    size: xAxisFontSize,
                    color: "#333"
                },
                showline: true,
                linecolor: '#333',
                linewidth: 1,
                showticklabels: true,
                tickangle: -45,
                automargin: true
            };

            layout.yaxis = {
                showgrid: true,
                gridcolor: '#e6e6e6',
                tickfont: {
                    size: yAxisFontSize,
                    color: "#333"
                },
                showline: true,
                linecolor: '#333',
                linewidth: 1,
                showticklabels: true,
                automargin: true
            };
        }

        return layout;
    }

    setAxisTitles(xTitle, yTitle) {
        this.xAxisTitle = xTitle || "Labels";
        this.yAxisTitle = yTitle || "Values";
        
        // Update the HTML elements
        this.xAxisTitleElement.textContent = this.xAxisTitle;
        this.yAxisTitleElement.textContent = this.yAxisTitle;
        
        if (this.graphCanvas.children.length > 0) {
            this.updateChart();
        }
    }

    populateDropdowns() {
        if (!this.rowData || this.rowData.length === 0) {
            console.log("No rowData available to populate dropdowns.");
            return;
        }

        // Get column names from the first row of rowData
        const keys = Object.keys(this.rowData[0]);

        // Populate singleSelectDropdown
        this.singleSelectDropdown.innerHTML = keys
            .map(key => `<option value="${key}">${key}</option>`)
            .join("");

        // console.log("Dropdowns populated with column keys:", keys);
        
        // Add event listeners to update the chart when dropdowns change
        this.singleSelectDropdown.addEventListener("change", () => this.updateChart());
        
        this.selectedMultiColumns = this.selectedMultiColumns || [];
        this.selectedThirdMultiColumns = this.selectedThirdMultiColumns || [];
        this.renderCustomMultiSelect(keys);
        this.renderCustomThirdMultiSelect(keys);
        
        // Debug: Check if containers exist after creation
        // console.log("After creating containers:");
        // console.log("Y container exists:", !!document.querySelector("#customMultiSelectContainer"));
        // console.log("Z container exists:", !!document.querySelector("#customThirdMultiSelectContainer"));
    }

    renderCustomMultiSelect(options) {
        // options: array of column names
        const container = this.shadowRoot.getElementById('customMultiSelectContainer');
        container.innerHTML = '';

        // Show selected tags
        this.selectedMultiColumns = this.selectedMultiColumns || [];
        const tagsDiv = document.createElement('div');
        tagsDiv.style.display = 'flex';
        tagsDiv.style.flexWrap = 'wrap';
        tagsDiv.style.gap = '6px';

        this.selectedMultiColumns.forEach(col => {
            const tag = document.createElement('span');
            tag.textContent = col;
            tag.style.background = '#007cba';
            tag.style.color = 'white';
            tag.style.padding = '2px 8px';
            tag.style.borderRadius = '12px';
            tag.style.display = 'flex';
            tag.style.alignItems = 'center';
            tag.style.gap = '4px';
            tag.style.fontSize = '13px';
            tag.style.margin = '2px 4px 2px 0';

            const removeBtn = document.createElement('span');
            removeBtn.textContent = '×';
            removeBtn.style.cursor = 'pointer';
            removeBtn.onclick = () => {
                this.selectedMultiColumns = this.selectedMultiColumns.filter(c => c !== col);
                this.renderCustomMultiSelect(options);
                this.updateChart();
                this.createLegendControlPanel();
                // Force resize after Y column change
                this.forceResize();
            };
            tag.appendChild(removeBtn);
            tagsDiv.appendChild(tag);
        });
        container.appendChild(tagsDiv);

        // Show dropdown for unselected options
        const dropdown = document.createElement('select');
        dropdown.innerHTML = `<option value="">+ Add column...</option>` +
            options.filter(opt => !this.selectedMultiColumns.includes(opt))
                .map(opt => `<option value="${opt}">${opt}</option>`).join('');
        dropdown.onchange = () => {
            if (dropdown.value && !this.selectedMultiColumns.includes(dropdown.value)) {
                this.selectedMultiColumns.push(dropdown.value);
                this.renderCustomMultiSelect(options);
                this.updateChart();
                this.createLegendControlPanel();
                // Force resize after Y column addition
                this.forceResize();
            }
        };
        container.appendChild(dropdown);
    }

    renderCustomThirdMultiSelect(options) {
        const container = this.shadowRoot.getElementById('customThirdMultiSelectContainer');
        container.innerHTML = '';

        this.selectedThirdMultiColumns = this.selectedThirdMultiColumns || [];
        const tagsDiv = document.createElement('div');
        tagsDiv.style.display = 'flex';
        tagsDiv.style.flexWrap = 'wrap';
        tagsDiv.style.gap = '6px';

        this.selectedThirdMultiColumns.forEach(col => {
            const tag = document.createElement('span');
            tag.textContent = col;
            tag.style.background = '#28a745';
            tag.style.color = 'white';
            tag.style.padding = '2px 8px';
            tag.style.borderRadius = '12px';
            tag.style.display = 'flex';
            tag.style.alignItems = 'center';
            tag.style.gap = '4px';
            tag.style.fontSize = '13px';

            const removeBtn = document.createElement('span');
            removeBtn.textContent = '×';
            removeBtn.style.cursor = 'pointer';
            removeBtn.onclick = () => {
                this.selectedThirdMultiColumns = this.selectedThirdMultiColumns.filter(c => c !== col);
                this.renderCustomThirdMultiSelect(options);
                this.updateChart();
                this.createLegendControlPanel();
                // Force resize after Z column change
                this.forceResize();
            };
            tag.appendChild(removeBtn);
            tagsDiv.appendChild(tag);
        });
        container.appendChild(tagsDiv);

        const dropdown = document.createElement('select');
        dropdown.innerHTML = `<option value="">+ Add column...</option>` +
            options.filter(opt => !this.selectedThirdMultiColumns.includes(opt))
                .map(opt => `<option value="${opt}">${opt}</option>`).join('');
        dropdown.onchange = () => {
            if (dropdown.value && !this.selectedThirdMultiColumns.includes(dropdown.value)) {
                this.selectedThirdMultiColumns.push(dropdown.value);
                this.renderCustomThirdMultiSelect(options);
                this.updateChart();
                this.createLegendControlPanel();
                // Force resize after Z column addition
                this.forceResize();
            }
        };
        container.appendChild(dropdown);
    }

    saveChart() {
        try {
            // Generate chart name
            const chartName = this.generateChartName();
            
            // Prompt for description
            const description = prompt(`Please enter a description for the chart template:\n\nChart Name: ${chartName}`, "");
            
            // Check if user cancelled or entered empty description
            if (description === null) {
                // User cancelled
                return;
            }
            
            if (description.trim() === "") {
                alert("Description is required. Please enter a description to save the chart.");
                return;
            }
            
            // Proceed with saving
            this.proceedWithSave(chartName, description.trim());
            
        } catch (error) {
            console.error('Error saving chart:', error);
            alert('Error saving chart. Please try again.');
        }
    }

    proceedWithSave(chartName, description) {
        try {
            // Get the current chart data from Plotly
            const chartData = this.graphCanvas.data || [];
            const chartLayout = this.graphCanvas.layout || {};
            
            // Get the axis labels from the input fields
            const xAxisLabel = this.shadowRoot.getElementById("xAxisInput").value || "";
            const yAxisLabel = this.shadowRoot.getElementById("yAxisInput").value || "";
            
            // Get the graph title (assuming it's stored in the layout or you have it available)
            const graphTitle = chartLayout.title?.text || "";
            
            // Prepare the chart template data
            const chartTemplate = {
                graphTitle: graphTitle,
                xAxisLabel: xAxisLabel,
                yAxisLabel: yAxisLabel,
                xAxis: this.singleSelectDropdown.value || null,
                yAxis: this.selectedMultiColumns || [],
                zAxis: this.selectedThirdMultiColumns || [],
                chartType: this.chartType,
                colors: this.columnColors || {},
                hiddenColumns: Array.from(this.hiddenColumns || []),
                plotlyLayout: chartLayout
            };
            
            // Prepare the payload for backend
            const payload = {
                chartName: chartName,
                chartTemplate: JSON.stringify(chartTemplate),
                description: description
            };
            
            console.log('Saving chart with payload:', payload);
            
            // Send to Python backend
            this.sendChartToBackend(payload);
            
        } catch (error) {
            console.error('Error preparing chart data:', error);
            alert('Error preparing chart data. Please try again.');
        }
    }

    generateChartName() {
        // Get the selected value from docTypeSelect dropdown
        const docTypeSelect = this.shadowRoot.getElementById("docTypeSelect");
        const item = docTypeSelect?.value || 'Chart';
        
        const type = this.chartType || 'unknown';
        const xAxis = this.singleSelectDropdown?.value || 'X';
        
        let yAxisPart = '';
        if (this.selectedMultiColumns && this.selectedMultiColumns.length > 0) {
            yAxisPart = this.selectedMultiColumns.join('-');
        }
        
        let zAxisPart = '';
        if (this.selectedThirdMultiColumns && this.selectedThirdMultiColumns.length > 0) {
            zAxisPart = '_' + this.selectedThirdMultiColumns.join('-');
        }
        
        // Construct chart name
        let chartName = `${item}_${type}_${xAxis}`;
        if (yAxisPart) {
            chartName += `_${yAxisPart}`;
        }
        if (zAxisPart) {
            chartName += zAxisPart;
        }
        
        return chartName;
    }

    validateChartData() {
        if (!this.chartType) {
            alert('Please select a chart type');
            return false;
        }
        
        if (!this.selectedMultiColumns || this.selectedMultiColumns.length === 0) {
            alert('Please select at least one Y-axis column');
            return false;
        }
        
        if (!this.singleSelectDropdown?.value) {
            alert('Please select an X-axis column');
            return false;
        }
        
        return true;
    }

    async sendChartToBackend(payload) {
        try {
            const response = await fetch('http://localhost:5000/api/save-chart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const result = await response.json();
            console.log('Chart saved successfully:', result);
            
            // Show success message
            alert('Chart saved successfully!');
            
            // Dispatch success event
            this.dispatchEvent(new CustomEvent('chartSaved', {
                detail: {
                    success: true,
                    chartName: payload.chartName,
                    response: result
                }
            }));
            
            // Close modal after successful save
            this.closeModal();
            
        } catch (error) {
            console.error('Error sending chart to backend:', error);
            alert(`Error saving chart to backend: ${error.message}`);
            
            // Dispatch error event
            this.dispatchEvent(new CustomEvent('chartSaveError', {
                detail: {
                    success: false,
                    error: error.message
                }
            }));
        }
    }

    applyChartTemplate(template) {
        try {
            console.log('GraphsControl: Applying chart template:', template);

            // 1. Set the row data
            if (template.rowData && Array.isArray(template.rowData)) {
                this.rowData = template.rowData;
                console.log('GraphsControl: Set rowData:', template.rowData.length, 'rows');
            }

            // 2. Set chart type
            if (template.chartType) {
                this.chartType = template.chartType;
                console.log('GraphsControl: Set chartType:', template.chartType);

                // ✅ Fix: target the real element by its id
                const chartTypeSelect = this.shadowRoot.getElementById('chartType');
                if (chartTypeSelect) {
                    chartTypeSelect.value = template.chartType;
                    chartTypeSelect.dispatchEvent(new Event('change'));
                } else {
                    console.warn("GraphsControl: chartType <select> not found in shadowRoot");
                }

                if (this.updateAxisSelections) {
                    this.updateAxisSelections(template.chartType);
                }
            }

            // 3. Set graph title
            if (template.graphTitle) {
                const graphTitleInput = this.shadowRoot.getElementById("graphTitleInput");
                if (graphTitleInput) {
                    graphTitleInput.value = template.graphTitle;
                    console.log('GraphsControl: Set graphTitle:', template.graphTitle);
                }
                const titleDisplay = this.shadowRoot.getElementById("graphTitleDisplay");
                if (titleDisplay) {
                    titleDisplay.textContent = template.graphTitle;
                    console.log("GraphsControl: Set graphTitle (display):", template.graphTitle);
                }
            }

            // 4. Set axis labels/titles
            if (template.xAxisLabel) {
                const xAxisInput = this.shadowRoot.getElementById("xAxisInput");
                if (xAxisInput) {
                    xAxisInput.value = template.xAxisLabel;
                    console.log('GraphsControl: Set xAxisLabel:', template.xAxisLabel);
                }
            }

            if (template.yAxisLabel) {
                const yAxisInput = this.shadowRoot.getElementById("yAxisInput");
                if (yAxisInput) {
                    yAxisInput.value = template.yAxisLabel;
                    console.log('GraphsControl: Set yAxisLabel:', template.yAxisLabel);
                }
            }

            if (this.updateAxisTitlesFromInputs) {
                this.updateAxisTitlesFromInputs();
            }

            // 5. Store axis selections to be applied AFTER doc type change
            const pendingAxisSelections = {};
            
            if (template.xAxis) {
                pendingAxisSelections.xAxis = template.xAxis;
                console.log('GraphsControl: Stored pending xAxis selection:', template.xAxis);
            }

            if (template.yAxis && Array.isArray(template.yAxis)) {
                pendingAxisSelections.yAxis = [...template.yAxis];
                console.log('GraphsControl: Stored pending yAxis selections:', template.yAxis);
            }

            if (template.zAxis && Array.isArray(template.zAxis)) {
                pendingAxisSelections.zAxis = [...template.zAxis];
                console.log('GraphsControl: Stored pending zAxis selections:', template.zAxis);
            }

            // 6. Function to apply axis selections after doc type change
            const applyAxisSelections = () => {
                console.log('GraphsControl: Applying stored axis selections...');
                
                // Apply y-axis and z-axis selections BEFORE populating dropdowns (they use internal state)
                if (pendingAxisSelections.yAxis) {
                    this.selectedMultiColumns = [...pendingAxisSelections.yAxis];
                    console.log('GraphsControl: Set yAxis selections (before populate):', pendingAxisSelections.yAxis);
                }

                if (pendingAxisSelections.zAxis) {
                    this.selectedThirdMultiColumns = [...pendingAxisSelections.zAxis];
                    console.log('GraphsControl: Set zAxis selections (before populate):', pendingAxisSelections.zAxis);
                }
                
                // Now populate dropdowns with current data (this will render Y/Z dropdowns with selections)
                if (this.rowData && this.rowData.length > 0) {
                    this.populateDropdowns();
                }

                // Small delay to ensure dropdowns are fully populated, then set X-axis
                setTimeout(() => {
                    // Apply x-axis selection AFTER populateDropdowns() has finished
                    if (pendingAxisSelections.xAxis && this.singleSelectDropdown) {
                        console.log('GraphsControl: Setting X-axis to:', pendingAxisSelections.xAxis);
                        console.log('GraphsControl: Available X-axis options:', Array.from(this.singleSelectDropdown.options).map(o => o.value));
                        
                        this.singleSelectDropdown.value = pendingAxisSelections.xAxis;
                        
                        // Verify the value was set
                        if (this.singleSelectDropdown.value === pendingAxisSelections.xAxis) {
                            console.log('GraphsControl: ✅ X-axis value set successfully to:', this.singleSelectDropdown.value);
                        } else {
                            console.warn('GraphsControl: ❌ X-axis value not set. Current value:', this.singleSelectDropdown.value);
                        }
                        
                        // Trigger change event to update the chart
                        this.singleSelectDropdown.dispatchEvent(new Event('change'));
                        console.log('GraphsControl: Applied xAxis selection:', pendingAxisSelections.xAxis);
                    }

                    // Force chart update after all selections are applied
                    setTimeout(() => {
                        if (this.updateChart) {
                            this.updateChart();
                            console.log('GraphsControl: Forced chart update after axis selection');
                        }
                    }, 50);
                }, 100);
            };

            // 7. Set document type selection and handle axis selections after completion
            if (template.selectedDocType) {
                const docTypeSelect = this.shadowRoot.getElementById("docTypeSelect");
                if (docTypeSelect) {
                    docTypeSelect.value = template.selectedDocType;
                    console.log('GraphsControl: Set selectedDocType:', template.selectedDocType);
                    
                    // Create a promise that resolves when all doc type changes are complete
                    const waitForDocTypeChange = () => {
                        return new Promise((resolve) => {
                            let changeEventFired = false;
                            let handleDocTypeFired = false;
                            
                            const checkCompletion = () => {
                                if (changeEventFired && handleDocTypeFired) {
                                    console.log('GraphsControl: Both doc type change events completed');
                                    setTimeout(resolve, 100); // Small additional delay
                                }
                            };
                            
                            // Handle the programmatic doc type change
                            if (this.handleDocTypeChange) {
                                console.log('GraphsControl: Calling handleDocTypeChange programmatically');
                                const result = this.handleDocTypeChange(template.selectedDocType);
                                
                                if (result && typeof result.then === 'function') {
                                    // It's a Promise
                                    result.then(() => {
                                        console.log('GraphsControl: handleDocTypeChange promise resolved');
                                        handleDocTypeFired = true;
                                        checkCompletion();
                                    }).catch(error => {
                                        console.error('GraphsControl: Error in handleDocTypeChange:', error);
                                        handleDocTypeFired = true;
                                        checkCompletion();
                                    });
                                } else {
                                    // It's synchronous
                                    console.log('GraphsControl: handleDocTypeChange completed synchronously');
                                    handleDocTypeFired = true;
                                    checkCompletion();
                                }
                            } else {
                                handleDocTypeFired = true;
                                checkCompletion();
                            }
                            
                            // Trigger change event after a small delay to let programmatic change complete
                            setTimeout(() => {
                                console.log('GraphsControl: Triggering change event on docTypeSelect');
                                docTypeSelect.dispatchEvent(new Event('change'));
                                
                                // Give change event handlers time to complete
                                setTimeout(() => {
                                    console.log('GraphsControl: Change event processing completed');
                                    changeEventFired = true;
                                    checkCompletion();
                                }, 150);
                            }, 50);
                        });
                    };
                    
                    // Wait for all doc type changes to complete, then apply axis selections
                    waitForDocTypeChange().then(() => {
                        console.log('GraphsControl: All doc type changes complete, applying axis selections');
                        applyAxisSelections();
                    });
                }
            } else {
                // No doc type change, apply axis selections immediately
                setTimeout(applyAxisSelections, 200);
            }

            // 8. Colors
            if (this.initializeColors) {
                this.initializeColors();
            }
            if (template.colors && typeof template.colors === 'object') {
                this.columnColors = { ...template.colors };
                console.log('GraphsControl: Set colors:', template.colors);
            }

            // 9. Hidden columns
            if (template.hiddenColumns && Array.isArray(template.hiddenColumns)) {
                this.hiddenColumns = new Set(template.hiddenColumns);
                console.log('GraphsControl: Set hiddenColumns:', template.hiddenColumns);
            }

            // 10. Render chart - use template data if available, otherwise generate new chart
            setTimeout(() => {
                if (template.plotlyData && template.plotlyLayout && this.graphCanvas) {
                    // Use template data directly - preserves all template settings
                    console.log('GraphsControl: Using template plotly data for rendering');
                    this.renderChartFromTemplate(template.plotlyData, template.plotlyLayout);
                } else {
                    // Only generate new chart if no template data exists
                    console.log('GraphsControl: No template data, generating chart from current selections');
                    setTimeout(() => this.forceResize(), 500);
                }
            }, 500); // Increased delay to allow axis selections to complete

            console.log('GraphsControl: Chart template applied successfully');
        } catch (error) {
            console.error('GraphsControl: Error applying chart template:', error);
            setTimeout(() => {
                if (this.updateChart) {
                    this.updateChart();
                }
                setTimeout(() => this.forceResize(), 500);
            }, 300);
        }
    }

    applyChartTemplateStrict(template) {
        try {
            console.log('GraphsControl (Strict): Applying chart template:', template);

            // 1. Set row data (optional: keep same as template)
            if (template.rowData && Array.isArray(template.rowData)) {
                this.rowData = template.rowData;
                console.log('GraphsControl (Strict): Set rowData:', template.rowData.length, 'rows');
            }

            // 2. Set chart type
            const chartTypeSelect = this.shadowRoot.getElementById("chartType");
            if (chartTypeSelect) {
                chartTypeSelect.value = template.chartType;
                chartTypeSelect.dispatchEvent(new Event("change"));
                console.log("GraphsControl: Set chartType:", template.chartType);
            } else {
                console.warn("GraphsControl: chartType select element not found in shadowRoot");
            }

            // 3. Set graph title
            if (template.graphTitle) {
                const graphTitleInput = this.shadowRoot.getElementById("graphTitleInput");
                if (graphTitleInput) {
                    graphTitleInput.value = template.graphTitle;
                    console.log('GraphsControl (Strict): Set graphTitle:', template.graphTitle);
                }
                const titleDisplay = this.shadowRoot.getElementById("graphTitleDisplay");
                if (titleDisplay) {
                    titleDisplay.textContent = template.graphTitle;
                    console.log("GraphsControl: Set graphTitle (display):", template.graphTitle);
                }
            }

            // 4. Set axis labels/titles
            if (template.xAxisLabel) {
                const xAxisInput = this.shadowRoot.getElementById("xAxisInput");
                if (xAxisInput) {
                    xAxisInput.value = template.xAxisLabel;
                    console.log('GraphsControl (Strict): Set xAxisLabel:', template.xAxisLabel);
                }
            }

            if (template.yAxisLabel) {
                const yAxisInput = this.shadowRoot.getElementById("yAxisInput");
                if (yAxisInput) {
                    yAxisInput.value = template.yAxisLabel;
                    console.log('GraphsControl (Strict): Set yAxisLabel:', template.yAxisLabel);
                }
            }

            if (this.updateAxisTitlesFromInputs) {
                this.updateAxisTitlesFromInputs();
            }

            // 5. Set document type (STRICT: override dropdown with ONLY template value)
            if (template.selectedDocType) {
                const docTypeSelect = this.shadowRoot.getElementById("docTypeSelect");
                if (docTypeSelect) {
                    docTypeSelect.innerHTML = ""; // clear all previous options

                    const option = document.createElement("option");
                    option.value = template.selectedDocType;
                    option.textContent = template.selectedDocType;
                    option.selected = true;
                    docTypeSelect.appendChild(option);

                    this.selectedDocType = template.selectedDocType; // store it internally
                    console.log('GraphsControl (Strict): Set selectedDocType:', template.selectedDocType);
                }
            }

            // 6. Strictly set axis values from template only
            if (template.xAxis) {
                this.pendingXAxisSelection = template.xAxis;
                console.log('GraphsControl (Strict): Stored xAxis selection:', template.xAxis);
            }

            if (template.yAxis && Array.isArray(template.yAxis)) {
                this.selectedMultiColumns = [...template.yAxis];
                console.log('GraphsControl (Strict): Set yAxis selections:', template.yAxis);
            }

            if (template.zAxis && Array.isArray(template.zAxis)) {
                this.selectedThirdMultiColumns = [...template.zAxis];
                console.log('GraphsControl (Strict): Set zAxis selections:', template.zAxis);
            }

            // ✅ Instead of populating all options, override dropdowns with ONLY template values
            if (this.singleSelectDropdown && template.xAxis) {
                this.singleSelectDropdown.innerHTML = "";
                const option = document.createElement("option");
                option.value = template.xAxis;
                option.textContent = template.xAxis;
                this.singleSelectDropdown.appendChild(option);
                this.singleSelectDropdown.value = template.xAxis;
            }

            // ✅ Y-Axis (multi select)
            const yAxisContainer = this.shadowRoot.getElementById("customMultiSelectContainer");
            if (yAxisContainer && Array.isArray(template.yAxis)) {
                yAxisContainer.innerHTML = "";
                template.yAxis.forEach(y => {
                    const option = document.createElement("option");
                    option.value = y;
                    option.textContent = y;
                    option.selected = true;
                    yAxisContainer.appendChild(option);
                });
            }

            // ✅ Z-Axis (multi select)
            const zAxisContainer = this.shadowRoot.getElementById("customThirdMultiSelectContainer");
            if (zAxisContainer && Array.isArray(template.zAxis)) {
                zAxisContainer.innerHTML = "";
                template.zAxis.forEach(z => {
                    const option = document.createElement("option");
                    option.value = z;
                    option.textContent = z;
                    option.selected = true;
                    zAxisContainer.appendChild(option);
                });
            }

            // 7. Colors
            if (this.initializeColors) {
                this.initializeColors();
            }
            if (template.colors && typeof template.colors === 'object') {
                this.columnColors = { ...template.colors };
                console.log('GraphsControl (Strict): Set colors:', template.colors);
            }

            // 8. Hidden columns
            if (template.hiddenColumns && Array.isArray(template.hiddenColumns)) {
                this.hiddenColumns = new Set(template.hiddenColumns);
                console.log('GraphsControl (Strict): Set hiddenColumns:', template.hiddenColumns);
            }

            // 9. ✅ FIXED: Wait for component to be fully ready before rendering
            this.waitForReadyAndRender(template);

            console.log('GraphsControl (Strict): Chart template applied successfully');
        } catch (error) {
            console.error('GraphsControl (Strict): Error applying chart template:', error);
            // Fallback rendering with longer delay
            setTimeout(() => {
                if (this.updateChart) {
                    this.updateChart();
                }
                setTimeout(() => this.forceResize(), 500);
            }, 500); // Increased delay for error case
        }
    }

    //Method to ensure component is ready before rendering
    waitForReadyAndRender(template) {
        const maxAttempts = 10;
        let attempts = 0;
        
        const checkReadyAndRender = () => {
            attempts++;
            
            // Check if essential elements exist and component is ready
            const isReady = this.graphCanvas && 
                        this.rowData && 
                        this.rowData.length > 0 &&
                        (template.xAxis ? this.singleSelectDropdown : true) &&
                        this.shadowRoot.getElementById("chartType");
            
            if (isReady) {
                console.log('GraphsControl: Component ready, rendering chart');
                
                if (template.plotlyData && template.plotlyLayout) {
                    console.log('GraphsControl (Strict): Using template plotly data for rendering');
                    this.renderChartFromTemplate(template.plotlyData, template.plotlyLayout);
                } else {
                    console.log('GraphsControl (Strict): Generating chart from current selections');
                    // Ensure updateChart method exists and call it
                    if (this.updateChart) {
                        this.updateChart();
                    } else {
                        console.warn('updateChart method not found, trying alternative render methods');
                        // Try alternative rendering methods if available
                        if (this.generateChart) {
                            this.generateChart();
                        } else if (this.renderChart) {
                            this.renderChart();
                        }
                    }
                }
                
                // Force resize after rendering
                setTimeout(() => {
                    if (this.forceResize) {
                        this.forceResize();
                    }
                }, 100);
                
            } else if (attempts < maxAttempts) {
                console.log(`GraphsControl: Component not ready (attempt ${attempts}/${maxAttempts}), retrying...`);
                setTimeout(checkReadyAndRender, 200);
            } else {
                console.error('GraphsControl: Component failed to become ready, attempting fallback render');
                // Final fallback attempt
                setTimeout(() => {
                    if (this.updateChart) {
                        this.updateChart();
                    }
                    if (this.forceResize) {
                        this.forceResize();
                    }
                }, 300);
            }
        };
        
        // Start the ready check
        setTimeout(checkReadyAndRender, 100);
    }

    // Simple method to display single value in X-axis dropdown
    displaySingleValue(dropdown, value) {
        try {
            if (!dropdown || !value) return;
            
            dropdown.innerHTML = '';
            const option = document.createElement('option');
            option.value = value;
            option.textContent = value;
            option.selected = true;
            dropdown.appendChild(option);
            
            console.log(`X-axis set to: ${value}`);
        } catch (error) {
            console.error('Error setting X-axis value:', error);
        }
    }

    // Simple method to display multi-select values as tags only (no dropdowns)
    displayMultiSelectValues(axisType, values) {
        try {
            console.log(`displayMultiSelectValues called with axisType: ${axisType}, values:`, values);
            
            if (!values || !Array.isArray(values)) {
                console.log(`Invalid values for ${axisType}:`, values);
                return;
            }
            
            let containerId = '';
            let bgColor = '';
            
            if (axisType === 'y') {
                containerId = 'customMultiSelectContainer';
                bgColor = '#007cba';
            } else if (axisType === 'z') {
                containerId = 'customThirdMultiSelectContainer';
                bgColor = '#28a745';
            }
            
            console.log(`Looking for container: ${containerId}`);
            const container = this.shadowRoot.getElementById(containerId);
            
            if (!container) {
                console.error(`Container ${containerId} not found in shadowRoot`);
                // List all available elements for debugging
                console.log('Available elements in shadowRoot:', 
                    Array.from(this.shadowRoot.querySelectorAll('[id]')).map(el => el.id));
                return;
            }
            
            console.log(`Found container: ${containerId}`);
            
            // Clear container
            container.innerHTML = '';
            
            // Create tags div
            const tagsDiv = document.createElement('div');
            tagsDiv.style.display = 'flex';
            tagsDiv.style.flexWrap = 'wrap';
            tagsDiv.style.gap = '6px';
            tagsDiv.style.padding = '5px';
            
            // Add each value as a tag (no remove button)
            values.forEach(col => {
                console.log(`Creating tag for: ${col}`);
                const tag = document.createElement('span');
                tag.textContent = col;
                tag.style.background = bgColor;
                tag.style.color = 'white';
                tag.style.padding = '4px 12px';
                tag.style.borderRadius = '12px';
                tag.style.fontSize = '13px';
                tag.style.margin = '2px';
                tag.style.display = 'inline-block';
                tagsDiv.appendChild(tag);
            });
            
            container.appendChild(tagsDiv);
            
            console.log(`${axisType.toUpperCase()}-axis set successfully to:`, values);
            console.log(`Container ${containerId} now contains:`, container.innerHTML);
            
        } catch (error) {
            console.error(`Error setting ${axisType}-axis values:`, error);
        }
    }

    // Enhanced renderChartFromTemplate method with better resizing
    renderChartFromTemplate(plotlyData, plotlyLayout) {
        try {
            console.log('GraphsControl: Rendering chart from template data');
            
            // Get actual container dimensions
            const graphContainer = this.querySelector('.graph-container') || this.closest('.graph-container');
            
            let containerWidth = 1625; // Increased default width
            let containerHeight = 500;
            
            // Calculate based on actual available space
            if (graphContainer) {
                const rect = graphContainer.getBoundingClientRect();
                containerWidth = Math.min(rect.width - 100, 1700); // Max 1200px width (increased by 400px)
                containerHeight = Math.min(rect.height - 150, 450); // Max 450px height
            }
            
            // Ensure reasonable sizes that fit in containers
            containerWidth = Math.max(containerWidth, 800); // Min 800px (increased minimum)
            containerHeight = Math.max(containerHeight, 300); // Min 300px
            
            console.log(`Calculated chart dimensions: ${containerWidth}x${containerHeight}`);
            
            // Enhanced Plotly config
            const config = {
                responsive: true,
                displayModeBar: true,
                modeBarButtonsToRemove: ['select2d', 'lasso2d', 'autoScale2d'],
                displaylogo: false,
                toImageButtonOptions: {
                    format: 'png',
                    filename: 'chart',
                    height: containerHeight,
                    width: containerWidth,
                    scale: 2
                }
            };
            
            // Enhanced layout with calculated dimensions
            const enhancedLayout = {
                ...plotlyLayout,
                autosize: false,
                width: containerWidth,
                height: containerHeight,
                margin: { 
                    l: 60,   // Left margin for y-axis labels
                    r: 30,   // Reduced right margin
                    t: 40,   // Reduced top margin
                    b: 0    // Bottom margin for x-axis labels
                }
            };
            
            // Clear and set canvas size
            this.graphCanvas.innerHTML = '';
            this.graphCanvas.style.width = containerWidth + 'px';
            this.graphCanvas.style.height = containerHeight + 'px';
            this.graphCanvas.style.maxWidth = '100%';
            this.graphCanvas.style.overflow = 'visible';
            
            // Plot the chart
            Plotly.newPlot(this.graphCanvas, plotlyData, enhancedLayout, config).then(() => {
                console.log('GraphsControl: Chart restored from template successfully');
                
                // Post-plotting setup
                setTimeout(() => {
                    if (this.relocateToolbar) {
                        this.relocateToolbar();
                    }
                    if (this.createLegendControlPanel) {
                        this.createLegendControlPanel();
                    }
                    
                    console.log("GraphsControl: Template chart fully loaded!");
                }, 200);
                
            }).catch((error) => {
                console.error('GraphsControl: Error restoring chart from template:', error);
                // Fallback
                setTimeout(() => {
                    if (this.updateChart) {
                        this.updateChart();
                    }
                }, 300);
            });
            
        } catch (error) {
            console.error('GraphsControl: Error in renderChartFromTemplate:', error);
            // Fallback
            setTimeout(() => {
                if (this.updateChart) {
                    this.updateChart();
                }
            }, 300);
        }
    }

    openHelpModal() {
        const modal = this.shadowRoot.getElementById("helpModal");
        modal.classList.add("active");
        document.body.style.overflow = "hidden"; // Prevent background scrolling
        console.log("Help modal opened");
    }

    closeHelpModal() {
        const modal = this.shadowRoot.getElementById("helpModal");
        modal.classList.remove("active");
        document.body.style.overflow = ""; // Restore background scrolling
        console.log("Help modal closed");
    }

    switchHelpSection(sectionId) {
        // Remove active class from all nav items and sections
        const navItems = this.shadowRoot.querySelectorAll(".help-nav-item");
        const sections = this.shadowRoot.querySelectorAll(".help-section");
        
        navItems.forEach(item => item.classList.remove("active"));
        sections.forEach(section => section.classList.remove("active"));
        
        // Add active class to selected nav item and section
        const selectedNavItem = this.shadowRoot.querySelector(`[data-section="${sectionId}"]`);
        const selectedSection = this.shadowRoot.getElementById(sectionId);
        
        if (selectedNavItem && selectedSection) {
            selectedNavItem.classList.add("active");
            selectedSection.classList.add("active");
            console.log(`Switched to help section: ${sectionId}`);
        }
    }

    // Enhanced forceResize method
    forceResize() {
        try {
            if (!this.graphCanvas || this.graphCanvas.children.length === 0) {
                return;
            }
            
            // Find the actual container
            const graphContainer = this.querySelector('.graph-container') || this.closest('.graph-container');
            
            let containerWidth = 1625; // Increased default
            let containerHeight = 500;
            
            // Calculate new dimensions based on container
            if (graphContainer) {
                const containerRect = graphContainer.getBoundingClientRect();
                containerWidth = Math.min(containerRect.width - 100, 1700); // Max 1200px (increased)
                containerHeight = Math.min(containerRect.height - 150, 450); // Max 450px
            }
            
            // Ensure minimums
            containerWidth = Math.max(containerWidth, 800); // Min 800px (increased)
            containerHeight = Math.max(containerHeight, 350);
            
            console.log(`Resizing chart to: ${containerWidth}x${containerHeight}`);
            
            // Update Plotly layout
            const update = {
                width: containerWidth,
                height: containerHeight,
                autosize: false,
                margin: { 
                    l: 60, 
                    r: 30, 
                    t: 40, 
                    b: 0 
                }
            };
            
            // Update canvas container size
            this.graphCanvas.style.width = containerWidth + 'px';
            this.graphCanvas.style.height = containerHeight + 'px';
            this.graphCanvas.style.maxWidth = '100%';
            
            // Apply resize
            Plotly.relayout(this.graphCanvas, update).then(() => {
                console.log('Chart resized successfully');
            }).catch((error) => {
                console.error('Error resizing chart:', error);
                // Fallback to style-based resize
                this.graphCanvas.style.width = containerWidth + 'px';
                this.graphCanvas.style.height = containerHeight + 'px';
            });
            
        } catch (error) {
            console.error('GraphsControl: Error in forceResize:', error);
        }
    }

    // Enhanced handleResize method for window resize events
    handleResize() {
        clearTimeout(this.resizeTimeout);
        this.resizeTimeout = setTimeout(() => {
            this.forceResize();
        }, 250);
    }

    clearChart() {
        try {
            console.log('GraphsControl: Clearing chart and resetting to default state');
            
            // Clear the chart canvas
            if (this.graphCanvas) {
                this.graphCanvas.innerHTML = '';
                console.log('Chart canvas cleared');
            }
            
            // Reset all selections
            this.selectedMultiColumns = [];
            this.selectedThirdMultiColumns = [];
            this.columnColors = {};
            this.hiddenColumns = new Set();
            
            // Reset chart type to default
            this.chartType = 'scatter';
            const chartTypeSelect = this.shadowRoot.getElementById("chartType");
            if (chartTypeSelect) {
                chartTypeSelect.value = 'scatter';
            }
            const xAxisInput = this.shadowRoot.getElementById("xAxisInput");
            const yAxisInput = this.shadowRoot.getElementById("yAxisInput");
            const graphTitleInput = this.shadowRoot.getElementById("graphTitleInput");
            const graphTitleDisplay = this.shadowRoot.getElementById("graphTitleDisplay");

            if (xAxisInput) {
                xAxisInput.value = "";
            }
            if (yAxisInput) {
                yAxisInput.value = "";
            }
            if (graphTitleInput) {
                graphTitleInput.value = "";
            }

            if (graphTitleDisplay) {
                graphTitleDisplay.textContent = "";
            }
            
            // Clear axis titles
            this.setAxisTitles("X-Axis", "Y-Axis");
            
            // Reset dropdowns to default state
            this.resetDropdownsToDefault();
            
            // Clear any legend control panel
            this.clearLegendControlPanel();
            
            console.log('GraphsControl: Chart cleared successfully');
            
        } catch (error) {
            console.error('GraphsControl: Error clearing chart:', error);
        }
    }

    // Method to reset dropdowns to default state
    resetDropdownsToDefault() {
        try {
            // Reset chart type dropdown
            const chartTypeSelect = this.querySelector('#chartTypeSelect') || 
                                this.querySelector('.chart-type-select') ||
                                this.querySelector('select[name="chartType"]');
            if (chartTypeSelect) {
                chartTypeSelect.value = 'scatter';
                chartTypeSelect.dispatchEvent(new Event('change'));
            }
            
            // Reset X-axis dropdown to show all options
            if (this.singleSelectDropdown) {
                // Repopulate with all available columns
                const availableColumns = this.getAvailableColumns();
                this.singleSelectDropdown.innerHTML = '<option value="">Select X-axis...</option>';
                availableColumns.forEach(col => {
                    const option = document.createElement('option');
                    option.value = col;
                    option.textContent = col;
                    this.singleSelectDropdown.appendChild(option);
                });
            }
            
            // Reset Y-axis multi-select
            const yContainer = this.shadowRoot?.getElementById('customMultiSelectContainer');
            if (yContainer) {
                yContainer.innerHTML = '';
                // Add placeholder text
                const placeholder = document.createElement('div');
                placeholder.textContent = 'No Y-axis columns selected';
                placeholder.style.color = '#999';
                placeholder.style.fontStyle = 'italic';
                placeholder.style.padding = '8px';
                yContainer.appendChild(placeholder);
            }
            
            // Reset Z-axis multi-select
            const zContainer = this.shadowRoot?.getElementById('customThirdMultiSelectContainer');
            if (zContainer) {
                zContainer.innerHTML = '';
                // Add placeholder text
                const placeholder = document.createElement('div');
                placeholder.textContent = 'No Z-axis columns selected';
                placeholder.style.color = '#999';
                placeholder.style.fontStyle = 'italic';
                placeholder.style.padding = '8px';
                zContainer.appendChild(placeholder);
            }
            
            console.log('Dropdowns reset to default state');
            
        } catch (error) {
            console.error('Error resetting dropdowns:', error);
        }
    }

    // Method to clear legend control panel
    clearLegendControlPanel() {
        try {
            // Find and remove legend control panel
            const legendPanel = this.querySelector('.legend-control-panel') || 
                            this.shadowRoot?.querySelector('.legend-control-panel') ||
                            document.querySelector('.legend-control-panel');
            if (legendPanel) {
                legendPanel.remove();
                console.log('Legend control panel cleared');
            }
            
            // Clear any other legend-related elements
            const legendElements = this.querySelectorAll('[class*="legend"]');
            legendElements.forEach(element => {
                if (element !== this.graphCanvas) { // Don't remove the main canvas
                    element.remove();
                }
            });
            
        } catch (error) {
            console.error('Error clearing legend control panel:', error);
        }
    }

    // **Set chart template data**
    set value(chartTemplateData) {
        if (!chartTemplateData) return;
        console.log("inside set value method!")
        let template;
        if (typeof chartTemplateData === "string") {
            try {
                template = JSON.parse(chartTemplateData);
            } catch (error) {
                console.error('GraphsControl: Error parsing chart template:', error);
                return;
            }
        } else {
            template = chartTemplateData;
        }
        
        console.log('GraphsControl: Setting value with template:', template);
        
        // Store the template for later use
        this.storedTemplate = template;
        
        setTimeout(() => {
            try {
                this.applyChartTemplate(template);
                console.log('GraphsControl: Template applied successfully');
            } catch (error) {
                console.error('GraphsControl: Error applying template:', error);
            }
        }, 100);
    }

    // **Get current chart configuration as JSON**
    get value() {
        try {
            // Get the current chart data from Plotly
            const chartData = this.graphCanvas.data || [];
            const chartLayout = this.graphCanvas.layout || {};
            
            // Get the axis labels from the input fields
            const xAxisLabel = this.shadowRoot.getElementById("xAxisInput")?.value || "";
            const yAxisLabel = this.shadowRoot.getElementById("yAxisInput")?.value || "";
            
            // Get the selected document type
            const selectedDocType = this.shadowRoot.getElementById("docTypeSelect")?.value || "";
            
            // Get the graph title from the input field (not layout)
            const titleInput = this.shadowRoot.getElementById("graphTitleInput");
            const graphTitle = titleInput?.value || chartLayout.title?.text || "";
            
            // Update the display if both elements exist
            const titleDisplay = this.shadowRoot.getElementById("graphTitleDisplay");
            if (titleInput && titleDisplay) {
                titleDisplay.textContent = graphTitle;
            }
            
            // Prepare the chart template data
            const chartTemplate = {
                graphTitle: graphTitle,
                xAxisLabel: xAxisLabel,
                yAxisLabel: yAxisLabel,
                xAxis: this.singleSelectDropdown?.value || null,
                yAxis: this.selectedMultiColumns || [],
                zAxis: this.selectedThirdMultiColumns || [],
                chartType: this.chartType || "",
                colors: this.columnColors || {},
                hiddenColumns: Array.from(this.hiddenColumns || []),
                selectedDocType: selectedDocType,
                plotlyLayout: chartLayout
            };
            
            console.log('GraphsControl: Returning chart template:', chartTemplate);
            
            // Return as JSON string for consistency with other controls
            return JSON.stringify(chartTemplate);
            
        } catch (error) {
            console.error('GraphsControl: Error getting chart template data:', error);
            return "{}"; // Return empty JSON object on error
        }
    }

    async handleDocTypeChange(docType) {
        if (!docType) {
            this.clearChart();
            return;
        }
        
        console.log('Doc type changed to:', docType);
        
        try {
            // Get row data for selected doc type
            const rowData = await this.getActualRowDataForDocType(docType);
            
            if (!rowData || rowData.length === 0) {
                alert('No data available for the selected document type.');
                return;
            }
            
            // Update the graphs control with new data
            this.rowData = rowData;
            this.selectedDocType = docType;
            
            // Repopulate dropdowns with new column data
            this.populateDropdowns();
            
            // Clear existing selections
            this.selectedMultiColumns = [];
            this.selectedThirdMultiColumns = [];
            this.columnColors = {};
            this.hiddenColumns = new Set();
            
            // Update chart
            this.updateChart();
            
            console.log('Chart updated with new doc type data');
            
        } catch (error) {
            console.error('Error loading doc type data:', error);
            alert('Error loading data for selected document type.');
        }
    }

    async populateDocTypeDropdown() {
        try {
            const docTypeDropdown = this.shadowRoot.getElementById("docTypeSelect");
            
            // Call your existing helper function to get doc types
            const docTypesResponse = await fetchHelperData("fetchDocTypes", "dropdown");
            const docTypes = docTypesResponse.map(item => item.doc_type).filter(Boolean);
            
            if (!docTypes || docTypes.length === 0) {
                console.warn('No doc types available');
                return;
            }
            
            // Clear existing options
            docTypeDropdown.innerHTML = '<option value="">Select Document Type...</option>';
            
            // Add doc type options
            docTypes.forEach(docType => {
                const option = document.createElement('option');
                option.value = docType;
                option.textContent = docType;
                docTypeDropdown.appendChild(option);
            });
            
            console.log('Doc type dropdown populated with:', docTypes);
            
        } catch (error) {
            console.error('Error populating doc type dropdown:', error);
        }
    }

    async getActualRowDataForDocType(docType) {
        try {
            console.log('Getting actual row data for doc_type:', docType);
            
            // First get the UI template config to extract field names
            const templateData = await this.getRowDataForDocType(docType);
            
            if (!templateData || templateData.length === 0) {
                console.log('No template data found for doc_type:', docType);
                return [];
            }
            
            // Extract field names from the template config
            // const listConfig = templateData[0];
            let fieldNames = [];
            
            if (templateData[0] && templateData[0].data && templateData[0].data[0] && templateData[0].data[0].fields) {
                // Extract the 'field' property from each item in the fields array
                fieldNames = templateData[0].data[0].fields.map(fieldObj => fieldObj.field);
            }
            
            console.log('Field names from template:', fieldNames);
            
            // Get tab name from get_DB_data.json configuration
            const tabName = await this.getTabNameForDocType(docType);
            
            if (!tabName) {
                console.log('No tab name found for doc_type:', docType);
                return [];
            }
            
            console.log('Tab name for', docType, ':', tabName);
            
            // Get the table name from get_DB_data.json
            const tableName = await this.getTableNameForDocType(docType);
            
            if (!tableName) {
                console.log('No table name found for doc_type:', docType);
                return [];
            }
            
            console.log('Table name for', docType, ':', tableName);
            
            // Prepare the API call body to get actual data
            const dataBody = {
                "requestor_id": "", 
                "request_token": "", 
                "tab": tabName,
                "affiliations": JSON.parse(localStorage.getItem("my_current_affiliation[0].id")),
                "event": "getTabContol",
                "type": docType,
                "qry": {
                    "select_fields": fieldNames.length > 0 ? fieldNames : ["*"],
                    "table_name": tableName,
                    "where_data": {}  // Add any filtering conditions here if needed
                }
            };
            
            console.log('Data body for API call:', dataBody);
            
            // Make the API call to get actual data
            const dataResult = await API_call(domain, "config/list_details_new", dataBody, "POST", false);   
            console.log('Data result:', dataResult);
            
            // Return the actual data records
            // if (dataResult && dataResult.data && Array.isArray(dataResult.data)) {
            //     console.log('Returning actual row data for', docType, ':', dataResult.data);
            //     return dataResult.data;
            // }
            
            // return [];
            if (dataResult && Array.isArray(dataResult) && dataResult.length > 0) {
                const actualRecords = dataResult[0]; // Get the first element which contains the data array
                
                if (Array.isArray(actualRecords)) {
                    return actualRecords; // Return the array of data objects
                }
            }
            
        } catch (error) {
            console.error('Error getting actual row data for doc_type:', error);
            return [];
        }
    }

    async getRowDataForDocType(docType) {
        try {
            console.log('Getting row data for doc_type:', docType);
            
            // Get the doc_type ID from fetchDocTypes
            const docTypesResponse = await fetchHelperData("fetchDocTypes", "dropdown");
            const docTypeItem = docTypesResponse.find(item => item.doc_type === docType);
            
            if (!docTypeItem || !docTypeItem.id) {
                console.log('No ID found for doc_type:', docType);
                return [];
            }
            
            const docTypeId = docTypeItem.id;
            console.log('Doc type ID:', docTypeId);
            
            // Now get the UI template configuration from doc_ui_template table using the doc_type ID
            const body = {
                "requestor_id": "",
                "request_token": "",
                "tab": "Document Config",
                "event": "getdocumentuitemplate",
                "type": "Document UI Templates",
                "qry": {
                    "select_fields": ["id", "ui_template"],
                    "where_data": {"doc_template_id": docTypeId}
                }
            };
            
            const configResult = await API_helper_call(domain + "options", body);
            console.log('UI Template config result:', configResult);
            
            if (!configResult || configResult.length === 0) {
                console.log('No UI template found for doc_template_id:', docTypeId);
                return [];
            }
            
            const uiTemplate = JSON.parse(configResult[0].ui_template);
            console.log('Parsed UI template:', uiTemplate);
            
            // Get the specific doc_type configuration
            const docTypeConfig = uiTemplate[docType];
            if (!docTypeConfig || !docTypeConfig.job || !docTypeConfig.job.list) {
                console.log('No list configuration found for doc_type:', docType);
                return [];
            }
            
            const listConfig = docTypeConfig.job.list;
            console.log('List config for', docType, ':', listConfig);
            
            // Return the list configuration as row data
            console.log('Returning list config as row data for', docType);
            
            return Array.isArray(listConfig) ? listConfig : [listConfig];
            
        } catch (error) {
            console.error('Error getting row data for doc_type:', error);
            return [];
        }
    }

    async getTabNameForDocType(docType) {
        try {
            // Read the get_DB_data.json file via API
            const response = await fetch('http://127.0.0.1:5000/api/db-config');
            const apiResponse = await response.json();
            
            console.log('API Response:', apiResponse);
            
            // Extract the actual config data from the API response
            const dbConfig = apiResponse.data || apiResponse;
            
            console.log('Loaded DB config:', dbConfig);
            console.log('Looking for doc_type:', docType);
            
            // Find which tab contains the docType
            for (const [tabName, docTypes] of Object.entries(dbConfig)) {
                if (tabName !== "db_name" && typeof docTypes === 'object') {
                    console.log(`Checking tab "${tabName}":`, docTypes);
                    if (docTypes.hasOwnProperty(docType)) {
                        console.log('Found tab for', docType, ':', tabName);
                        return tabName;
                    }
                }
            }
            
            console.log('Tab name not found for doc_type:', docType);
            return null;
            
        } catch (error) {
            console.error('Error reading get_DB_data.json:', error);
            return null;
        }
    }

    async getTableNameForDocType(docType) {
        try {
            console.log('Getting table name for doc_type:', docType);
            
            // Read the get_DB_data.json file via API
            const response = await fetch('http://127.0.0.1:5000/api/db-config');
            const apiResponse = await response.json();
            
            // Extract the actual config data from the API response
            const dbConfig = apiResponse.data || apiResponse;
            
            // Find which tab contains the docType and get the table name
            for (const [tabName, docTypes] of Object.entries(dbConfig)) {
                if (tabName !== "db_name" && typeof docTypes === 'object') {
                    if (docTypes.hasOwnProperty(docType)) {
                        const tableName = docTypes[docType];
                        console.log('Found table name for', docType, ':', tableName);
                        return tableName;
                    }
                }
            }
            
            console.log('Table name not found for doc_type:', docType);
            return null;
            
        } catch (error) {
            console.error('Error getting table name:', error);
            return null;
        }
    }

    showContent() {
        const container = this.shadowRoot.querySelector('.graphs-container');
        if (container) {
            container.style.display = 'flex';
        }
    }

    hideContent() {
        const container = this.shadowRoot.querySelector('.graphs-container');
        if (container) {
            container.style.display = 'none';
        }
    }

    // Updated initializeAndOpenModal method with template clearing support
    initializeAndOpenModal(rowData, selectedItemFromDropdown, chartTemplate = null, xTitle = "X-Axis", yTitle = "Y-Axis") {
        console.log("GraphsControl: Initializing modal with template:", chartTemplate);
        
        this.rowData = rowData;
        this.xAxisTitle = xTitle;
        this.yAxisTitle = yTitle;
        this.selectedItemFromDropdown = selectedItemFromDropdown;
        this.chartTemplate = chartTemplate;
        
        // Clear chart first if no template
        if (!chartTemplate) {
            this.clearChart();
        }
        
        // Update the HTML elements with initial titles
        if (this.xAxisTitleElement) {
            this.xAxisTitleElement.textContent = this.xAxisTitle;
        }
        if (this.yAxisTitleElement) {
            this.yAxisTitleElement.textContent = this.yAxisTitle;
        }
        
        // Populate dropdowns with column names from rowData (if no template)
        if (!chartTemplate) {
            this.populateDropdowns();
            this.resetDropdownsToDefault();
        }
        this.showContent();
        this.initializeDropdownListeners();
        this.initializeChart();
        // this.openModal();
        
        // Enhanced initialization sequence with template handling
        setTimeout(() => {
            if (chartTemplate) {
                // Apply template after modal is fully visible
                this.applyChartTemplateStrict(chartTemplate);
            } else {
                // Normal initialization - just show empty chart area
                console.log('Normal initialization - no template applied');
            }
            
            // Add resize listener
            window.addEventListener('resize', () => this.handleResize());
        }, 500);
    }

    // Method to get available columns from rowData (if not already present)
    getAvailableColumns() {
        if (!this.rowData || !Array.isArray(this.rowData) || this.rowData.length === 0) {
            return [];
        }
        return Object.keys(this.rowData[0]);
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

