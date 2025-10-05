

const VersionUpdate = () =>{
    return(
        <>
<div class="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-6">
  <div class="max-w-3xl w-full bg-white shadow-2xl rounded-2xl p-8 space-y-8">
    <div class="text-center">
      <h1 class="text-3xl font-bold text-gray-900">AMBAR – Version 2.0</h1>
      <p class="text-gray-500 mt-2">Released on October 2025</p>
    </div>

    <div class="border-t border-gray-200 pt-6 space-y-6">
      <div>
        <h2 class="text-xl font-semibold text-indigo-600">✨ New Features</h2>
        <ul class="mt-2 list-disc list-inside text-gray-700 space-y-1">
          <li>Smart Attendance Tracking with QR Scan</li>
          <li>Profile management with role-based access</li>
          <li>New report formats with export to PDF/Excel</li>
        </ul>
      </div>

      <div>
        <h2 class="text-xl font-semibold text-green-600">⚡ Improvements</h2>
        <ul class="mt-2 list-disc list-inside text-gray-700 space-y-1">
          <li>Faster dashboard loading time</li>
          <li>Improved mobile responsiveness</li>
          <li>Enhanced leave approval workflow</li>
        </ul>
      </div>

      <div>
        <h2 class="text-xl font-semibold text-red-600">🐞 Bug Fixes</h2>
        <ul class="mt-2 list-disc list-inside text-gray-700 space-y-1">
          <li>Fixed issue with late entry logs</li>
          <li>Resolved salary slip PDF download bug</li>
          <li>Corrected timezone mismatch in reports</li>
        </ul>
      </div>
    </div>

    {/* <div class="pt-6 text-center">
      <button class="px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold shadow-md hover:bg-indigo-700 transition">
        Update Now
      </button>
      <p class="mt-3 text-sm text-gray-500">Your app will restart after update.</p>
    </div> */}
  </div>
</div>
        </>
    )
}

export default VersionUpdate;