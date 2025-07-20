const terminals1 = document.getElementById("terminal1");
const terminals2 = document.getElementById("terminal2");
const terminals3 = document.getElementById("terminal3");
const terminals4 = document.getElementById("terminal4");
const terminals5 = document.getElementById("terminal5");
const terminals6 = document.getElementById("terminal6");
const terminals7 = document.getElementById("terminal7");

const phase1Messages = [
  "Phase 1: Initial Access & Reconnaissance",
  "Initializing attack sequence...",
  "Bypassing firewall...",
  "Locating vulnerable ports...",
  "Port 22 (SSH) - Access Attempt...",
  "Port 80 (HTTP) - Exploiting Weak Credentials...",
  "Brute-forcing admin login...",
  "Session hijack in progress...",
  "Establishing persistent backdoor...",
  "Root access obtained.",
];

const phase2Messages = [
    "Phase 2: System Infiltration",
    "Enumerating user directories...",
    "Accessing /home/user/Documents...",
    "Searching for sensitive files...",
    "Password files detected...",
    "Extracting browser saved passwords...",
    "Decrypting stored credentials...",
    "Reading email backups...",
    "Accessing cryptocurrency wallets...",
    "Checking SSH keys...",
    "Dumping RAM for cached passwords...",
];
const phase3Messages = [
    "Phase 3: Data Exfiltration",
    "Compressing stolen data...",
    "Exfiltrating documents via encrypted tunnel...",
    "Uploading to dark web server...",
    "Sending passwords to command & control...",
    "Copying financial records...",
    "Harvesting browser cookies...",
    "Stealing autofill data...",
    "Exporting contact lists...",
    "Mirroring entire hard drive...",
    "Backing up stolen data to cloud storage...",
];
const phase4Messages = [
    "Phase 4: Privilege Escalation & Persistence",
    "Escalating to admin privileges...",
    "Modifying system logs...",
    "Disabling antivirus...",
    "Installing keylogger...",
    "Injecting malicious cron job...",
    'Adding user "backdoor"...',
    "Setting up reverse shell...",
    "Enabling remote desktop access...",
    "Tampering with system binaries...",
    "Patching security updates to prevent fixes...",
];
const phase5Messages = [
    "Phase 5: Covering Tracks",
    "Clearing bash history...",
    "Wiping temporary files...",
    "Deleting download cache...",
    "Overwriting disk sectors...",
    "Falsifying timestamps...",
    "Erasing intrusion logs...",
    "Disabling security alerts...",
    "Removing evidence of malware...",
    "Restoring original permissions...",
    "Final cleanup in progress...",
];
const bonusMessages = [
    "Your bank account is being accessed...",
    "Injecting ransomware payload...",
    "Activating webcam...",
    "Recording microphone input...",
    "Checking social media logins...",
    "Searching for nude photos...",
    "Accessing private messages...",
    "Selling your data on black market...",
    "Preparing doxxing report...",
    "Threatening email drafted...",
];
const finalPhaseMessages = [
    "Finalizing data transfer...",
    "Locking original user out...",
    "Deploying secondary payload...",
    "All data successfully stolen.",
    "Hack complete.",
    "This device is now compromised.",
    "Good luck.",
    ":)",
    "Closing connection...",
    "Exiting...",
];
    
  

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const showMessage = async (messages, terminals) => {
  let lastdotspan = null;
  for (const message of messages) {
    if (lastdotspan) {
      lastdotspan.classList.remove("blinking-dots");
      lastdotspan.textContent = "";
    }
    const line = document.createElement("div");
    line.classList.add("message");

    if (message.endsWith("...")) {
      line.innerHTML =
        message.replace("...", "") + '<span class="blinking-dots"></span>';
      lastdotspan = line.querySelector(".blinking-dots");
    } else {
      line.textContent = message;
      lastdotspan = null;
    }

    terminals.appendChild(line);

      const delay = Math.floor(Math.random() * 1 + 2) * 1000;
    await sleep(delay);
  }
};

const startAttackSequence = async () => {
    await showMessage(phase1Messages, terminals1);
    await showMessage(phase2Messages, terminals2);
    await showMessage(phase3Messages, terminals3);
    await showMessage(phase4Messages, terminals4);
    await showMessage(phase5Messages, terminals5);
    await showMessage(bonusMessages, terminals6);
    await showMessage(finalPhaseMessages, terminals7);
}

startAttackSequence()
