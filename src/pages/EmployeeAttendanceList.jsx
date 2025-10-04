import { useRef } from "react";
import { useState } from "react";
import { FaList } from "react-icons/fa6";
import { FaMap } from "react-icons/fa6";
import { FaFingerprint } from "react-icons/fa6";
import { FaCalendarDays } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const EmployeeAttendanceList = () => {
   const navigate = useNavigate();

    const [reason, setReason] = useState("");
    //   const [password, setPassword] = useState("");
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Username:", username);
        console.log("Password:", password);
    
        // Yahan API call karke backend ko bhej sakte ho
      };

const dialogRef = useRef(null);
const punchINRef = useRef(null)

  const openDialogDetailModel = () => {
    dialogRef.current.showModal();   // ✅ open karega
  };
  const closeDialogDetailModel = () => {
    dialogRef.current.close();       // ✅ close karega
  };

  const openDialogPunchInModel = () =>{
    punchINRef.current.showModal();
  }
  const closeDialogPunchInModel = () =>{
    punchINRef.current.close();
  }

    return(
        <>
  <section class="mt-5">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">

        <div class="mb-3 ">
          <div class="card w-full  shadow-xl p-7">
            <div class="flex justify-between">
              <div class="text-left">             
                <a href="#" onClick={() => navigate(-1)} class="btn btn-info"><i class="fa-solid fa-angle-left"></i> Back</a>
              </div>
              <div class="text-right"> 
                <a href="#" class="btn btn-success text-white me-1" onClick={openDialogPunchInModel}><FaFingerprint /> Punch In</a>
                <a href="attendanceCalenderView.html" class="btn btn-primary" > <FaCalendarDays /> View Calender</a>
              </div>            
            </div>
            <div class="mt-4">
              <div>
                <h2 class="text-2xl font-bold">Attendance List</h2>
              </div>
              <hr class="mt-3" />
              <div class="overflow-x-auto">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Sr. No.</th>
                      <th>Status</th>
                      <th>Day</th>
                      <th>Entry Time</th>
                      <th>Exit Time</th>
                      <th>Distance In</th>
                      <th>Distance Out</th>
                      <th>Total Time</th>
                      <th>Break Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-base-200 hover:bg-base-300">
                      <td class="text-[12px]">1</td>
                      <td class="text-[12px]"><span class="badge badge-dash badge-success">Present</span> <br/><small></small></td>
                      <td class="text-[12px]">26 Aug 2025</td>
                      <td class="text-[12px]">06:45:26 PM</td> 
                      <td class="text-[12px]">06:45:35 PM</td>
                      <td class="text-[12px]">0.02Km </td>
                      <td class="text-[12px]"> 0.69Km</td>                         
                      <td class="text-[12px]">0:0:9</td> 
                      <td class="text-[12px]">0</td>  
                      <td class="text-[12px]">
                        <a href="#" class="px-2 max-h-[30px] py-0 btn btn-primary me-1" onClick={openDialogDetailModel} ><FaList /></a>
                        <a href="#" class="px-2 max-h-[30px] py-0 btn btn-info"><FaMap /></a>                                                    
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>         
        </div>
        
      </div>
    </div>
  </section>


<dialog ref={dialogRef} id="" className="modal">
    <div className="modal-box w-11/12 max-w-6xl">
        <form method="dialog">
        <button 
            type="button" 
            onClick={closeDialogDetailModel} 
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
            ✕
        </button>
        </form>
        <h3 className="text-lg font-bold mb-2 mt-[-15px]">
        Attendance Detail (<span className="text-green-800">26 Aug 2025</span>)
        </h3>
        <hr />

        <div class="grid md:grid-cols-6 gap-3 mt-3">
            <div class="">
                <p class="mb-1"><strong>Entry Time:</strong></p>
                <p class="text-[14px]">07:28:51 PM</p>
            </div>
            <div class="">
                <p class="mb-1"><strong>Exit Time:</strong></p>
                <p class="text-[14px]">07:29:54 PM</p>
            </div>
            <div class="">
                <p class="mb-1"><strong>Entry Distance:</strong></p>
                <p class="text-[14px]">1.68</p>
            </div>
            <div class="">
                <p class="mb-1"><strong>Exit Distance:</strong></p>
                <p class="text-[14px]">1.11</p>
            </div>
            <div class="">
                <p class="mb-1"><strong>Total Time:</strong></p>
                <p class="text-[14px]">0:1:3</p>
            </div>
            <div class="">
                <p class="mb-1"><strong>Entry IP Address:</strong></p>
                <p class="text-[14px]">106.219.225.157</p>
            </div>
            <div class="">
                <p class="mb-1"><strong>Exit IP Address:</strong></p>
                <p class="text-[14px]">106.219.225.157</p>
            </div>
            <div class="">
                <p class="mb-1"><strong>Entry Device Type:</strong></p>
                <p class="text-[14px]">Mobile device</p>
            </div>
            <div class="">
                <p class="mb-1"><strong>Exit Device Type:</strong></p>
                <p class="text-[14px]">Mobile device</p>
            </div>
            <div class="">
                <p class="mb-1"><strong>Entry Lat/Long:</strong></p>
                <p class="text-[14px]">28.6104932/77.3742495</p>
            </div>
            <div class="">
                <p class="mb-1"><strong>Exit Lat/Long:</strong></p>
                <p class="text-[14px]">28.6103685/77.3765326</p>
            </div>
            <div class="">
                <p class="mb-1"><strong>Creating Date:</strong></p>
                <p class="text-[14px]">2025-09-01 07:28:51</p>
            </div>
        </div>
        <div class="grid md:grid-cols-6 gap-3 mt-3">
        <div class="md:col-span-1">
            <p class="mb-1"><strong>Entry Remark:</strong></p>
            <p class="text-[14px]">I am getting Late due to raining</p>
        </div>
        <div class="md:col-span-1">
            <p class="mb-1"><strong>Exit Remark:</strong></p>
            <p class="text-[14px]">I am getting Late due to raining</p>
        </div>
        <div class="md:col-span-2">
            <p class="mb-1"><strong>Entry Device Detail:</strong></p>
            <p class="text-[14px]">
                Mozilla/5.0 (Linux; Android 13; SM-G770F Build/TP1A.220624.014; wv) 
                AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 
                Chrome/139.0.7258.143 Mobile Safari/537.36
            </p>
        </div>
        <div class="md:col-span-2">
            <p class="mb-1"><strong>Exit Device Detail:</strong></p>
            <p class="text-[14px]">
                Mozilla/5.0 (Linux; Android 13; SM-G770F Build/TP1A.220624.014; wv) 
                AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 
                Chrome/139.0.7258.143 Mobile Safari/537.36
            </p>
        </div>
        </div>

    </div>
</dialog>



<dialog ref={punchINRef} id="" className="modal">
    <div className="modal-box w-11/12">
        <form method="dialog">
        <button 
            type="button" 
            onClick={closeDialogPunchInModel} 
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
            ✕
        </button>
        </form>
        <h3 className="text-lg font-bold mb-2 mt-[-15px]">
        Enter Reason (<span className="text-green-800">26 Aug 2025</span>)
        </h3>
        <hr />

        <div class="  mt-3">
            <form onSubmit={handleSubmit}>
                            <div>
                            <fieldset class="fieldset">
                                    <legend class="fieldset-legend">Type Reason</legend>
                                    <textarea class="textarea h-24 w-full" value={reason} placeholder="Type Reason" onChange={(e) => setReason(e.target.value)}></textarea>
                                </fieldset>
                            </div>
                            <div className="mt-3">
                            <button type="submit" className="btn btn-primary w-full">
                                Punch In
                            </button>
                            </div>
                        </form>
        </div>
    </div>
</dialog>
  
        </>
    )
}


export default EmployeeAttendanceList;