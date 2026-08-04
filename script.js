// Interactive Script for 404 Diagnostics & Portfolio Utility

document.addEventListener('DOMContentLoaded', () => {
    const scanBtn = document.getElementById('scan-btn');
    const terminalOutput = document.getElementById('terminal-output');

    if (scanBtn && terminalOutput) {
        scanBtn.addEventListener('click', () => {
            scanBtn.disabled = true;
            scanBtn.classList.add('opacity-50', 'cursor-not-allowed');
            
            terminalOutput.innerHTML = `<span class="text-yellow-400">[i] Initializing integrity scan across system logs...</span>`;

            setTimeout(() => {
                terminalOutput.innerHTML += `<br><span class="text-emerald-400">[+] Verifying cryptographic signatures... OK</span>`;
            }, 800);

            setTimeout(() => {
                terminalOutput.innerHTML += `<br><span class="text-emerald-400">[+] Checking educational checksums (Virginia Tech BS/MIT)... Valid</span>`;
            }, 1600);

            setTimeout(() => {
                terminalOutput.innerHTML += `<br><span class="text-emerald-400">[✓] Diagnostic complete. System secure. Redirecting options available.</span><span class="animate-pulse">_</span>`;
                scanBtn.disabled = false;
                scanBtn.classList.remove('opacity-50', 'cursor-not-allowed');
                scanBtn.innerHTML = `<i class="fa-solid fa-check mr-2 text-emerald-400"></i> Scan Complete`;
            }, 2400);
        });
    }
});
