import { Link } from "react-router";  
  
  
  const Dashboard = () =>{
    return(
        <>
<section class="mt-5">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div class="mb-3 ">
          <a href="/break-time-by-employee-list">
            <div class="card w-full w-96 shadow-xl p-7 hover:bg-fuchsia-900 ">
              <figure>
                <img
                  src="../frontend/images/punch-in.webp"
                  alt="AMBAR" class="w-full" />
              </figure>
            </div>
            <div class="text-center">
              <h2 class="mt-3 text-[22px] font-normal"> Break Time </h2>
            </div>
          </a>
        </div>
        <div class="mb-3">
          <Link to="/employee-attendance-list">
            <div class="card w-full w-96 shadow-xl p-7 hover:bg-fuchsia-900">
              <figure>
                <img
                  src="../frontend/images/attendance.webp"
                  alt="AMBAR" class="w-full" />
              </figure>
            </div>
            <div class="text-center">
              <h2 class="mt-3 text-[22px] font-normal"> Attendance </h2>
            </div>
          </Link>
        </div>
        <div class="mb-3">
          <a href="leaveListByEmployee.html">
            <div class="card w-full w-96 shadow-xl p-7 hover:bg-fuchsia-900">
              <figure>
                <img
                  src="../frontend/images/leave.webp"
                  alt="AMBAR" class="w-full" />
              </figure>
            </div>
            <div class="text-center">
              <h2 class="mt-3 text-[22px] font-normal"> Leave </h2>
            </div>
          </a>
        </div>
        <div class="mb-3">
          <a href="attendanceList.html">
            <div class="card w-full w-96 shadow-xl p-7 hover:bg-fuchsia-900">
              <figure>
                <img
                  src="../frontend/images/holiday.webp"
                  alt="AMBAR" class="w-full" />
              </figure>
            </div>
            <div class="text-center">
              <h2 class="mt-3 text-[22px] font-normal"> Holiday </h2>
            </div>
          </a>
        </div>
        <div class="mb-3">
          <a href="attendanceList.html">
            <div class="card w-full w-96 shadow-xl p-7 hover:bg-fuchsia-900">
              <figure>
                <img
                  src="../frontend/images/lunch-time.webp"
                  alt="AMBAR" class="w-full" />
              </figure>
            </div>
            <div class="text-center">
              <h2 class="mt-3 text-[22px] font-normal"> Lunch </h2>
            </div>
          </a>
        </div>
        <div class="mb-3">
          <a href="attendanceList.html">
            <div class="card w-full w-96 shadow-xl p-7 hover:bg-fuchsia-900">
              <figure>
                <img
                  src="../frontend/images/reimbursement.webp"
                  alt="AMBAR" class="w-full" />
              </figure>
            </div>
            <div class="text-center">
              <h2 class="mt-3 text-[22px] font-normal"> Reimbursement </h2>
            </div>
          </a>
        </div>
        <div class="mb-3">
          <a href="attendanceList.html">
            <div class="card w-full w-96 shadow-xl p-7 hover:bg-fuchsia-900">
              <figure>
                <img
                  src="../frontend/images/birthday-cake.webp"
                  alt="AMBAR" class="w-full" />
              </figure>
            </div>
            <div class="text-center">
              <h2 class="mt-3 text-[22px] font-normal"> Birthday </h2>
            </div>
          </a>
        </div>
        <div class="mb-3">
          <a href="userProfile.html">
            <div class="card w-full w-96 shadow-xl p-7 hover:bg-fuchsia-900">
              <figure>
                <img
                  src="../frontend/images/male.webp"
                  alt="AMBAR" class="w-full" />
              </figure>
            </div>
            <div class="text-center">
              <h2 class="mt-3 text-[22px] font-normal"> Profile </h2>
            </div>
          </a>
        </div>
      </div>
    </div>
</section>
        </>
    )
  }


  export default Dashboard;