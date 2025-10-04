import { useRef } from "react";
import { useState } from "react";
import { FaList } from "react-icons/fa6";
import { FaMap } from "react-icons/fa6";
import { FaFingerprint } from "react-icons/fa6";
import { FaCalendarDays } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const BreakTimeByEmployeeList = () => {

  const navigate = useNavigate();

  const [reason, setReason] = useState("");
    //   const [password, setPassword] = useState("");
    
      const handleSubmit = (e) => {
        e.preventDefault();
      };

const punchINRef = useRef(null);
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
                <a href="#" class="btn btn-success text-white me-1" onClick={openDialogPunchInModel}><FaFingerprint /> Take Attendance</a>
              </div>            
            </div>
            <div class="mt-4">
              <div>
                <h2 class="text-2xl font-bold">Break Time By Employee List</h2>
              </div>
              <hr class="mt-3" />
              <div class="overflow-x-auto">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Sr. No.</th>
                      <th>Date</th>
                      <th>Day</th>
                      <th>From Time</th>
                      <th>To Time</th>
                      <th>Total Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-base-200 hover:bg-base-300">
                      <td class="text-[12px]">1</td>
                      {/* <td class="text-[12px]"><span class="badge badge-dash badge-success">Present</span> <br/><small></small></td> */}
                      <td class="text-[12px]">26 Aug 2025</td>
                      <td class="text-[12px]">Monday</td>
                      <td class="text-[12px]">06:45:26 PM</td> 
                      <td class="text-[12px]">06:45:35 PM</td>
                      <td class="text-[12px]">0</td>  
                     
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
        Take Break (<span className="text-green-800">26 Aug 2025</span>)
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
                               Take Break
                            </button>
                            </div>
                        </form>
        </div>
    </div>
</dialog>
  
        </>
    )
}


export default BreakTimeByEmployeeList;