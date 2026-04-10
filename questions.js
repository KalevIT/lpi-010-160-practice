// ============================================================
//  LPI Linux Essentials 010-160 — questions.js  v2.0
//  Sources:
//    'pdf' → directly derived from official LPI Learning Material v1.6
//    'ext' → External questions, validated against PDF
//  Question types:
//    (default / omitted) → single-choice MCQ  (a: number)
//    'multi'             → multiple-choice     (a: number[])
//    'fill'              → type the answer     (fill: string[])
// ============================================================

// ── Utilities ─────────────────────────────────────────────────
function shuffle(arr){
  const a=[...arr];
  for(let i=a.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}

function formatQ(text){
  if(!text)return'';
  return text
    .replace(/`([^`]+)`/g,'<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>')
    .replace(/\n/g,'<br>');
}

// ── Metadata ──────────────────────────────────────────────────
const TOPIC_NAMES={
  1:'Topic 1 · Open Source',
  2:'Topic 2 · Navigation',
  3:'Topic 3 · CLI Power',
  4:'Topic 4 · Linux OS',
  5:'Topic 5 · Security'
};
const TOPIC_COLORS={
  1:{bg:'#E3F2FD',fg:'#1565C0',border:'#90CAF9'},
  2:{bg:'#E8F5E9',fg:'#1B5E20',border:'#A5D6A7'},
  3:{bg:'#FFF3E0',fg:'#E65100',border:'#FFCC80'},
  4:{bg:'#F3E5F5',fg:'#6A1B9A',border:'#CE93D8'},
  5:{bg:'#FCE4EC',fg:'#880E4F',border:'#F48FB1'}
};
const SECTION_NAMES={
  '1.1':'Linux Evolution and Popular Operating Systems',
  '1.2':'Major Open Source Applications',
  '1.3':'Open Source Software and Licensing',
  '1.4':'ICT Skills and Working in Linux',
  '2.1':'Command Line Basics',
  '2.2':'Using the Command Line to Get Help',
  '2.3':'Using Directories and Listing Files',
  '2.4':'Creating, Moving and Deleting Files',
  '3.1':'Archiving Files on the Command Line',
  '3.2':'Searching and Extracting Data from Files',
  '3.3':'Turning Commands into a Script',
  '4.1':'Choosing an Operating System',
  '4.2':'Understanding Computer Hardware',
  '4.3':'Where Data is Stored',
  '4.4':'Your Computer on the Network',
  '5.1':'Basic Security and Identifying User Types',
  '5.2':'Creating Users and Groups',
  '5.3':'Managing File Permissions and Ownership',
  '5.4':'Special Directories and Files'
};

// ── Question Bank ─────────────────────────────────────────────
const Q=[

// ══════════════════════════════════════════════════════
//  TOPIC 1 — THE LINUX COMMUNITY AND OPEN SOURCE
// ══════════════════════════════════════════════════════

// --- 1.1 Linux Evolution ---
{q:'Who started the Linux kernel in 1991?',
 o:['Richard Stallman','Ian Murdock','Linus Torvalds','Mark Shuttleworth'],
 a:2,t:1,s:'1.1',src:'pdf',
 e:'Linux was started in **1991 by Linus Torvalds**, inspired by Unix. It was designed to run on the x86 platform, affordable at the time.'},

{q:'What is a Linux distribution?',
 o:['A set of patches to the Linux kernel only','A bundling of the Linux kernel, system utilities and other software','An operating system incompatible with the Linux kernel','The rules governing distribution of Linux source code'],
 a:1,t:1,s:'1.1',src:'ext',
 e:'PDF 1.1: A Linux distribution is a **bundle** consisting of a Linux kernel plus applications maintained by a company or user community, optimised for a specific use case.'},

{q:'Which package format is used by Debian-based distributions?',
 o:['RPM (.rpm)','DEB (.deb)','TAR (.tar)','TGZ (.tgz)'],
 a:1,t:1,s:'1.1',src:'pdf',
 e:'Debian-based distros (Debian, Ubuntu, Linux Mint) use the **DEB** package format managed by `dpkg`, `apt-get`, and `apt`.'},

{q:'Members of a team have Red Hat Enterprise Linux experience. For a free hobby server project, which distribution maximises their knowledge reuse?',
 o:['Raspbian','Debian GNU/Linux','openSUSE','CentOS'],
 a:3,t:1,s:'1.1',src:'ext',
 e:'PDF 1.1: **CentOS** is a free rebuild of RHEL source code. It uses the same RPM packaging, same tools (yum/dnf), same directory structure — maximum knowledge transfer from RHEL.'},

{q:'Where is the operating system of a Raspberry Pi stored?',
 o:['On built-in flash storage','On a removable SD card','On a read-only firmware partition','On an IDE bus master device'],
 a:1,t:1,s:'1.1',src:'ext',
 e:'PDF 1.1: The Raspberry Pi **boots from an SD memory card** — it has no internal hard disk. Raspbian (Raspberry Pi OS) is written to and loaded from the SD card.'},

{q:'Which company acquired Red Hat in 2019?',
 o:['Oracle','Microsoft','IBM','Google'],
 a:2,t:1,s:'1.1',src:'pdf',
 e:'**IBM** acquired Red Hat in 2019. Red Hat Enterprise Linux (RHEL) remains a commercial subscription-based distribution supported by Red Hat (now an IBM subsidiary).'},

{q:'Which distributions should be chosen for a server that needs security updates over several years? (Choose two.)',
 o:['Fedora Linux','Ubuntu Linux LTS','Debian GNU/Linux Unstable','Ubuntu Linux non-LTS','Red Hat Enterprise Linux'],
 a:[1,4],t:1,s:'1.1',src:'ext',type:'multi',
 e:'PDF 1.1: **Ubuntu LTS** (5-year support) and **Red Hat Enterprise Linux** (up to 10-year support) are designed for long-term stability with extended security updates. Fedora and non-LTS Ubuntu have short 9-month cycles.'},

{q:'How is a new Linux instance provisioned in an IaaS cloud?',
 o:['Running the standard Linux installer via remote console','The cloud hosting organisation provides pre-prepared images of popular distributions','Uploading a provider-specific configuration file','Copying a local virtual machine to the cloud'],
 a:1,t:1,s:'1.1',src:'ext',
 e:'PDF 1.1: IaaS providers offer **pre-prepared images** of popular Linux distributions. Users choose an image and a new instance is provisioned within minutes.'},

{q:'Android is based on:',
 o:['A modified version of the Linux kernel','The BSD kernel','The Windows NT kernel','A proprietary Google kernel'],
 a:0,t:1,s:'1.1',src:'pdf',
 e:'PDF 1.1: Android is based on a **modified Linux kernel** plus additional open-source software. Google acquired Android Inc. in 2005.'},

{q:'What is the Raspberry Pi\'s primary processor architecture?',
 o:['x86','x86-64','ARM','MIPS'],
 a:2,t:1,s:'1.1',src:'pdf',
 e:'PDF 1.1: The Raspberry Pi uses **ARM processors** and boots from an SD card. It was designed by the Raspberry Pi Foundation as an educational computing platform.'},

{q:'As of 2017 reports, what percentage of public cloud workload does Linux run?',
 o:['50%','75%','80%','90%'],
 a:3,t:1,s:'1.1',src:'pdf',
 e:'PDF 1.1: As of 2017 reports, Linux runs **90%** of the public cloud workload. Every major cloud provider offers Linux-based virtual machines.'},

{q:'What does IaaS stand for?',
 o:['Internet as a Service','Infrastructure as a Service','Integration as a Service','Information as a Service'],
 a:1,t:1,s:'1.1',src:'pdf',
 e:'PDF 1.1: **Infrastructure as a Service** — virtual machines and computing resources provisioned on-demand from a cloud provider. Linux is mostly offered as IaaS.'},

{q:'Which distribution is known for its YaST configuration tool?',
 o:['Ubuntu','Fedora','openSUSE / SUSE','Debian'],
 a:2,t:1,s:'1.1',src:'pdf',
 e:'PDF 1.1: **SUSE** and its free version **openSUSE** are best known for the **YaST** (Yet another Setup Tool) for software, hardware, server and network configuration.'},

{q:'What does LTS stand for in Ubuntu LTS?',
 o:['Linux Terminal Support','Long-Term Support','Latest Technology Standard','Licensed Technical Software'],
 a:1,t:1,s:'1.1',src:'pdf',
 e:'**LTS = Long-Term Support**. Ubuntu LTS releases are supported for 5 years (vs 9 months for standard releases). Released every 2 years.'},

// --- 1.2 Major Open Source Applications ---
{q:'Which command installs a package on a Debian/Ubuntu system?',
 o:['`yum install package`','`apt-get install package`','`rpm -i package`','`dnf install package`'],
 a:1,t:1,s:'1.2',src:'pdf',
 e:'On DEB-based systems, `apt-get install package` or `apt install package` installs software. `yum`, `dnf`, `rpm` are for Red Hat-based systems.'},

{q:'Which package management tool is used in Red Hat-based Linux systems?',
 o:['apt-get','dpkg','rpm','portage'],
 a:2,t:1,s:'1.2',src:'ext',
 e:'PDF 1.2: **rpm** (and `yum`/`dnf`) are used in Red Hat-based systems. `dpkg` and `apt-get` are Debian tools. `portage` is Gentoo\'s tool.'},

{q:'Which application from LibreOffice works with electronic spreadsheets?',
 o:['LibreOffice Writer','LibreOffice Impress','LibreOffice Calc','LibreOffice Draw'],
 a:2,t:1,s:'1.2',src:'pdf',
 e:'PDF 1.2 Answer: **LibreOffice Calc** handles spreadsheets. Writer = text editor, Impress = presentations, Draw = vector graphics, Math = formulas, Base = database.'},

{q:'Which open-source browser is the basis for Google Chrome?',
 o:['Firefox','Chromium','Opera','Brave'],
 a:1,t:1,s:'1.2',src:'pdf',
 e:'PDF 1.2 Answer: **Chromium** is the open-source project on which Google Chrome is based. It can be installed from distribution repositories.'},

{q:'Which program is a graphical editor for vector graphics?',
 o:['NGINX','Python','MySQL','Inkscape'],
 a:3,t:1,s:'1.2',src:'ext',
 e:'PDF 1.2: **Inkscape** is the most popular open-source editor for SVG vector graphics. GIMP handles bitmap images. NGINX is a web server.'},

{q:'Which software package allows file sharing between Linux and Windows machines?',
 o:['NFS','Samba','Apache','OpenSSH'],
 a:1,t:1,s:'1.2',src:'pdf',
 e:'PDF 1.2 Answer: **Samba** implements the Windows file-sharing protocol (SMB/CIFS). It also enables printer sharing. NFS is Linux-to-Linux only.'},

{q:'Which command removes a DEB package AND its configuration files?',
 o:['`apt-get remove package`','`apt-get purge package`','`dpkg -r package`','`apt-get clean package`'],
 a:1,t:1,s:'1.2',src:'pdf',
 e:'PDF 1.2 Explorational Answer: `apt-get purge package` removes the package **and** its configuration files. `remove` keeps config files for potential reinstallation.'},

{q:'Which programs are web servers? (Choose two.)',
 o:['Postfix','Apache','Curl','Dovecot','NGINX'],
 a:[1,4],t:1,s:'1.2',src:'ext',type:'multi',
 e:'PDF 1.2: **Apache** (HTTPD) and **NGINX** are the most popular open-source HTTP web servers. Postfix is an email server, Dovecot is IMAP/POP3, Curl is a CLI download tool.'},

{q:'Which command-line tool converts image files (e.g. TIFF to JPEG) from the terminal?',
 o:['GIMP','Inkscape','ImageMagick','Blender'],
 a:2,t:1,s:'1.2',src:'pdf',
 e:'PDF 1.2 Answer: **ImageMagick** is a command-line tool that converts and edits image files. Useful for batch processing: `convert image.tiff image.jpg`.'},

{q:'The most common open-source relational databases on Linux are:',
 o:['MySQL and MongoDB','MariaDB and PostgreSQL','SQLite and Redis','Oracle and DB2'],
 a:1,t:1,s:'1.2',src:'pdf',
 e:'PDF 1.2: **MariaDB** (originated from MySQL) and **PostgreSQL** are the most popular open-source relational databases, storing data in predefined tables.'},

// --- 1.3 Licensing ---
{q:'What is defined by a Free Software license?',
 o:['Conditions for modifying and distributing the licensed software','A list of required libraries to compile the software','A complete technical documentation each contributor provides','The programming languages allowed to extend the program'],
 a:0,t:1,s:'1.3',src:'ext',
 e:'PDF 1.3: A Free Software license defines the **conditions** under which the software may be modified and distributed. It does not specify libraries or languages.'},

{q:'What does "freedom 0" mean in Richard Stallman\'s Four Freedoms?',
 o:['Freedom to distribute the software','Freedom to run the software','Freedom to study the source code','Freedom to distribute modified software'],
 a:1,t:1,s:'1.3',src:'pdf',
 e:'PDF 1.3 Answer: Freedom 0 = **run** the software. Freedom 1 = study/modify. Freedom 2 = distribute. Freedom 3 = distribute modifications.'},

{q:'FLOSS stands for:',
 o:['Free Linux Open Source Software','Free/Libre Open Source Software','Federated Linux Operating System Standard','Free and Licensed Open Source Software'],
 a:1,t:1,s:'1.3',src:'pdf',
 e:'PDF 1.3 Answer: **FLOSS = Free/Libre Open Source Software**. "Libre" distinguishes "free as in freedom" from "free as in free of charge".'},

{q:'You want to ensure all future versions of your software remain free. Which license do you choose?',
 o:['CC BY','2-Clause BSD License','Apache License 2.0','GPL version 3'],
 a:3,t:1,s:'1.3',src:'pdf',
 e:'PDF 1.3 Answer: **GPL version 3** is a copyleft license requiring all derivatives to also be released under the same license — ensuring perpetual software freedom.'},

{q:'Which license is PERMISSIVE (not copyleft)?',
 o:['GPL version 3','CC BY-SA','Simplified BSD License','AGPL'],
 a:2,t:1,s:'1.3',src:'pdf',
 e:'PDF 1.3 Answer: **Simplified BSD License** is permissive — allows proprietary derivatives. GPL v3, CC BY-SA, and AGPL are all copyleft licenses.'},

{q:'What is true about Free Software?',
 o:['It is developed by volunteers only','It must always be available free of charge','It may be modified by anyone using it','It only runs on Linux'],
 a:2,t:1,s:'1.3',src:'ext',
 e:'PDF 1.3: Free Software **may be modified by anyone** using it — this is Freedom 1. It can be commercial; it can run on any OS; it can have paid versions.'},

{q:'Wikipedia articles (English) are licensed under:',
 o:['GPL version 3','Apache License 2.0','Creative Commons Attribution ShareAlike (CC-BY-SA)','MIT License'],
 a:2,t:1,s:'1.3',src:'pdf',
 e:'PDF 1.3 Explorational Answer: Wikipedia content uses **CC-BY-SA** (Creative Commons Attribution ShareAlike) — a copyleft license requiring attribution and same-license derivatives.'},

// --- 1.4 ICT Skills ---
{q:'You should use a private browser window if you want to:',
 o:['Browse completely anonymously on the Internet','Leave no trace on the computer you are using','Activate TLS to avoid cookie tracking','Use cryptography during data transmission'],
 a:1,t:1,s:'1.4',src:'pdf',
 e:'PDF 1.4 Answer: Private windows leave **no trace on the local computer** (no history, no stored cookies) but do NOT make you anonymous on the Internet.'},

{q:'What are the differences between a private and regular web browser window? (Choose three.)',
 o:['Private windows do not allow printing or storing websites','Private windows do not store cookies persistently','Private windows do not support website logins','Private windows do not keep records in browser history','Private windows do not send regular stored cookies'],
 a:[1,3,4],t:1,s:'1.4',src:'ext',type:'multi',
 e:'PDF 1.4: Private windows (1) do not store cookies persistently, (2) do not record browsing history, (3) do not send existing cookies from regular sessions.'},

{q:'What is OpenStack?',
 o:['A project for creating private IaaS','A project for creating private PaaS','A hypervisor','An open-source password manager'],
 a:0,t:1,s:'1.4',src:'pdf',
 e:'PDF 1.4 Answer: **OpenStack** enables the creation of private **IaaS** (Infrastructure as a Service) cloud environments.'},

{q:'Which of the following are valid disk encryption tools on Linux?',
 o:['RevealJS and EncFS','dm-crypt and KeePass','EncFS and dm-crypt','TLS and dm-crypt'],
 a:2,t:1,s:'1.4',src:'pdf',
 e:'PDF 1.4 Answer: **EncFS** (stack/filesystem encryption) and **dm-crypt** (block device encryption) are both valid disk encryption tools. KeePass is a password manager; TLS is a transport protocol.'},

{q:'Beamer is:',
 o:['A disk encryption mechanism','A hypervisor','A virtualization software','A LaTeX presentation tool'],
 a:3,t:1,s:'1.4',src:'pdf',
 e:'PDF 1.4 Answer: **Beamer** is a **LaTeX** package for creating presentations using code. Other code-based alternatives include RevealJS.'},

{q:'Why are web browser cookies considered dangerous?',
 o:['Cookies store critical data which is lost when deleted','Cookies are always public and accessible to anyone','Cookies support identification and tracking of users','Cookies can contain and execute viruses'],
 a:2,t:1,s:'1.4',src:'ext',
 e:'PDF 1.4: Cookies can be used for **user identification and tracking** across websites. They store session data that third parties may use to profile users.'},

{q:'Which are typical services offered by public cloud providers? (Choose three.)',
 o:['Internet as a Service (IaaS)','Graphics as a Service (GaaS)','Platform as a Service (PaaS)','Infrastructure as a Service (IaaS)','Software as a Service (SaaS)'],
 a:[2,3,4],t:1,s:'1.4',src:'ext',type:'multi',
 e:'PDF 1.1/1.4: Standard cloud service models are **IaaS** (virtual machines), **PaaS** (development platforms), and **SaaS** (hosted applications). "Internet as a Service" and "GaaS" are not real cloud models.'},

// --- Fill-in Topic 1 ---
{q:'What command installs a package on a **Red Hat/Fedora** system? (type the command name only)',
 fill:['yum','dnf','yum install','dnf install'],
 t:1,s:'1.2',src:'pdf',type:'fill',
 e:'On Red Hat/Fedora/CentOS, `yum install package` or `dnf install package` (newer systems) installs packages from the RPM repository.'},

{q:'The command that removes a Debian package AND its configuration files is `apt-get ___`. (fill in the option)',
 fill:['purge','purge package','apt-get purge'],
 t:1,s:'1.2',src:'pdf',type:'fill',
 e:'`apt-get purge package` removes the package and its configuration files. `remove` only removes the package but keeps config files.'},

// ══════════════════════════════════════════════════════
//  TOPIC 2 — FINDING YOUR WAY ON A LINUX SYSTEM
// ══════════════════════════════════════════════════════

// --- 2.1 Command Line Basics ---
{q:'In the command `ls -l /etc`, which part is the argument?',
 o:['-l','/etc','ls','ls -l'],
 a:1,t:2,s:'2.1',src:'pdf',
 e:'PDF 2.1 Answer: The command is `ls`, the option is `-l`, and the **argument** is `/etc` (what the command acts on).'},

{q:'Which character in a shell prompt indicates the shell is running with root privileges?',
 o:['*','&','$','#'],
 a:3,t:2,s:'2.1',src:'ext',
 e:'PDF 5.1: **`#`** at the end of a prompt indicates a root (superuser) shell. **`$`** indicates a regular user shell. This is a universally understood standard.'},

{q:'What is the purpose of the PATH environment variable?',
 o:['It allows command execution without knowing the full path to the executable','It increases security by blocking commands in certain locations','It specifies the user\'s home directory','It contains the absolute path to the current directory'],
 a:0,t:2,s:'2.1',src:'ext',
 e:'PDF 2.1/4.3: **PATH** is a colon-separated list of directories searched for executable programs. It allows running `ls` instead of `/bin/ls`.'},

{q:'Which command sets the variable USERNAME to the value bob?',
 o:['set USERNAME bob','$USERNAME==bob','var USERNAME=bob','USERNAME=bob'],
 a:3,t:2,s:'2.1',src:'ext',
 e:'PDF 2.1: **`USERNAME=bob`** (no spaces around `=`) creates a shell variable. Spaces around `=` cause a syntax error in Bash.'},

{q:'Which command makes a variable available to child processes (environment variable)?',
 o:['`set VARNAME=value`','`export VARNAME`','`env VARNAME`','`local VARNAME`'],
 a:1,t:2,s:'2.1',src:'pdf',
 e:'`export VARNAME` (or `export VARNAME=value`) promotes a local variable to an **environment variable**, accessible by child processes.'},

{q:'The following command is used to execute `script.sh`: `MYVAR=value ./script.sh`. The script uses `$MYVAR` but gets an empty line. How should MYVAR be set?',
 o:['!MYVAR=value','env MYVAR=value','MYVAR=value','export MYVAR=value'],
 a:3,t:2,s:'2.1',src:'ext',
 e:'PDF 2.1/3.3: **`export MYVAR=value`** makes MYVAR an environment variable visible to the child script process. Without `export`, the variable is local to the current shell.'},

{q:'Which command adds the directory /new/dir/ to the PATH environment variable?',
 o:['export PATH=/new/dir: PATH','PATH=/new/dir: PATH','export $PATH=/new/dir: $PATH','export PATH=/new/dir:$PATH'],
 a:3,t:2,s:'2.1',src:'ext',
 e:'PDF 2.1: `export PATH=/new/dir:$PATH` — note: `$PATH` (with dollar sign) references the current value. No dollar sign before `PATH` on the left side of assignment.'},

{q:'What is the output of `echo \'$HOME\'`?',
 o:['The actual home directory path','$HOME (literal text)','An error','Nothing — empty output'],
 a:1,t:2,s:'2.1',src:'pdf',
 e:'PDF 2.1: **Single quotes** prevent ALL expansion. `\'$HOME\'` prints the literal string `$HOME`. Double quotes would expand `$HOME` to the actual path.'},

{q:'When typing a long command at the shell, what single character splits it across multiple lines?',
 o:['/','|','\\','&'],
 a:2,t:2,s:'2.1',src:'ext',
 e:'PDF 2.1: A **backslash `\\`** at the end of a line escapes the newline character, allowing the command to continue on the next line.'},

{q:'`cd` is a shell builtin. What does this mean compared to external commands like `cat`?',
 o:['It runs faster because it is compiled differently','It is part of the shell itself, not a separate program file','It cannot accept options or arguments','It can only be used by root'],
 a:1,t:2,s:'2.1',src:'pdf',
 e:'PDF 2.1 Answer: Shell **builtins** (`cd`, `exit`, `echo`) are part of the shell itself. External commands (`cat`, `ls`, `cp`) are separate program files found in PATH.'},

// --- 2.2 Help ---
{q:'Which two commands give information on the proper use of `ls`? (Choose two.)',
 o:['option ls','info ls','usage ls','manual ls','man ls'],
 a:[1,4],t:2,s:'2.2',src:'ext',type:'multi',
 e:'PDF 2.2 Answer: **`man ls`** (manual page) and **`info ls`** (GNU info page) both provide documentation on the `ls` command. `ls --help` also works.'},

{q:'Most Linux commands display usage help with which option?',
 o:['By running with /?','By running with -h or --help','By running with /doc','By running with -m'],
 a:1,t:2,s:'2.2',src:'ext',
 e:'PDF 2.2: The standard convention on Linux is **`-h`** or **`--help`** for a quick usage summary. Full documentation is in `man` pages.'},

{q:'Which command shows the absolute path to a command\'s executable binary?',
 o:['`find`','`type`','`which`','`locate`'],
 a:2,t:2,s:'2.2',src:'pdf',
 e:'`which command` shows the **full path** to the executable. `type` classifies a command (builtin/alias/external). `locate` searches a database for any matching filename.'},

{q:'After creating a new file, what command must you run before `locate` can find it?',
 o:['`refresh locate`','`updatedb`','`sync`','`locate --update`'],
 a:1,t:2,s:'2.2',src:'pdf',
 e:'PDF 2.2 Answer: **`updatedb`** rebuilds the locate database. The database is usually updated daily by cron automatically.'},

{q:'Which directory contains documentation and example config files for installed packages?',
 o:['/usr/share/doc/','/etc/defaults/','/var/info/','/doc/'],
 a:0,t:2,s:'2.2',src:'ext',
 e:'PDF 2.2: **/usr/share/doc/** contains documentation, changelogs, and example configuration files for installed software packages.'},

{q:'Which command searches for `foo.txt` under the `/home` directory?',
 o:['find /home – file foo.txt','find /home -name foo.txt','find /home foo.txt','search /home -file foo.txt'],
 a:1,t:2,s:'2.2',src:'ext',
 e:'PDF 2.2: **`find /home -name foo.txt`** is correct. The `-name` option specifies the filename pattern. `find` searches the filesystem in real time.'},

// --- 2.3 Directories ---
{q:'Which path is an ABSOLUTE path?',
 o:['../Documents','./scripts/run.sh','/home/user/Documents','Documents/reports'],
 a:2,t:2,s:'2.3',src:'pdf',
 e:'An **absolute path** starts from root `/`. Relative paths start from the current directory (`.` or `..`). Only `/home/user/Documents` is absolute.'},

{q:'Which command displays the current working directory?',
 o:['`ls`','`cd`','`pwd`','`dir`'],
 a:2,t:2,s:'2.3',src:'ext',
 e:'PDF 2.3: **`pwd`** (print working directory) shows the absolute path of the current directory.'},

{q:'A user is in `/home/user/Downloads/` and runs `ls ../Documents/`. Which directory is listed?',
 o:['/home/user/Documents/Downloads/','/home/user/Documents/','/home/user/Downloads/Documents/','/Documents/'],
 a:1,t:2,s:'2.3',src:'ext',
 e:'PDF 2.3: `..` moves up one level from `/home/user/Downloads/` to `/home/user/`. Then `Documents/` references `/home/user/Documents/`.'},

{q:'Which `ls` option shows hidden files (dotfiles)?',
 o:['`ls -l`','`ls -h`','`ls -a`','`ls -d`'],
 a:2,t:2,s:'2.3',src:'pdf',
 e:'`ls -a` shows **all** files including hidden ones (files starting with `.`). `-l` = long format, `-h` = human-readable sizes, `-d` = show directory itself.'},

{q:'What is true about a recursive directory listing?',
 o:['It includes ownership information','It includes filesystem internals like inodes','It includes a content preview for each file','It includes the content of subdirectories'],
 a:3,t:2,s:'2.3',src:'ext',
 e:'PDF 2.3: A **recursive listing** (`ls -R`) descends into subdirectories and lists their contents, showing the complete directory tree.'},

{q:'What does `~` represent in a path?',
 o:['The root directory','The current directory','The user\'s home directory','A hidden file marker'],
 a:2,t:2,s:'2.3',src:'pdf',
 e:'`~` is shorthand for the **home directory** (`$HOME`). `~/Documents` expands to `/home/username/Documents`.'},

{q:'What does `..` represent in a path?',
 o:['The current directory','The parent directory','The root directory','The home directory'],
 a:1,t:2,s:'2.3',src:'pdf',
 e:'`..` = **parent directory** (one level up). `.` = current directory. `~` = home. `/` = root.'},

// --- 2.4 Creating/Moving/Deleting ---
{q:'Which command creates a directory including all missing parent directories?',
 o:['`mkdir -p /path/to/dir`','`mkdir -r /path/to/dir`','`mkdir -a /path/to/dir`','`mkdir /path/to/dir`'],
 a:0,t:2,s:'2.4',src:'pdf',
 e:'`mkdir -p` creates the target directory and any **missing parent** directories in the path. Without `-p`, mkdir fails if the parent doesn\'t exist.'},

{q:'Running `rm Downloads` gives: "rm: cannot remove \'Downloads/\': Is a directory". Which commands can remove Downloads if it is EMPTY? (Choose two.)',
 o:['rmdir Downloads','rem Downloads','rm -r Downloads','dir -r Downloads','undir Downloads'],
 a:[0,2],t:2,s:'2.4',src:'ext',type:'multi',
 e:'PDF 2.4 Answer: **`rmdir Downloads`** removes an empty directory. **`rm -r Downloads`** removes a directory and all its contents recursively (works empty or not).'},

{q:'Which glob pattern copies only `.txt` files to `/tmp/`?',
 o:['cp .\\.txt /tmp/','cp *.txt /tmp/','cp ?.txt /tmp/','cp $?.txt /tmp/'],
 a:1,t:2,s:'2.4',src:'ext',
 e:'PDF 2.4: **`*.txt`** matches any filename ending in `.txt`. The `*` wildcard matches zero or more characters. `?` matches exactly one character.'},

{q:'What does `-v` do for `mkdir`, `rm`, and `cp`?',
 o:['Validates the operation','Shows verbose output listing files being processed','Creates a backup first','Applies to all files in the directory'],
 a:1,t:2,s:'2.4',src:'pdf',
 e:'PDF 2.4 Answer: `-v` (verbose) makes commands **print** each file/directory being created, removed, or copied — useful to verify operations.'},

{q:'Which glob pattern matches `fileA.txt` and `file1.txt` but NOT `file10.txt`?',
 o:['`file*.txt`','`file[A-Za-z0-9].txt`','`file?.txt`','`file[0-9].txt`'],
 a:2,t:2,s:'2.4',src:'pdf',
 e:'`?` matches **exactly one** character. `file?.txt` matches filenames with exactly one character between `file` and `.txt`. `file10.txt` has two characters.'},

{q:'Which command copies the contents of `/etc/`, including all subdirectories, to `/root/`?',
 o:['copy /etc /root','cp -r /etc/* /root','cp -v /etc/* /root','cp -R /etc/*.* /root'],
 a:1,t:2,s:'2.4',src:'ext',
 e:'PDF 2.4: **`cp -r /etc/* /root`** recursively copies all files and directories inside `/etc/` to `/root/`.'},

{q:'Which of the following outputs the content of the file "Texts 2.txt"? (Choose two.)',
 o:["cat 'Texts 2.txt'","cat -- Texts 2.txt","cat |Texts 2.txt|","cat 'Texts\\ 2.txt'","cat Texts\\ 2.txt"],
 a:[0,4],t:2,s:'2.4',src:'ext',type:'multi',
 e:'PDF 2.1 (quoting): Filenames with spaces need quoting or escaping: **`cat \'Texts 2.txt\'`** (single quotes) or **`cat Texts\\ 2.txt`** (backslash-escaped space).'},

// --- Fill-in Topic 2 ---
{q:'What parameter of `ls` prints a **recursive** listing of directory contents? (specify only the option)',
 fill:['-R','ls -R'],
 t:2,s:'2.3',src:'ext',type:'fill',
 e:'**`-R`** (capital R) is the recursive option for `ls`. Example: `ls -R /home` lists all files and directories recursively.'},

{q:'What command shows the absolute path to the current working directory? (one word)',
 fill:['pwd'],
 t:2,s:'2.3',src:'ext',type:'fill',
 e:'**`pwd`** — print working directory. Shows the full absolute path of the directory you are currently in.'},

{q:'To search for all files named `passwd` in the entire filesystem, type the complete command:',
 fill:['find / -name passwd','find / -name "passwd"'],
 t:2,s:'2.2',src:'pdf',type:'fill',
 e:'`find / -name passwd` searches from root `/` downward for any file named exactly `passwd`.'},

{q:'What single character splits a long shell command across multiple lines? (type the character)',
 fill:['\\'],
 t:2,s:'2.1',src:'ext',type:'fill',
 e:'A **backslash** `\\` at the end of a line escapes the newline, allowing the command to continue on the next line.'},

{q:'What command displays the manual page for `ls`? (one word)',
 fill:['man ls','man'],
 t:2,s:'2.2',src:'ext',type:'fill',
 e:'**`man ls`** opens the manual page for `ls`. `man` stands for "manual".'},

// ══════════════════════════════════════════════════════
//  TOPIC 3 — THE POWER OF THE COMMAND LINE
// ══════════════════════════════════════════════════════

// --- 3.1 Archiving ---
{q:'Which `tar` options handle compression? (Choose two.)',
 o:['-z','-g','-z2','-bz','-j'],
 a:[0,4],t:3,s:'3.1',src:'ext',type:'multi',
 e:'PDF 3.1: **`-z`** uses gzip compression (`.tar.gz`/`.tgz`). **`-j`** uses bzip2 compression (`.tar.bz2`). `-g` is incremental backup mode.'},

{q:'Which command creates an archive `work.tar` from the directory `./work/`?',
 o:['tar work > work.tar','tar work.tar < ./work/','tar --new work.tar ./work/','tar -cf work.tar ./work/'],
 a:3,t:3,s:'3.1',src:'ext',
 e:'PDF 3.1: **`tar -cf work.tar ./work/`** — `c` = create, `f` = specify filename. The archive name comes first, then the source.'},

{q:'Which command extracts the contents of `file1.tar.gz`?',
 o:['tar -czf file1.tar.gz','ztar file1.tar.gz','tar -xzf file1.tar.gz','tar --extract file1.tar.gz'],
 a:2,t:3,s:'3.1',src:'ext',
 e:'PDF 3.1: **`tar -xzf file1.tar.gz`** — `x` = extract, `z` = gzip, `f` = filename. For bzip2 use `-j` instead of `-z`.'},

{q:'A file named `archive.tar.xz` was created with which tools?',
 o:['Only tar','Only xz','tar and bzip2','tar and xz'],
 a:3,t:3,s:'3.1',src:'pdf',
 e:'PDF 3.1 Answer: `.tar` = archived with **tar**. `.xz` = compressed with **xz**. Both tools were used.'},

{q:'A file `.tar.bz2` is:',
 o:['Only archived (not compressed)','Both archived AND compressed','Only compressed (not archived)','An encrypted file'],
 a:1,t:3,s:'3.1',src:'pdf',
 e:'PDF 3.1: `.tar` = archive (tar). `.bz2` = bzip2 compression. A `.tar.bz2` file is **both archived AND compressed**.'},

{q:'Which zip compression level stores files with NO compression?',
 o:['-1','-0','-9','-6'],
 a:1,t:3,s:'3.1',src:'pdf',
 e:'PDF 3.1 Answer: **`-0`** = store only (no compression). `-1` = fastest compression (least reduction). `-9` = best compression (slowest). Default is `-6`.'},

{q:'Which command creates a ZIP archive `poems.zip` from all `.txt` files in the current directory?',
 o:['zip *.txt > poems.zip','zcat *.txt poems.zip','zip poems.zip *.txt','cat *.txt | zip poems.zip'],
 a:2,t:3,s:'3.1',src:'ext',
 e:'PDF 3.1: **`zip poems.zip *.txt`** — the zip archive name comes first, then the files to include. `zip poems.zip *.txt`'},

{q:'What happens when you extract a tar archive and a file already exists on the filesystem?',
 o:['The extraction aborts','A backup is created first','The existing file is overwritten','An error is displayed and the file is skipped'],
 a:2,t:3,s:'3.1',src:'pdf',
 e:'PDF 3.1 Answer: The **existing file is overwritten** with the version from the archive without warning.'},

{q:'Which tar option prevents stripping the leading `/` from absolute paths?',
 o:['--no-strip','--absolute-names (-P)','--preserve','--full-path'],
 a:1,t:3,s:'3.1',src:'pdf',
 e:'PDF 3.1 Answer: **`-P`** or **`--absolute-names`** tells tar not to strip the leading `/` from absolute paths when creating archives.'},

// --- 3.2 I/O Redirection & Grep ---
{q:'Which operator redirects standard output to a file, OVERWRITING its contents?',
 o:['>>','<','>','2>'],
 a:2,t:3,s:'3.2',src:'pdf',
 e:'`>` redirects stdout and **overwrites** the file. `>>` appends. `<` redirects stdin. `2>` redirects stderr (channel 2).'},

{q:'Which operator APPENDS standard output to an existing file?',
 o:['>','>>','2>','&>'],
 a:1,t:3,s:'3.2',src:'pdf',
 e:'`>>` **appends** to the file without overwriting. Creates the file if it does not exist, just like `>`.'},

{q:'Which command sorts the output of the command `export-logs`?',
 o:['export-logs < sort','export-logs & sort','export-logs <> sort','export-logs | sort','export-logs > sort'],
 a:3,t:3,s:'3.2',src:'ext',
 e:'PDF 3.2: The **pipe** `|` connects stdout of one command to stdin of the next. `export-logs | sort` passes the output of `export-logs` to `sort`.'},

{q:'What is `/dev/null` used for?',
 o:['A null pointer in memory','A bit bucket — discards all data written to it','The null filesystem mount point','Testing I/O without actual hardware'],
 a:1,t:3,s:'3.2',src:'pdf',
 e:'`/dev/null` is the **bit bucket** — accepts all input and discards it silently. Redirecting to it suppresses output: `command 2>/dev/null`.'},

{q:'Which command finds all lines in `operating-systems.txt` containing "linux", case-insensitive?',
 o:['igrep linux operating-systems.txt','less -i linux operating-systems.txt','grep -i linux operating-systems.txt','cut linux operating-systems.txt'],
 a:2,t:3,s:'3.2',src:'ext',
 e:'PDF 3.2: **`grep -i`** performs case-**i**nsensitive matching. `-v` inverts matches, `-n` shows line numbers, `-r` searches recursively.'},

{q:'Which command puts the lines of `data.csv` into alphabetical order?',
 o:['a..z data.csv','sort data.csv','abc data.csv','grep --sort data.csv'],
 a:1,t:3,s:'3.2',src:'ext',
 e:'PDF 3.2: **`sort`** sorts lines alphabetically by default. `sort -n` for numeric, `sort -r` for reverse, `sort -u` removes duplicates.'},

{q:'What does `^` mean at the start of a regex pattern?',
 o:['Match end of line','Match beginning of line','Match any character','Negate the pattern'],
 a:1,t:3,s:'3.2',src:'pdf',
 e:'PDF 3.2: **`^`** anchors the pattern to the **beginning of a line**. `$` anchors to the end. `^root` matches lines that START with "root".'},

{q:'What does the regular expression `[A-Za-z]*` match?',
 o:['Exactly one letter','One or more letters','Zero or more letters (upper or lowercase)','Any character zero or more times'],
 a:2,t:3,s:'3.2',src:'pdf',
 e:'PDF 3.2: `[A-Za-z]` matches one letter. `*` = zero or more. Together: **zero or more letters** of either case.'},

{q:'Which operator in a regex matches the preceding character zero OR one time?',
 o:['?','*','+','$'],
 a:0,t:3,s:'3.2',src:'ext',
 e:'PDF 3.2: **`?`** matches the preceding character **0 or 1 time**. `*` = 0 or more. `+` = 1 or more. `.` = any single character.'},

{q:'Which command shows only the first 10 lines of a file?',
 o:['`tail file`','`head file`','`less -10 file`','`cat -10 file`'],
 a:1,t:3,s:'3.2',src:'pdf',
 e:'`head file` = first **10 lines** (default). `head -n 20 file` = first 20. `tail` shows the LAST lines. `less` is a full pager.'},

{q:'What does `tail -f /var/log/syslog` do?',
 o:['Shows the first 10 lines then stops','Shows the last 10 lines then stops','Shows last 10 lines and continues displaying new lines as they appear','Searches for the word "tail" in the log'],
 a:2,t:3,s:'3.2',src:'pdf',
 e:'`tail -f` (**follow**) shows the last 10 lines and **continuously updates** as new lines are written to the file. Press Ctrl+C to stop.'},

{q:'Which command counts the number of lines in a file?',
 o:['`count file`','`wc -l file`','`lines file`','`nl file`'],
 a:1,t:3,s:'3.2',src:'pdf',
 e:'`wc -l file` counts **lines**. `wc -w` = words, `wc -c` = bytes/characters. `nl` adds line numbers to output without counting.'},

// --- 3.3 Scripts ---
{q:'Given that `test.sh` is a valid shell script, how can it be executed? (Choose two.)',
 o:['bash test.sh','${test.sh}','cmd ./test.sh','./test.sh','run test.sh'],
 a:[0,3],t:3,s:'3.3',src:'ext',type:'multi',
 e:'PDF 3.3: **`bash test.sh`** runs it via the bash interpreter. **`./test.sh`** runs it directly (requires execute permission and a valid shebang). `run` and `cmd` are not Linux commands.'},

{q:'A script runs `./test.sh` but gets "Permission denied". What should be done?',
 o:['Change the extension from .sh to .bin','Run using #!./test.sh','Set the execute bit in the file\'s permissions','Add the user to the exec group'],
 a:2,t:3,s:'3.3',src:'ext',
 e:'PDF 3.3: **`chmod +x test.sh`** sets the execute permission bit. Without it, the script cannot be run directly with `./`.'},

{q:'What is the return value (exit code) of a shell script after successful execution?',
 o:['1','0','-1','255'],
 a:1,t:3,s:'3.3',src:'ext',
 e:'PDF 3.3: Exit code **0** = success. Non-zero = failure. `echo $?` shows the exit code of the last command.'},

{q:'Which of these are true about a typical shell script? (Choose two.)',
 o:['It has the executable permission bit set','It starts with the two-character sequence #!','It is located in /usr/local/scripts/','It is compiled into a binary file','It is located in /etc/bash/scripts/'],
 a:[0,1],t:3,s:'3.3',src:'ext',type:'multi',
 e:'PDF 3.3: Shell scripts typically (1) have the **execute bit** set (`chmod +x`) and (2) start with a **shebang** `#!/bin/bash` that specifies the interpreter.'},

{q:'What keyword begins a loop in a shell script?',
 o:['while','do','loop','for'],
 a:3,t:3,s:'3.3',src:'ext',
 e:'PDF 3.3 Fill-in Answer: **`for`** is the keyword that begins a for loop. Syntax: `for var in list; do commands; done`. `while` also starts loops but the canonical LPI answer for "loop keyword" is `for`.'},

{q:'What is the correct structure of a `for` loop in Bash?',
 o:['for *.txt as file => echo $file','for *.txt ( echo $i )','for file in *.txt; do echo $i; done','foreach @{file} { echo $i }'],
 a:2,t:3,s:'3.3',src:'ext',
 e:'PDF 3.3: Bash `for` loop: **`for variable in list; do commands; done`**. The keywords are `for`, `in`, `do`, and `done`.'},

{q:'In a Bash script, `$1` refers to:',
 o:['The script name','The first argument passed to the script','The exit code of the last command','The process ID'],
 a:1,t:3,s:'3.3',src:'pdf',
 e:'`$1` = **first positional argument**. `$0` = script name, `$2` = second arg, `$#` = number of args, `$@` = all args, `$?` = last exit code.'},

{q:'What does `$?` contain?',
 o:['All script arguments','The script\'s PID','The exit code of the last command','The number of arguments'],
 a:2,t:3,s:'3.3',src:'pdf',
 e:'PDF 3.3: **`$?`** contains the **exit code of the last executed command**. 0 = success, non-zero = failure.'},

{q:'`export MYVAR=value` vs `MYVAR=value` — what is the key difference?',
 o:['export is faster','export makes the variable visible to child processes','export makes the variable read-only','There is no difference'],
 a:1,t:3,s:'3.3',src:'pdf',
 e:'PDF 3.3: **`export`** makes the variable an environment variable, inherited by **child processes** (like scripts called from the current shell). Without it, the variable is local to the current shell.'},

{q:'What does `echo -n "Hello"` do differently from `echo "Hello"`?',
 o:['Suppresses all output','Adds an extra newline','Suppresses the trailing newline','Echoes to stderr'],
 a:2,t:3,s:'3.3',src:'pdf',
 e:'PDF 3.3: `echo -n` **suppresses the trailing newline**, so the next output appears on the same line. Useful for building output progressively.'},

// --- Fill-in Topic 3 ---
{q:'What is the `tar` option to **create** a new archive? (specify only the single letter option)',
 fill:['c','-c','cf','-cf'],
 t:3,s:'3.1',src:'pdf',type:'fill',
 e:'**`c`** = create archive. Full example: `tar -czf archive.tar.gz files/`. The key options: c=create, x=extract, t=list, f=file.'},

{q:'What `tar` option **extracts** files from an archive? (single letter)',
 fill:['x','-x'],
 t:3,s:'3.1',src:'pdf',type:'fill',
 e:'**`x`** = extract. `tar xf archive.tar` extracts the archive. Essential options: c=create, **x=extract**, t=list, f=file.'},

{q:'Which command decompresses a `.gz` file from the command line? (one word, no options)',
 fill:['gunzip'],
 t:3,s:'3.1',src:'pdf',type:'fill',
 e:'**`gunzip file.gz`** decompresses a gzip-compressed file. Equivalent to `gzip -d file.gz`. The result is `file` (without .gz).'},

{q:'The command that redirects stderr (file descriptor 2) to a file is: `command ___ errorfile`. (fill in the redirect operator)',
 fill:['2>','2>>'],
 t:3,s:'3.2',src:'pdf',type:'fill',
 e:'**`2>`** redirects stderr (standard error, channel 2) to a file. `command 2>errors.txt` captures error messages. `2>>` appends.'},

{q:'To make a Bash script `myscript.sh` executable, what `chmod` command would you use?',
 fill:['chmod +x myscript.sh','chmod u+x myscript.sh','chmod 755 myscript.sh'],
 t:3,s:'3.3',src:'pdf',type:'fill',
 e:'**`chmod +x myscript.sh`** adds execute permission for all users. `chmod u+x` for owner only. `chmod 755` gives rwxr-xr-x.'},

{q:'What is the shebang line that specifies Bash as the interpreter for a script? (full line)',
 fill:['#!/bin/bash','#! /bin/bash'],
 t:3,s:'3.3',src:'pdf',type:'fill',
 e:'**`#!/bin/bash`** — the shebang (`#!`) followed by the interpreter path. It must be the first line of the script.'},

// ══════════════════════════════════════════════════════
//  TOPIC 4 — THE LINUX OPERATING SYSTEM
// ══════════════════════════════════════════════════════

// --- 4.1 OS Choice ---
{q:'Key difference between Debian GNU/Linux and Ubuntu:',
 o:['Debian uses RPM, Ubuntu uses DEB','Ubuntu is easier for beginners; Debian is more stable with fewer but well-tested updates','Debian releases every 6 months; Ubuntu every 2 years','They use completely different kernels'],
 a:1,t:4,s:'4.1',src:'pdf',
 e:'PDF 4.1 Answer: Ubuntu is recommended for **beginners** (easier setup). Debian is more **stable** (fewer, more thoroughly tested updates). Both are DEB-based.'},

// --- 4.2 Hardware ---
{q:'What are the differences between HDDs and SSDs? (Choose two.)',
 o:['HDDs cannot fail due to physical damage','SSDs store many times more data than HDDs','/dev/sda is HDD while /dev/ssda is SSD','SSDs provide faster access to data','HDDs have a motor and moving parts; SSDs do not'],
 a:[3,4],t:4,s:'4.2',src:'ext',type:'multi',
 e:'PDF 4.2: SSDs are **3-5x faster** than HDDs (no moving parts, random access). HDDs have **motors and moving magnetic disks**. Both can fail. SSD naming is NOT /dev/ssda.'},

{q:'Which type of bus connects hard disk drives to the motherboard?',
 o:['The RAM bus','The NUMA bus','The Auto bus','The SATA bus'],
 a:3,t:4,s:'4.2',src:'ext',
 e:'PDF 4.2: **SATA** (Serial AT Attachment) and SCSI are the interfaces for connecting storage devices to the motherboard.'},

{q:'What is the device file for partition 3 of the third SATA drive?',
 o:['sd3p3','sdcp3','sdc3','sda3c'],
 a:2,t:4,s:'4.2',src:'pdf',
 e:'PDF 4.2: Drive letters: a=1st, b=2nd, **c=3rd**. Partition numbers: 1, 2, **3**. So third drive, third partition = **`sdc3``.'},

{q:'Which device represents a hard disk partition?',
 o:['/dev/ttyS0','/dev/sata0','/dev/part0','/dev/sda2'],
 a:3,t:4,s:'4.2',src:'ext',
 e:'PDF 4.2: **`/dev/sda2`** = second partition of the first SATA drive. `/dev/ttyS0` = serial port. Device files follow the `sd[a-z][0-9]` naming convention.'},

{q:'Which statement about Linux hardware drivers is correct?',
 o:['Drivers are run by the user wanting to use a device','The BIOS handles all hardware access, drivers are not used','Drivers are stored on devices and copied when attached','Drivers are either compiled into the Linux kernel or loaded as kernel modules'],
 a:3,t:4,s:'4.2',src:'ext',
 e:'PDF 4.2: Linux drivers are either **compiled into the kernel** (built-in) or loaded as **loadable kernel modules** (`.ko` files) when needed.'},

{q:'GPU stands for:',
 o:['General Processing Unit','General Purpose Utility','Graphical Processing Unit','Group Process Unit'],
 a:2,t:4,s:'4.2',src:'pdf',
 e:'PDF 4.2 Answer: **GPU = Graphical Processing Unit** — optimised for graphics/video rendering. CPU = Central Processing Unit for general tasks.'},

{q:'Which command lists block devices available on the system?',
 o:['`lsdev`','`lsblk`','`blkls`','`fdisk -l`'],
 a:1,t:4,s:'4.2',src:'pdf',
 e:'`lsblk` (**list block devices**) shows a tree of block devices (disks and their partitions), filesystem types, and mount points.'},

// --- 4.3 Data Storage ---
{q:'What can be found in the `/proc/` directory?',
 o:['One directory per installed program','One file per existing user account','One directory per running process','One log file per running service'],
 a:2,t:4,s:'4.3',src:'ext',
 e:'PDF 4.3: `/proc/` is a **virtual filesystem** containing **one numbered subdirectory per running process** (PID). `/proc/1` = systemd/init, `/proc/887` = top, etc.'},

{q:'What information can be displayed by `top`?',
 o:['User accounts ordered by number of files','Running processes ordered by CPU or RAM consumption','User groups ordered by number of members','Existing files ordered by their size'],
 a:1,t:4,s:'4.3',src:'ext',
 e:'PDF 4.3: **`top`** provides a dynamic real-time view of running processes, sortable by CPU%, memory%, or other criteria.'},

{q:'Which output comes from the command `free`?',
 o:['21:04 up 14 days, 3 users, load average: 0.89','avg-cpu: %user %system %idle','Filesystem Size Used Avail Use% Mounted on\n/dev/nvme0n1p2 468G 33G 412G 8% /','total used free shared buff/cache available\nMem: 15Gi 2.3Gi 9Gi 910Mi 3.0Gi 11Gi\nSwap: 2.0Gi 0B 2.0Gi'],
 a:3,t:4,s:'4.3',src:'ext',
 e:'PDF 4.3: **`free`** displays RAM and swap usage: total, used, free, shared, buff/cache, and available memory. The `Gi` suffix = gibibytes.'},

{q:'What is true about the `dmesg` command? (Choose two.)',
 o:['It might not display older information because it was overwritten by newer information','It sends messages to all current user sessions','It traces execution of a command step by step','It displays the content of the Linux kernel\'s ring buffer','It outputs all new messages written to the system journal'],
 a:[0,3],t:4,s:'4.3',src:'ext',type:'multi',
 e:'PDF 4.3: `dmesg` displays the **kernel ring buffer** (a fixed-size circular buffer). Old messages may be **overwritten** by newer ones as the buffer fills.'},

{q:'Which output could come from the command `last`?',
 o:['1 ls\n 2 cat text.txt','Password for user changed at Sat Mar 31','Last login: Fri Mar 23 from server.example.com','EXT4-fs(dm7): mounted filesystem','root tty2 Wed May 17 21:11 - 21:11 (00:00)'],
 a:4,t:4,s:'4.3',src:'ext',
 e:'PDF 4.3/5.1: **`last`** shows a list of past login sessions. The format is: user, terminal (tty), source/host, login time, logout time, duration.'},

{q:'Which directory stores the Linux kernel and boot-related files?',
 o:['/etc','/var','/boot','/sbin'],
 a:2,t:4,s:'4.3',src:'pdf',
 e:'`/boot` contains the **kernel** (`vmlinuz-*`), initial RAM disk (`initrd.img-*`), system map, and GRUB bootloader configuration.'},

{q:'Where are log files typically stored?',
 o:['/tmp/log','/proc/log','/var/log','/etc/log'],
 a:2,t:4,s:'4.3',src:'pdf',
 e:'Log files are in **`/var/log`** because logs are variable data. Examples: `/var/log/auth.log`, `/var/log/syslog`, `/var/log/kern.log`.'},

{q:'Which command prints the kernel ring buffer?',
 o:['`syslog`','`journalctl`','`dmesg`','`uname -a`'],
 a:2,t:4,s:'4.3',src:'pdf',
 e:'**`dmesg`** prints the kernel ring buffer — messages produced during and after boot. `journalctl -k` shows the same in systemd systems.'},

{q:'Which utility reads systemd\'s journal database?',
 o:['`syslogd`','`logrotate`','`journalctl`','`dmesg`'],
 a:2,t:4,s:'4.3',src:'pdf',
 e:'**`journalctl`** reads systemd\'s binary journal. Options: `-k` (kernel), `-b` (boot), `-f` (follow), `-u service` (unit/service).'},

{q:'Which directory must be mounted with read/write access if it resides on its own filesystem?',
 o:['/opt','/lib','/etc','/var'],
 a:3,t:4,s:'4.3',src:'ext',
 e:'PDF 4.3: **/var** contains variable data (logs, spools, databases) that is constantly written to. It must be read/write. `/etc`, `/lib`, `/usr` can be read-only.'},

{q:'What is the first process started on a Linux system (PID 1)?',
 o:['bash','syslog','systemd','cron'],
 a:2,t:4,s:'4.3',src:'pdf',
 e:'PDF 4.3: **`systemd`** is PID 1 on modern Linux systems. It is the init system and service manager that starts all other processes. Older systems used SysV init (`/sbin/init`).'},

{q:'System-wide Bash configuration is stored in:',
 o:['/home/.bashrc','/etc/profile','/boot/bash.conf','/proc/sys/bash'],
 a:1,t:4,s:'4.3',src:'pdf',
 e:'**`/etc/profile`** (and `/etc/bash.bashrc`) are system-wide Bash init files. User-specific config is in `~/.bashrc` and `~/.profile` (dotfiles).'},

// --- 4.4 Networking ---
{q:'Which command can resolve a DNS name to an IP address?',
 o:['dnsname','query','dns','host'],
 a:3,t:4,s:'4.4',src:'ext',
 e:'PDF 4.4: **`host`** resolves domain names to IP addresses. Other DNS tools include `dig`, `nslookup`. `ping` also resolves names but its primary use is connectivity testing.'},

{q:'Which DNS record types hold an IP address? (Choose two.)',
 o:['NS','AAAA','MX','A','CNAME'],
 a:[1,3],t:4,s:'4.4',src:'ext',type:'multi',
 e:'PDF 4.4: **A** records hold IPv4 addresses. **AAAA** records hold IPv6 addresses. NS = nameserver, MX = mail server, CNAME = canonical name alias.'},

{q:'Which protocol is used for automatic IP address configuration?',
 o:['NFS','LDAP','SMTP','DHCP'],
 a:3,t:4,s:'4.4',src:'ext',
 e:'PDF 4.4: **DHCP** (Dynamic Host Configuration Protocol) automatically assigns IP addresses, subnet masks, default gateways, and DNS server addresses to network devices.'},

{q:'Reverse DNS assigns hostnames to IP addresses. How is 198.51.100.165 stored on a DNS server?',
 o:['In the A record for 165.100.51.198.ipv4.arpa.','In the REV record for arpa.in-addr.198.51.100.165.','In the RNAME record for 198-51-100-165.rev.arpa.','In the PTR record for 165.100.51.198.in-addr.arpa.'],
 a:3,t:4,s:'4.4',src:'ext',
 e:'PDF 4.4: Reverse DNS uses **PTR records** in the `in-addr.arpa.` zone. The IP is reversed: 198.51.100.165 → PTR record at `165.100.51.198.in-addr.arpa.`'},

{q:'Which command shows the current IP address configuration of network interfaces?',
 o:['`netstat`','`ping`','`ip addr`','`route`'],
 a:2,t:4,s:'4.4',src:'pdf',
 e:'**`ip addr`** (or `ip a`) displays IP address configuration for all interfaces. The older `ifconfig` command is deprecated on modern systems.'},

{q:'What is the loopback IP address?',
 o:['192.168.0.1','10.0.0.1','127.0.0.1','172.16.0.1'],
 a:2,t:4,s:'4.4',src:'pdf',
 e:'**127.0.0.1** (localhost) is the loopback address for communication within the same host. Associated with interface `lo`. Never leaves the machine.'},

{q:'Which file provides local hostname-to-IP mapping, checked before DNS?',
 o:['/etc/hosts','/etc/dns.conf','/etc/resolv.conf','/etc/nameserver'],
 a:0,t:4,s:'4.4',src:'pdf',
 e:'**`/etc/hosts`** maps hostnames to IP addresses locally. It is checked before DNS. Useful for custom resolution, blocking, or testing.'},

{q:'Which file specifies which DNS servers to use for resolution?',
 o:['/etc/hosts','/etc/dns.conf','/etc/resolv.conf','/etc/nameserver'],
 a:2,t:4,s:'4.4',src:'pdf',
 e:'**`/etc/resolv.conf`** is the resolver configuration file, specifying `nameserver` IP addresses for DNS lookups.'},

{q:'Which private IPv4 address ranges are reserved? (Choose two.)',
 o:['100.64.0.0/10','10.0.0.0/8','198.18.0.0/15','192.168.0.0/16','8.8.0.0/16'],
 a:[1,3],t:4,s:'4.4',src:'pdf',type:'multi',
 e:'PDF 4.4: The RFC 1918 private ranges are **10.0.0.0/8**, 172.16.0.0/12, and **192.168.0.0/16**. These cannot be routed on the public internet.'},

{q:'What does CIDR notation `192.168.0.1/24` mean?',
 o:['The host has address 192.168.0.1 and 24 ports are open','The network mask has 24 bits set to 1 (255.255.255.0)','The address belongs to VLAN 24','There are 24 hosts in the network'],
 a:1,t:4,s:'4.4',src:'pdf',
 e:'PDF 4.4: CIDR (Classless Inter-Domain Routing) notation `/24` means **24 bits are set to 1 in the subnet mask** = 255.255.255.0. The network ranges from 192.168.0.0 to 192.168.0.255.'},

{q:'MAC addresses are used at which network layer?',
 o:['Network layer (routing)','Application layer','Link layer (directly connected devices)','Transport layer'],
 a:2,t:4,s:'4.4',src:'pdf',
 e:'PDF 4.4: **MAC** (Media Access Control) addresses are **link layer** addresses identifying devices on the same network segment. They cannot be used to route across networks.'},

// --- Fill-in Topic 4 ---
{q:'What command shows the routing table? (type the full command)',
 fill:['ip route show','ip route','ip route show','route'],
 t:4,s:'4.4',src:'pdf',type:'fill',
 e:'**`ip route show`** displays the IPv4 routing table. The older command `route` also works. The default gateway is labeled `default via X.X.X.X`.'},

{q:'What command shows the kernel ring buffer (boot messages)? (one word)',
 fill:['dmesg'],
 t:4,s:'4.3',src:'pdf',type:'fill',
 e:'**`dmesg`** prints the kernel ring buffer — all messages produced during and after boot. Useful for hardware/driver troubleshooting.'},

{q:'PID 1 on modern Linux systems is typically: (one word)',
 fill:['systemd','init'],
 t:4,s:'4.3',src:'pdf',type:'fill',
 e:'**`systemd`** is PID 1 on most modern Linux distributions. It is the init system and service manager. Older systems used SysV `init`.'},

// ══════════════════════════════════════════════════════
//  TOPIC 5 — SECURITY AND FILE PERMISSIONS
// ══════════════════════════════════════════════════════

// --- 5.1 Basic Security ---
{q:'What is the UID of the user root?',
 o:['255','0','1','-1'],
 a:1,t:5,s:'5.1',src:'ext',
 e:'PDF 5.1: **root always has UID 0**. System accounts have UIDs below 1000. Regular users start at UID 1000 by default.'},

{q:'What is true about the owner of a file?',
 o:['The user owning a file must be a member of the file\'s group','The owner of a file cannot be changed once assigned','Each file is owned by exactly one user and one group','The owner always has full permissions on the file'],
 a:2,t:5,s:'5.1',src:'ext',
 e:'PDF 5.1/5.3: In Linux, each file is owned by **exactly one user and one group**. Ownership can be changed with `chown`. The owner does not necessarily have full permissions.'},

{q:'What information is stored in `/etc/passwd`? (Choose three.)',
 o:['The user\'s default shell','The user\'s storage space limit','The username','The numerical user ID','The encrypted password'],
 a:[0,2,3],t:5,s:'5.1',src:'ext',type:'multi',
 e:'PDF 5.1/5.2: `/etc/passwd` stores: **username**, **UID**, primary GID, GECOS, home directory, and **default shell**. Password hashes are in `/etc/shadow` (shown as `x`).'},

{q:'Which files are the source of this output: `uid=1000(bob) gid=1000(bob) groups=1000(bob),10(wheel)`? (Choose two.)',
 o:['/etc/id','/etc/passwd','/etc/group','/home/index','/var/db/users'],
 a:[1,2],t:5,s:'5.1',src:'ext',type:'multi',
 e:'PDF 5.1: The `id` command gets UID/username from **`/etc/passwd`** and group memberships from **`/etc/group`**.'},

{q:'Which type of cryptography is used to store passwords locally on Linux?',
 o:['Asymmetric (RSA)','Symmetric (AES)','One-way hash','ROT13'],
 a:2,t:5,s:'5.1',src:'pdf',
 e:'PDF 5.1 Answer: Linux uses **one-way hash functions** (SHA-512 typically). The hash cannot be reversed — the entered password is hashed and compared to the stored hash.'},

{q:'Which statement concerning Linux passwords is true?',
 o:['All passwords can be decrypted using the admin\'s master password','Passwords may never start with a non-letter','Users cannot change their password once set','Passwords are only stored in hashed form'],
 a:3,t:5,s:'5.1',src:'ext',
 e:'PDF 5.1/5.2: **Passwords are stored as one-way hashes** in `/etc/shadow`. They cannot be decrypted. Any character can begin a password; users can change their own password.'},

{q:'Which command lists active logins AND system load averages?',
 o:['`who`','`last`','`w`','`id`'],
 a:2,t:5,s:'5.1',src:'pdf',
 e:'PDF 5.1 Answer: **`w`** shows active logins plus system uptime, load averages, and per-user CPU info. `who` shows logins only. `last` shows login history.'},

{q:'The format of each line in `/etc/passwd` is:',
 o:['USERNAME:UID:GID:PASSWORD:HOMEDIR:SHELL','USERNAME:PASSWORD:UID:GID:GECOS:HOMEDIR:SHELL','UID:GID:USERNAME:PASSWORD:HOMEDIR:SHELL','USERNAME:PASSWORD:GECOS:HOMEDIR:SHELL'],
 a:1,t:5,s:'5.1',src:'pdf',
 e:'PDF 5.2: Seven colon-delimited fields: **USERNAME:PASSWORD:UID:GID:GECOS:HOMEDIR:SHELL**. Password field shows `x` (actual hash in `/etc/shadow`).'},

{q:'What is true about the `su` command?',
 o:['It is the default shell of root','It can only be used by root','It runs a shell or command as another user','It changes the name of the main admin account'],
 a:2,t:5,s:'5.1',src:'ext',
 e:'PDF 5.1: **`su`** (switch user) runs a shell or command **as another user**. `su -` (with dash) switches to root with a full login environment.'},

{q:'Which files are NOT readable by regular unprivileged users?',
 o:['/etc/passwd and /etc/group','/etc/shadow and /etc/sudoers','/etc/hosts and /etc/resolv.conf','/etc/group and /etc/hosts'],
 a:1,t:5,s:'5.1',src:'pdf',
 e:'PDF 5.1 Answer: **`/etc/shadow`** (password hashes) and **`/etc/sudoers`** (sudo config) are NOT readable by regular users. `/etc/passwd` and `/etc/group` are world-readable.'},

{q:'How do you change the login shell to `/usr/bin/zsh` non-interactively?',
 o:['`chsh /usr/bin/zsh`','`chsh -s /usr/bin/zsh`','`usermod -s /usr/bin/zsh`','`passwd --shell /usr/bin/zsh`'],
 a:1,t:5,s:'5.1',src:'pdf',
 e:'PDF 5.1 Answer: **`chsh -s /usr/bin/zsh`** changes the login shell non-interactively. `-s` specifies the new shell path directly.'},

// --- 5.2 Users & Groups ---
{q:'Which command adds the new user `tux` and creates the user\'s home directory with default config files?',
 o:['useradd -m tux','defaultuser tux','useradd -o default tux','passwd -a tux'],
 a:0,t:5,s:'5.2',src:'ext',
 e:'PDF 5.2: **`useradd -m tux`** creates user `tux` with a home directory (`-m`). Without `-m`, no home directory is created unless configured in `/etc/login.defs`.'},

{q:'For each entry, identify the file it belongs to. Which file does `developer:x:1010:frank,grace,dave` come from?',
 o:['/etc/passwd','/etc/group','/etc/shadow','/etc/gshadow'],
 a:1,t:5,s:'5.2',src:'pdf',
 e:'PDF 5.2: This format (`Name:Password:GID:Members`) is from **`/etc/group`** — four colon-delimited fields for group information.'},

{q:'Which entry format belongs to `/etc/shadow`?',
 o:['developer:x:1010:frank,grace,dave','root:x:0:0:root:/root:/bin/bash','henry:$1$.AbCdEfGh:18015:20:90:5:30::','staff:!:dave:carol,emma'],
 a:2,t:5,s:'5.2',src:'pdf',
 e:'PDF 5.2: `/etc/shadow` format: `USERNAME:PASSWORDHASH:LASTCHANGE:MINAGE:MAXAGE:WARN:INACTIVE:EXPDATE:RESERVED`. The `$1$...$...` is a password hash.'},

{q:'In `/etc/shadow`, what does an `!` at the start of the password hash mean?',
 o:['The account has no password set','The account is locked (no authentication possible)','The password uses MD5','The account has expired'],
 a:1,t:5,s:'5.2',src:'pdf',
 e:'PDF 5.2: **`!`** (or `!!`) in the password field means the account is **locked** — authentication is impossible. `passwd -l username` locks; `passwd -u username` unlocks.'},

{q:'Which statements about `/etc/skel` are correct? (Choose two.)',
 o:['Personal settings of root are stored here','Files are copied to home directory when the system starts','Files are copied to the home directory of a new user when the account is created','It contains a default set of configuration files used by useradd','It contains global settings for the Linux system'],
 a:[2,3],t:5,s:'5.2',src:'ext',type:'multi',
 e:'PDF 5.2: `/etc/skel` contains files **copied to a new user\'s home directory at account creation** (when `useradd -m` is used). It defines the default home environment.'},

{q:'Which tasks can the `passwd` command accomplish? (Choose two.)',
 o:['Change a user\'s username','Change a user\'s password','Create a new user account','Create a new user group','Lock a user account'],
 a:[1,4],t:5,s:'5.2',src:'ext',type:'multi',
 e:'PDF 5.2: `passwd` can: **change password** (`passwd username`) and **lock/unlock** accounts (`passwd -l`/`passwd -u`). It cannot create users or groups.'},

{q:'Which command adds user `carol` with UID 1035, primary group `sys_admin`, and secondary groups `web_admin` and `db_admin`?',
 o:['useradd -u 1035 -g sys_admin -G web_admin,db_admin carol','useradd carol -u 1035 -primary sys_admin -secondary web_admin db_admin','useradd -u 1035 -G sys_admin,web_admin,db_admin carol','adduser carol 1035 sys_admin web_admin db_admin'],
 a:0,t:5,s:'5.2',src:'pdf',
 e:'PDF 5.2: `useradd -u UID -g primary_group -G secondary_group1,group2 username`. **`-g`** = primary group, **`-G`** = secondary groups (comma-separated).'},

{q:'In `/etc/shadow`, if the LASTCHANGE field (3rd field) is `0`, it means:',
 o:['The account was just created','The user must change their password at next login','The password never expires','The account is locked'],
 a:1,t:5,s:'5.2',src:'pdf',
 e:'PDF 5.2 Answer: **LASTCHANGE = 0** means the user **must change their password at next login**. Normal values are the number of days since the Unix epoch (Jan 1, 1970).'},

// --- 5.3 Permissions ---
{q:'Which permissions are set after `chmod 654 file.txt`?',
 o:['d-wxr-x--','drw-r-xr--','-rwxrw---x','-rw-r-xr--'],
 a:3,t:5,s:'5.3',src:'ext',
 e:'PDF 5.3: 6=rw- (4+2), 5=r-x (4+1), 4=r-- (4+0). Result: **`-rw-r-xr--`** — owner rw, group rx, others r.'},

{q:'Which permissions are set on the `/tmp/` directory?',
 o:['rwX','rwxrwxrwt','r-xr-X--t','rwSrw-rw-'],
 a:1,t:5,s:'5.3',src:'ext',
 e:'PDF 5.3/5.4: `/tmp` has permissions **`rwxrwxrwt`** — world-writable with the **sticky bit** (`t`), which prevents users from deleting others\' files.'},

{q:'The ownership of `doku.odt` should be changed to user `tux`. Which command does this?',
 o:['chmod u=tux doku.odt','newuser doku.odt tux','chown tux doku.odt','passwd doku.odt:tux'],
 a:2,t:5,s:'5.3',src:'ext',
 e:'PDF 5.3: **`chown tux doku.odt`** changes the file owner to `tux`. `chown tux:group file` changes both owner and group. `chmod` changes permissions, not ownership.'},

{q:'What does `chmod 754 file.txt` result in?',
 o:['rwxr-xr-x','rwxr-xr--','rw-r--r--','rwx--xr--'],
 a:1,t:5,s:'5.3',src:'pdf',
 e:'PDF 5.3: 7=rwx, 5=r-x, 4=r--. Result: **`rwxr-xr--`** — owner can read/write/execute, group can read/execute, others can only read.'},

{q:'What is the octal value of the **sticky bit** special permission?',
 o:['4','2','1','8'],
 a:2,t:5,s:'5.3',src:'pdf',
 e:'PDF 5.3: SUID=4, SGID=2, **Sticky bit=1**. Set sticky bit: `chmod 1755 dir` or `chmod +t dir`.'},

{q:'The sticky bit on a directory means:',
 o:['Files in the directory cannot be modified','Users can only delete files they own in that directory','Files are automatically compressed','The directory cannot be removed'],
 a:1,t:5,s:'5.3',src:'pdf',
 e:'PDF 5.3/5.4: The **sticky bit** on a directory prevents users from **deleting or renaming files they don\'t own**. Used on `/tmp` so users can\'t delete others\' temp files.'},

{q:'A file `test.sh` shows `-rwxr-sr-x`. What does the `s` in group position mean?',
 o:['SUID — runs with owner\'s privileges','SGID — runs with the group\'s privileges','Sticky bit','Symbolic link indicator'],
 a:1,t:5,s:'5.3',src:'pdf',
 e:'PDF 5.3 Answer: `s` in **group position** = **SGID** is set. The script runs with the **group\'s privileges**, not the executing user\'s group.'},

{q:'What happens to a file outside the home directory when the file owner\'s account is deleted? (Choose two.)',
 o:['During a filesystem check, the file is moved to /lost+found','The file is removed from the filesystem','The UID of the former owner is shown when listing file details','The user root is set as the new owner','Ownership and permissions of the file remain unchanged'],
 a:[2,4],t:5,s:'5.3',src:'ext',type:'multi',
 e:'PDF 5.2: When a user is deleted, files outside the home directory **remain unchanged** (ownership/permissions). The UID number (no longer mapped to a username) is **displayed** in `ls -l`.'},

{q:'What is the 4-digit numeric permission for `-rwxr-xr-t` (a directory with sticky bit, rwxr-xr-x)?',
 o:['0755','1755','2755','4755'],
 a:1,t:5,s:'5.3',src:'pdf',
 e:'PDF 5.3: Sticky bit = **1** (first digit). `rwx`=7, `r-x`=5, `r-t`=5 (sticky bit already counted separately). Result: **`1755`**.'},

{q:'To add execute for owner, and remove write/execute for group and others, in ONE `chmod` command:',
 o:['`chmod u+x go-wx file`','`chmod u+x,go-wx file`','`chmod 755 file`','`chmod +x-wx file`'],
 a:1,t:5,s:'5.3',src:'pdf',
 e:'PDF 5.3 Answer: **`chmod u+x,go-wx file`** — multiple changes separated by a **comma** in symbolic mode.'},

{q:'The first character `b` in `ls -l` output for `/dev/sdb1` indicates:',
 o:['Binary file','Block device','Broken symlink','Bash script'],
 a:1,t:5,s:'5.3',src:'pdf',
 e:'PDF 5.3 Answer: `b` = **block device** (storage). Other types: `-` = regular file, `d` = directory, `l` = symbolic link, `c` = character device.'},

// --- 5.4 Special Dirs & Links ---
{q:'Which temporary directory PERSISTS between reboots?',
 o:['/tmp','/run','/var/tmp','/dev/shm'],
 a:2,t:5,s:'5.4',src:'pdf',
 e:'PDF 5.4: **`/var/tmp`** should NOT be cleared at boot — files persist between reboots. `/tmp` and `/run` are cleared at boot per the FHS.'},

{q:'Which command creates a SYMBOLIC (soft) link?',
 o:['`ln target link`','`ln -s target link`','`link -s target link`','`symlink target link`'],
 a:1,t:5,s:'5.4',src:'pdf',
 e:'**`ln -s target link`** creates a symbolic link. Without `-s`, `ln` creates a **hard link**. Symbolic links can span filesystems; hard links cannot.'},

{q:'What is true about links in a Linux filesystem?',
 o:['A symbolic link can only point to a file, not a directory','A hard link can only point to a directory, never a file','When the symbolic link target is moved, the link auto-updates','A symbolic link can point to a file on another filesystem'],
 a:3,t:5,s:'5.4',src:'ext',
 e:'PDF 5.4 Answer: **Symbolic links can point to targets on different filesystems**. Hard links must be on the same filesystem. Symbolic links CAN point to directories.'},

{q:'What happens to a symbolic link when the target file is deleted?',
 o:['The link is automatically deleted','The link becomes a hard link','The link still exists but is broken (dangling)','The link creates a copy of the deleted file'],
 a:2,t:5,s:'5.4',src:'pdf',
 e:'PDF 5.4: A symbolic link **still exists** after the target is deleted, but becomes a **dangling/broken link** — it points to a non-existent path.'},

{q:'A hard link and the original file share the same:',
 o:['Filename','Permissions only','Inode (same physical data on disk)','Directory entry only'],
 a:2,t:5,s:'5.4',src:'pdf',
 e:'PDF 5.4: Hard links share the **same inode** — they point to the same physical data. Deleting one leaves the other intact. You can\'t tell which is "original".'},

{q:'The permissions on `/tmp` are `drwxrwxrwt`. Why can\'t users delete others\' files?',
 o:['Because /tmp is read-only for regular users','Because the sticky bit (`t`) prevents deleting files not owned by the user','Because /tmp uses ACLs','Because root ownership prevents deletion'],
 a:1,t:5,s:'5.4',src:'pdf',
 e:'PDF 5.4 Answer: The **sticky bit** (`t` replacing `x` for others) prevents users from deleting or renaming files they don\'t own in a world-writable directory like `/tmp`.'},

{q:'What is an inode?',
 o:['The first sector of a hard disk','A data structure storing file attributes and disk block locations','A network interface identifier','The root directory entry'],
 a:1,t:5,s:'5.4',src:'pdf',
 e:'PDF 5.4: An **inode** (index node) stores file metadata: permissions, ownership, timestamps, and **which disk blocks** hold the file\'s data. Directory entries map filenames to inodes.'},

{q:'Which restriction applies to hard links but NOT to symbolic links?',
 o:['Hard links cannot be deleted','Hard links must be on the same filesystem','Hard links cannot be created by regular users','Hard links cannot have spaces in their names'],
 a:1,t:5,s:'5.4',src:'pdf',
 e:'PDF 5.4: Hard links must reside on the **same filesystem** as the target. Symbolic links have no such restriction and can cross filesystems and point to directories.'},

// --- Fill-in Topic 5 ---
{q:'What command changes the permissions of `file.txt` to `rwxr-xr--` using numeric notation?',
 fill:['chmod 754 file.txt','chmod 754'],
 t:5,s:'5.3',src:'pdf',type:'fill',
 e:'**`chmod 754 file.txt`** — 7=rwx (4+2+1), 5=r-x (4+0+1), 4=r-- (4+0+0). Numeric mode sets exact permissions.'},

{q:'What command adds execute permission for the owner of `script.sh`? (symbolic notation)',
 fill:['chmod u+x script.sh','chmod u+x'],
 t:5,s:'5.3',src:'pdf',type:'fill',
 e:'**`chmod u+x script.sh`** — `u` = user/owner, `+` = add, `x` = execute. This does not affect group or other permissions.'},

{q:'To create a symbolic link named `mylink` pointing to `target.txt`, type the command:',
 fill:['ln -s target.txt mylink'],
 t:5,s:'5.4',src:'pdf',type:'fill',
 e:'**`ln -s target.txt mylink`** — `-s` makes it a symbolic (soft) link. Without `-s`, `ln` creates a hard link.'},

{q:'The command that removes a user account AND their home directory is: (fill the option)',
 fill:['userdel -r','userdel -r username'],
 t:5,s:'5.2',src:'pdf',type:'fill',
 e:'**`userdel -r username`** removes the account and the home directory. Without `-r`, only the account entry is removed; the home directory remains.'},

{q:'What command shows UID, GID, and group memberships for the current user? (one word)',
 fill:['id'],
 t:5,s:'5.1',src:'pdf',type:'fill',
 e:'**`id`** displays `uid=1000(user) gid=1000(user) groups=1000(user),27(sudo),...`. Add a username to query another user.'},

{q:'The command to safely edit `/etc/sudoers` is: (one word)',
 fill:['visudo'],
 t:5,s:'5.1',src:'pdf',type:'fill',
 e:'**`visudo`** is the safe editor for `/etc/sudoers`. It locks the file during editing and validates syntax before saving to prevent configuration errors.'},

{q:'What is the numeric (octal) value of permissions `rw-r--r--`? (three digits)',
 fill:['644','0644'],
 t:5,s:'5.3',src:'pdf',type:'fill',
 e:'**`644`** — r=4, w=2, x=1. rw-=6, r--=4, r--=4. This is the typical default permission for files (read by all, writable only by owner).'},

{q:'To set SUID+SGID bits with permissions 755, the 4-digit chmod value is: (four digits)',
 fill:['6755'],
 t:5,s:'5.3',src:'pdf',type:'fill',
 e:'SUID=4 + SGID=2 = **6**. Full: **`chmod 6755 file`** → `-rwsr-sr-x`. SUID runs with owner privileges; SGID runs with group privileges.'},


// ── NEW QUESTIONS FROM PDF v1.6 (added 2026-04-09) ──────────────────────────

// ── 1.1 ──
{q:'According to the LPI PDF, a private browser window ensures which of the following?',
 o:['Complete anonymity on the Internet','No trace left on the computer being used','TLS activation to avoid cookie tracking','DNT (Do Not Track) activation'],
 a:1, t:1, s:'1.1', src:'pdf',
 e:'The PDF (p.63 answer) states: a private window leaves no trace on the computer you\'re using — it does NOT make you anonymous on the Internet.'},
{q:'Which Linux distributions are listed in the LPI PDF as suitable for enterprise environments due to stability and free usage?',
 o:['Arch Linux, Gentoo, and Slackware','CentOS, Ubuntu LTS, and stable Debian','Kali Linux, Fedora, and openSUSE','Manjaro, Mint, and Elementary OS'],
 a:1, t:1, s:'1.1', src:'pdf',
 e:'The PDF (p.13) states CentOS (incorporates Red Hat products, free), Ubuntu LTS (long-term support), and stable Debian are suitable for enterprise use.'},
{q:'Name three devices that Android runs on, other than smartphones, as listed in the LPI PDF.',
 o:['Smart TVs, tablet computers, and smartwatches','Mainframes, routers, and desktops','Laptops, printers, and monitors','Servers, ATMs, and parking meters'],
 a:0, t:1, s:'1.1', src:'pdf',
 e:'The PDF (p.11) answer lists: smart TVs, tablet computers, Android Auto, and smartwatches as devices running Android besides smartphones.'},
{q:'Which of the following are major advantages of cloud computing according to the LPI PDF?',
 o:['Flexibility, easy recovery, and low use cost','High initial capital cost and fixed scaling','Local-only access and physical control','Proprietary licensing and vendor lock-in'],
 a:0, t:1, s:'1.1', src:'pdf',
 e:'PDF (p.11): cloud computing advantages are flexibility, easy to recover, and low use cost. Cloud services are easy to implement and scale.'},
{q:'When choosing a Linux distribution, which factors does the LPI PDF say should be considered?',
 o:['Cost, performance, scalability, stability, and hardware demand','Only the desktop environment and package manager','Color scheme, logo, and mascot','Number of social media followers of the distro project'],
 a:0, t:1, s:'1.1', src:'pdf',
 e:'PDF (p.11): factors include cost, performance, scalability, stability, and hardware demand of the system.'},

// ── 1.2 ──
{q:'Which command removes the package `cups` AND its configuration files on a Debian-based system?',
 o:['apt-get remove cups','apt-get purge cups','dpkg --remove cups','apt-get autoremove cups'],
 a:1, t:1, s:'1.2', src:'pdf',
 e:'PDF (p.35): `apt-get purge cups` removes the package and its configuration files. `remove` keeps config files.'},
{q:'Which application from the LibreOffice suite is used for electronic spreadsheets?',
 o:['LibreOffice Writer','LibreOffice Impress','LibreOffice Calc','LibreOffice Draw'],
 a:2, t:1, s:'1.2', src:'pdf',
 e:'PDF (p.33): LibreOffice Calc is the spreadsheet application in the LibreOffice suite.'},
{q:'What is the open-source web browser that serves as the basis for Google Chrome?',
 o:['Firefox','Epiphany','Chromium','Falkon'],
 a:2, t:1, s:'1.2', src:'pdf',
 e:'PDF (p.33): Chromium is the open-source browser used as the basis for Google Chrome.'},

{q:'According to the LPI PDF, which tool converts TIFF image files to JPEG directly at the command line?',
 o:['GIMP','Inkscape','ffmpeg','ImageMagick'],
 a:3, t:1, s:'1.2', src:'pdf',
 e:'PDF (p.35): ImageMagick can convert image files (including TIFF to JPEG) directly at the command line.'},
{q:'Match file formats to their LibreOffice applications: .doc opens in __, .xls opens in __, .ppt opens in __ (select the correct trio)',
 o:['Writer, Calc, Impress','Calc, Writer, Impress','Impress, Calc, Writer','Writer, Impress, Calc'],
 a:0, t:1, s:'1.2', src:'pdf',
 e:'PDF (p.33): .doc → LibreOffice Writer; .xls → LibreOffice Calc; .ppt → LibreOffice Impress.'},
{q:'Type the command to remove package `cups` AND its configuration files on Debian:',
 fill:['apt-get purge cups'], t:1, s:'1.2', src:'pdf', type:'fill',
 e:'`apt-get purge cups` removes the package and ALL its configuration files. `apt-get remove` keeps config files.'},

// ── 1.3 ──
{q:'What does Freedom 0 as defined by the Free Software Foundation allow?',
 o:['The freedom to distribute the software','The freedom to study and modify the software','The freedom to run the software','The freedom to distribute modified copies'],
 a:2, t:1, s:'1.3', src:'pdf',
 e:'PDF (p.49): Freedom 0 = run the software; Freedom 1 = study/modify; Freedom 2 = distribute; Freedom 3 = distribute modified.'},
{q:'What does FLOSS stand for?',
 o:['Free Linux Open Source Software','Free/Libre Open Source Software','Federated Linux Operating System Software','Freely Licensed Open Source Standard'],
 a:1, t:1, s:'1.3', src:'pdf',
 e:'PDF (p.49): FLOSS stands for Free/Libre Open Source Software.'},
{q:'Under which license is Mozilla Firefox distributed?',
 o:['GPL version 2','Apache License 2.0','Mozilla Public License 2.0','Creative Commons CC-BY-SA'],
 a:2, t:1, s:'1.3', src:'pdf',
 e:'PDF (p.50): Mozilla Firefox is available under the Mozilla Public License 2.0.'},
{q:'Which TWO of the following licenses are classified as PERMISSIVE in the LPI PDF?',
 o:['GPL version 3','Simplified BSD License','CC BY','CC BY-SA'],
 a:[1,2], t:1, s:'1.3', src:'pdf', type:'multi',
 e:'PDF (p.49): Simplified BSD and CC BY are permissive. GPL v3 and CC BY-SA are copyleft (require derived works to use same license).'},
{q:'Why did the Free Software Foundation create the GNU AGPL, according to the LPI PDF?',
 o:['To allow proprietary software to include GPL code','To close the "ASP loophole" for server-hosted software','To replace the GPL entirely','To allow code to be used without attribution'],
 a:1, t:1, s:'1.3', src:'pdf',
 e:'PDF (p.50): GNU AGPL closes the gap where developers modify server-hosted software but are not obliged under GPL to release changes, since they do not technically "distribute" the program.'},
{q:'What does the abbreviation FLOSS stand for? (type in full)',
 fill:['Free/Libre Open Source Software'], t:1, s:'1.3', src:'pdf', type:'fill',
 e:'FLOSS = Free/Libre Open Source Software. (PDF p.49)'},

// ── 1.4 ──
{q:'What is OpenStack, according to the LPI PDF?',
 o:['A hypervisor for virtual machines','A project that allows creation of private IaaS','An open source password manager','A project that allows creation of private SaaS'],
 a:1, t:1, s:'1.4', src:'pdf',
 e:'PDF (p.63 answer): OpenStack is a project that allows the creation of private IaaS (Infrastructure as a Service).'},
{q:'Which disk encryption tools are listed as valid in the LPI PDF exercise answers?',
 o:['RevealJS and EncFS','dm-crypt and KeePass','EncFS and dm-crypt','TLS and dm-crypt'],
 a:2, t:1, s:'1.4', src:'pdf',
 e:'PDF (p.63): Valid disk encryption software: EncFS and dm-crypt. KeePass and Bitwarden are password managers, not disk encryption.'},
{q:'What is Beamer, according to the LPI PDF?',
 o:['An encryption mechanism','A virtualization software','A LaTeX presentation tool','An OpenStack component'],
 a:2, t:1, s:'1.4', src:'pdf',
 e:'PDF (p.64): Beamer is a LaTeX presentation tool.'},
{q:'dm-crypt operates at which level of encryption?',
 o:['File-level encryption','Directory-level encryption','Block device encryption','Network-level encryption'],
 a:2, t:1, s:'1.4', src:'pdf',
 e:'PDF (p.64): dm-crypt is a block device encryption system — it encrypts at the block device level, not per-file.'},
{q:'Which THREE statements about dm-crypt are TRUE according to the LPI PDF?',
 o:['Files are encrypted before being written to disk','Only files and directories are encrypted, not symlinks','Requires root access','Is a block device encryption'],
 a:[0,2,3], t:1, s:'1.4', src:'pdf', type:'multi',
 e:'PDF (p.64): dm-crypt encrypts before writing to disk (T), does NOT only encrypt files/directories (F), requires root (T), and IS block device encryption (T).'},

// ── 2.1 ──
{q:'In Bash, which of the following commands creates a file literally named `touch`?',
 o:['touch touch','touch \'touch\'','touch "touch"','touch $touch'],
 a:1, t:2, s:'2.1', src:'pdf',
 e:'PDF (p.83): `touch \'touch\'` — single quotes prevent all substitution/interpretation, creating a file named "touch".'},
{q:'What is the scope of a local variable in Bash?',
 o:['The current shell and all subshells','Only the current shell','All users on the system','The current shell and its parent'],
 a:1, t:2, s:'2.1', src:'pdf',
 e:'PDF (p.94): A local variable\'s scope is the current shell ONLY. Environment variables are available to subshells too.'},
{q:'Which command makes a local Bash variable available to subprocesses?',
 o:['source','set','export','declare'],
 a:2, t:2, s:'2.1', src:'pdf',
 e:'PDF (p.94): `export` makes local variables available to subprocesses (subshells).'},
{q:'What is `cd` classified as in Bash?',
 o:['External command','Shell builtin','Alias','Shell function'],
 a:1, t:2, s:'2.1', src:'pdf',
 e:'PDF (p.83): `cd` is a shell builtin. `cat` is an external command.'},
{q:'Using brace expansion, which command creates files game1 through game5?',
 o:['touch game[1-5]','touch game{1..5}','touch game*','touch game?'],
 a:1, t:2, s:'2.1', src:'pdf',
 e:'PDF (p.83): `touch game{1..5}` uses brace expansion to create game1, game2, game3, game4, game5.'},
{q:'Type the Bash command to export a variable named `ORDER` with value `desc`:',
 fill:['export ORDER=desc'], t:2, s:'2.1', src:'pdf', type:'fill',
 e:'PDF (p.94): `export ORDER=desc` creates and exports an environment variable in one step.'},
{q:'Type the brace expansion command to create files game1 through game5:',
 fill:['touch game{1..5}'], t:2, s:'2.1', src:'pdf', type:'fill',
 e:'PDF (p.83): `touch game{1..5}` creates game1, game2, game3, game4, game5 in one command.'},

// ── 2.2 ──
{q:'Which command searches the locate database for files with a specific name?',
 o:['find','grep','locate','whereis'],
 a:2, t:2, s:'2.2', src:'pdf',
 e:'PDF (p.107): `locate` searches the pre-built locate database. `find` searches the filesystem directly. `updatedb` updates the locate database.'},
{q:'Which command must be run to update the locate database so newly created files can be found?',
 o:['locate --rebuild','find -update','updatedb','locate -u'],
 a:2, t:2, s:'2.2', src:'pdf',
 e:'PDF (p.107): `updatedb` updates the locate database. A newly created file will not be found by `locate` until `updatedb` is run.'},
{q:'According to the LPI PDF, which command displays an info page?',
 o:['man','help','info','pinfo'],
 a:2, t:2, s:'2.2', src:'pdf',
 e:'PDF (p.107): `info` displays an info page. `man` displays a man page. Info pages can have MENU nodes for navigation.'},
{q:'What is the difference between `locate` and `find` as described in the LPI PDF?',
 o:['locate uses regex; find uses glob patterns','locate searches a pre-built database; find searches the filesystem directly','locate is faster but less accurate; find is always accurate','They are identical in behavior'],
 a:1, t:2, s:'2.2', src:'pdf',
 e:'PDF (p.107): `locate` queries a pre-built database (faster, may be outdated); `find` searches the live filesystem directly.'},
{q:'Which TWO commands can be used to locate files on a Linux system?',
 o:['man','locate','find','info'],
 a:[1,2], t:2, s:'2.2', src:'pdf', type:'multi',
 e:'PDF (p.107): `locate` (database search) and `find` (filesystem search) are both used to locate files.'},
{q:'Which command updates the locate database? (one word)',
 fill:['updatedb'], t:2, s:'2.2', src:'pdf', type:'fill',
 e:'PDF (p.107): `updatedb` rebuilds the locate database. Run it before using `locate` to find newly created files.'},

// ── 2.3 ──
{q:'Which `ls` option prints all files including hidden ones?',
 o:['-l','-h','-a','-R'],
 a:2, t:2, s:'2.3', src:'pdf',
 e:'PDF (p.147): `ls -a` (all) prints all files/directories including hidden ones (those starting with a dot).'},
{q:'Which `ls` option sorts output by modification time?',
 o:['-S','-t','-r','-X'],
 a:1, t:2, s:'2.3', src:'pdf',
 e:'PDF (p.147): `ls -t` sorts by modification time (newest first). `-S` sorts by size.'},
{q:'A path starting with `~` is called what, according to the LPI PDF?',
 o:['An absolute path','A relative path','A relative-to-home path','A symbolic path'],
 a:2, t:2, s:'2.3', src:'pdf',
 e:'PDF (p.147): A file path that uses `~` is called a relative-to-home path.'},
{q:'From /etc/udev/rules.d, what does `cd ../../systemd/user` followed by `cd ..` result in?',
 o:['/etc/systemd','/etc/udev','/etc','/etc/systemd/system'],
 a:0, t:2, s:'2.3', src:'pdf',
 e:'PDF (p.120): Starting at /etc/udev/rules.d → ../../systemd/user = /etc/systemd/user → cd .. = /etc/systemd.'},
{q:'Which is the correct command to navigate into a directory named "this is a test"?',
 o:['cd this is a test','cd "this is a test"','cd this_is_a_test','cd this\\ is\\ a\\ test'],
 a:1, t:2, s:'2.3', src:'pdf',
 e:'PDF (p.121): Use quotes: `cd "this is a test"` or escape spaces. Tab completion also works after typing the start.'},
{q:'What `ls` option shows hidden files? (type the option only, e.g. -x)',
 fill:['-a'], t:2, s:'2.3', src:'pdf', type:'fill',
 e:'PDF (p.147): `ls -a` shows ALL files including hidden ones (files starting with a dot).'},

// ── 2.4 ──
{q:'In globbing, which pattern character matches exactly ONE character?',
 o:['*','?','[]','^'],
 a:1, t:2, s:'2.4', src:'pdf',
 e:'PDF (p.162): `?` matches any ONE character; `*` matches any number; `[]` matches a class/set of characters.'},
{q:'What does `cp -p` do according to the LPI PDF?',
 o:['Copy recursively','Copy only if destination is older','Preserve permissions, ownership, and timestamps','Prompt before overwriting'],
 a:2, t:2, s:'2.4', src:'pdf',
 e:'PDF (p.167): `cp -p` is the same as `--preserve=mode,ownership,timestamps` — preserves the original file attributes.'},
{q:'What does `cp -u` do?',
 o:['Copy only if the destination file is missing or older than the source','Update all files unconditionally','Copy with verbose output','Copy only newer files from source to any destination'],
 a:0, t:2, s:'2.4', src:'pdf',
 e:'PDF (p.167): `cp -u` only copies if the destination is missing OR is older than the source file.'},
{q:'What does `rmdir -p a/b/c` do?',
 o:['Removes only the empty leaf directory c','Removes a, b, and c if all are empty directories','Removes a/b/c recursively including files','Prompts before removing each directory'],
 a:1, t:2, s:'2.4', src:'pdf',
 e:'PDF (p.167): `rmdir -p` removes a tree of empty directories — similar to `mkdir -p` but in reverse.'},
{q:'Which globbing pattern matches file1, file5, and filea from a set of files?',
 o:['file[1-5]','file[^2-4]','file[1a5]','file?'],
 a:2, t:2, s:'2.4', src:'pdf',
 e:'PDF (p.164): `file[1a5]` matches files whose name ends with exactly one of: 1, a, or 5.'},

// ── 3.1 ──
{q:'Which channel number represents stderr in Linux?',
 o:['0','1','2','3'],
 a:2, t:3, s:'3.1', src:'pdf',
 e:'PDF (p.186): stdin=channel 0, stdout=channel 1, stderr=channel 2.'},
{q:'Which operator redirects stdout to a file, OVERWRITING it if it exists?',
 o:['>>','>','|','2>'],
 a:1, t:3, s:'3.1', src:'pdf',
 e:'PDF (p.197): `>` redirects stdout to a file, creating it if absent or overwriting if present. `>>` appends.'},
{q:'Which operator APPENDS stdout to a file?',
 o:['>','>>','<','2>'],
 a:1, t:3, s:'3.1', src:'pdf',
 e:'PDF (p.197): `>>` appends stdout to a file rather than overwriting it.'},
{q:'To redirect ONLY error messages to a file, which operator is used?',
 o:['>','1>','2>','&>'],
 a:2, t:3, s:'3.1', src:'pdf',
 e:'PDF (p.198): `2>` redirects only stderr (channel 2) to a file. Channel must be specified explicitly.'},
{q:'What does the pipe operator `|` do in Linux?',
 o:['Redirects stdout to a file','Passes the stdout of one command as stdin to the next','Runs two commands simultaneously in background','Sends stderr to stdout'],
 a:1, t:3, s:'3.1', src:'pdf',
 e:'PDF: The pipe `|` connects commands — stdout of the left command becomes stdin of the right command.'},
{q:'Which redirection operator APPENDS stdout to a file? (type the operator)',
 fill:['>>'], t:3, s:'3.1', src:'pdf', type:'fill',
 e:'PDF (p.197): `>>` appends stdout to a file. `>` overwrites.'},
{q:'Which redirection operator sends stderr to a file? (type the operator)',
 fill:['2>'], t:3, s:'3.1', src:'pdf', type:'fill',
 e:'PDF (p.198): `2>` redirects channel 2 (stderr) to a file. The channel number must be specified explicitly.'},

// ── 3.2 ──
{q:'Which `grep` option counts the number of matching lines?',
 o:['-i','-c','-v','-E'],
 a:1, t:3, s:'3.2', src:'pdf',
 e:'PDF (p.210): `grep -c` counts the number of matches (matching lines).'},
{q:'Which `grep` option inverts the match (prints lines that do NOT match)?',
 o:['-i','-c','-r','-v'],
 a:3, t:3, s:'3.2', src:'pdf',
 e:'PDF (p.210): `grep -v` inverts the match — prints lines that do NOT contain the pattern.'},
{q:'In a regular expression, what does `^` represent?',
 o:['End of a line','Start of a line','Any single character','Negation inside brackets'],
 a:1, t:3, s:'3.2', src:'pdf',
 e:'PDF (p.211): `^` at the start of a regex matches the start of a line. `$` matches end of a line.'},
{q:'Which `grep` option enables extended regular expressions?',
 o:['-i','-r','-E','-c'],
 a:2, t:3, s:'3.2', src:'pdf',
 e:'PDF (p.210): `grep -E` enables extended regular expressions, needed for meta-characters like |, +, and ?.'},
{q:'Which `grep` option makes search case-insensitive? (type the option only)',
 fill:['-i'], t:3, s:'3.2', src:'pdf', type:'fill',
 e:'PDF (p.210): `grep -i` performs a case-insensitive search.'},
{q:'Which `grep` option inverts the match (show non-matching lines)? (type the option)',
 fill:['-v'], t:3, s:'3.2', src:'pdf', type:'fill',
 e:'PDF (p.210): `grep -v` inverts the match — prints lines that do NOT contain the pattern.'},

// ── 3.3 ──
{q:'What is a shebang line in a shell script?',
 o:['A comment explaining the script','The first line specifying the interpreter path (e.g. #!/bin/bash)','A variable declaration at script start','The last line calling exit 0'],
 a:1, t:3, s:'3.3', src:'pdf',
 e:'PDF (p.225): A shebang (bang line) is the first line of a script, e.g. #!/bin/bash, indicating which interpreter to use.'},
{q:'What does `$#` represent in a Bash script?',
 o:['The exit code of the last command','The process ID of the script','The number of arguments passed to the script','All arguments as a list'],
 a:2, t:3, s:'3.3', src:'pdf',
 e:'PDF (p.245): `$#` contains the number of arguments passed to the script. `$?` is the exit code.'},
{q:'What does `$@` represent in a Bash script?',
 o:['The exit code','The script name','All arguments passed to the script','The process ID'],
 a:2, t:3, s:'3.3', src:'pdf',
 e:'PDF (p.246): `$@` holds all arguments passed to the script — can be iterated with a for loop.'},
{q:'To enter INSERT mode in vi, which key do you press from navigation mode?',
 o:['Esc','a','i',':'],
 a:2, t:3, s:'3.3', src:'pdf',
 e:'PDF (p.226): In vi, press `i` to enter insert mode from navigation mode. Press `Esc` to return to navigation mode.'},
{q:'What variable must have NO spaces around the `=` sign in a Bash assignment?',
 o:['Environment variables only','All Bash variable assignments','Only variables starting with $','Only local variables'],
 a:1, t:3, s:'3.3', src:'pdf',
 e:'PDF (p.227): All Bash variable assignments must have no spaces: `username=Carol` is correct; `username = Carol` causes an error.'},
{q:'In vi, which key do you press to enter INSERT mode from navigation mode?',
 fill:['i'], t:3, s:'3.3', src:'pdf', type:'fill',
 e:'PDF (p.226): Press `i` to enter insert mode. Press `Esc` to return to navigation mode.'},

// ── 4.1 ──
{q:'Which command shows the current kernel release version?',
 o:['uname -a','uname -r','lscpu','cat /proc/version'],
 a:1, t:4, s:'4.1', src:'pdf',
 e:'PDF (p.264): `uname -r` shows the current kernel release. Example output: 4.15.0-47-generic.'},
{q:'Which of the following best describes the difference between "beta" and "stable" releases in Linux distribution lifecycle?',
 o:['Beta receives no updates; stable receives critical patches only','Beta is for testing (may be unstable); stable is production-ready and well-tested','Beta costs money; stable is free','Beta has fewer features; stable has all features'],
 a:1, t:4, s:'4.1', src:'pdf',
 e:'PDF (section 4.1): Beta releases are for testing and may be unstable; stable releases are production-ready with thorough testing.'},
{q:'Which feature is generally unique to Linux compared to Windows and macOS according to the LPI PDF?',
 o:['A graphical desktop environment','Full command-line interface access to all OS functions','Support for USB devices','Multiple user accounts'],
 a:1, t:4, s:'4.1', src:'pdf',
 e:'PDF (section 4.1): Linux provides full CLI access to all OS functions, a key differentiator vs Windows/macOS where CLI access is more limited.'},
{q:'Type the command to display the current kernel release version:',
 fill:['uname -r'], t:4, s:'4.1', src:'pdf', type:'fill',
 e:'PDF (p.264): `uname -r` shows the kernel release version, e.g. 4.15.0-47-generic.'},

// ── 4.2 ──
{q:'What is the device file name for partition 3 of the THIRD SATA drive in a Linux system?',
 o:['/dev/sd3p3','/dev/sdcp3','/dev/sdc3','/dev/sata3p3'],
 a:2, t:4, s:'4.2', src:'pdf',
 e:'PDF (p.276 answer): Third SATA drive = sdc (a, b, c); partition 3 = sdc3. Answer: /dev/sdc3.'},
{q:'How are old IDE (Integrated Drive Electronics) drives represented in /dev?',
 o:['/dev/sd*','/dev/hd*','/dev/nvme*','/dev/ide*'],
 a:1, t:4, s:'4.2', src:'pdf',
 e:'PDF (p.311): Old IDE drives are represented as /dev/hd*; SATA/SCSI as /dev/sd*; NVMe as /dev/nvme*.'},
{q:'Which command lists block devices on a Linux system?',
 o:['fdisk -l','lsblk','blkid','df -h'],
 a:1, t:4, s:'4.2', src:'pdf',
 e:'PDF (p.277): `lsblk` lists block devices, their partitions, filesystems, and mount points. `lsblk -f` includes filesystem type.'},
{q:'How are NVMe (Non-Volatile Memory Express) drives represented in /dev?',
 o:['/dev/sd*','/dev/hd*','/dev/nvme*','/dev/nvm*'],
 a:2, t:4, s:'4.2', src:'pdf',
 e:'PDF (p.311): Modern NVMe drives are represented as /dev/nvme* in Linux.'},
{q:'Type the command to list all block devices with filesystem info:',
 fill:['lsblk -f','lsblk'], t:4, s:'4.2', src:'pdf', type:'fill',
 e:'PDF (p.277): `lsblk -f` shows block devices, partition structure, filesystem type and mount points.'},

// ── 4.3 ──
{q:'Which file in /proc contains memory information?',
 o:['/proc/memdata','/proc/mem','/proc/meminfo','/proc/memory'],
 a:2, t:4, s:'4.3', src:'pdf',
 e:'PDF (p.311): /proc/meminfo contains detailed memory information. Its fields correspond to the output of the `free` command.'},
{q:'What does journald do in a systemd-based Linux system?',
 o:['Manages network connections','Provides a structured logging system that replaced traditional syslog methods','Schedules cron jobs','Handles package updates'],
 a:1, t:4, s:'4.3', src:'pdf',
 e:'PDF (p.312): journald is systemd\'s journal daemon — it changed logging by providing structured, indexed log storage replacing traditional syslog methods.'},
{q:'Which directory contains process identifier files (.pid) for running processes?',
 o:['/tmp','/var/run','/run','/proc/pids'],
 a:2, t:4, s:'4.3', src:'pdf',
 e:'PDF (p.426): /run contains run-time variable data for running processes, including .pid files. This directory is cleared on each boot.'},
{q:'Type the full path of the file containing memory information in /proc:',
 fill:['/proc/meminfo'], t:4, s:'4.3', src:'pdf', type:'fill',
 e:'PDF (p.311): /proc/meminfo contains detailed memory information that corresponds to `free` command output.'},

// ── 4.4 ──
{q:'Which THREE subnets are reserved for private IPv4 addressing?',
 o:['10.0.0.0/8','172.16.0.0/12','192.168.0.0/16','169.254.0.0/16'],
 a:[0,1,2], t:4, s:'4.4', src:'pdf', type:'multi',
 e:'PDF (p.339): Private IPv4 ranges: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16. These cannot be routed on the public Internet.'},
{q:'Which command shows the current IP addresses of all network interfaces?',
 o:['ifconfig -a','ip addr show','netstat -i','route -n'],
 a:1, t:4, s:'4.4', src:'pdf',
 e:'PDF (p.340): `ip addr show` lists all network interfaces and their current IP addresses.'},
{q:'Private IPv4 addresses cannot be routed on the public Internet because:',
 o:['They are too short for global routing','They are potentially used by numerous networks simultaneously','They require special hardware','They are reserved for loopback only'],
 a:1, t:4, s:'4.4', src:'pdf',
 e:'PDF (p.339): Private subnets cannot be routed publicly because they are potentially used by numerous networks at the same time.'},
{q:'What is the decimal notation for the binary IP 11000000.10101000.00000000.00000001?',
 o:['192.168.0.1','172.16.0.1','10.0.0.1','192.168.1.1'],
 a:0, t:4, s:'4.4', src:'pdf',
 e:'PDF (p.338): 11000000=192, 10101000=168, 00000000=0, 00000001=1 → 192.168.0.1.'},
{q:'Type the command to display all current network interface IP addresses:',
 fill:['ip addr show','ip addr'], t:4, s:'4.4', src:'pdf', type:'fill',
 e:'PDF (p.340): `ip addr show` lists all network interfaces with their current IPv4 and IPv6 addresses.'},

// ── 5.1 ──
{q:'Which file stores user password hashes on Linux?',
 o:['/etc/passwd','/etc/shadow','/etc/group','/etc/gshadow'],
 a:1, t:5, s:'5.1', src:'pdf',
 e:'PDF (p.374): /etc/shadow stores the one-way password hashes. /etc/passwd is readable by all but contains no password hash (just an x).'},
{q:'Which file stores system-local user account POSIX attributes and is READABLE BY ALL users?',
 o:['/etc/shadow','/etc/group','/etc/passwd','/etc/sudoers'],
 a:2, t:5, s:'5.1', src:'pdf',
 e:'PDF (p.374): /etc/passwd stores user account POSIX attributes (except password hash) and is readable by all users.'},
{q:'What is the difference between `su` and `sudo` regarding password entry?',
 o:['su requires root password; sudo requires the user\'s own password (if configured)','sudo requires root password; su requires user\'s own password','Both always require the root password','Neither requires any password'],
 a:0, t:5, s:'5.1', src:'pdf',
 e:'PDF (p.375): `su` switches user and requires the TARGET user\'s (usually root\'s) password. `sudo` requires the current user\'s OWN password.'},
{q:'Which TWO commands show who is currently logged in on a Linux system?',
 o:['last','who','passwd','id'],
 a:[1,2], t:5, s:'5.1', src:'pdf', type:'multi',
 e:'PDF (p.356/373): `who` and `w` show currently logged-in users. `last` shows recent login history. `id` shows current user\'s UID/GID.'},
{q:'Type the full path of the file that stores user password hashes on Linux:',
 fill:['/etc/shadow'], t:5, s:'5.1', src:'pdf', type:'fill',
 e:'PDF (p.374): /etc/shadow stores one-way password hashes. It is NOT readable by regular users (unlike /etc/passwd).'},

// ── 5.2 ──
{q:'Which `useradd` option sets the user\'s home directory to a custom path?',
 o:['-c','-d','-g','-m'],
 a:1, t:5, s:'5.2', src:'pdf',
 e:'PDF (p.386): `useradd -d` creates a user account with a custom home directory path.'},
{q:'Which command verifies a newly created user\'s UID, GID, and group memberships?',
 o:['who','w','id','groups'],
 a:2, t:5, s:'5.2', src:'pdf',
 e:'PDF (p.387): `id frank` shows uid=1000(frank) gid=1000(frank) groups=1000(frank).'},
{q:'Which command deletes a user account on Linux?',
 o:['usermod -d','userdel','deluser --system','passwd -l'],
 a:1, t:5, s:'5.2', src:'pdf',
 e:'PDF (p.387): `userdel` is the command to delete a user account.'},
{q:'Which file defines configuration parameters for user/group creation such as UID/GID ranges?',
 o:['/etc/useradd.conf','/etc/login.defs','/etc/adduser.conf','/etc/user.conf'],
 a:1, t:5, s:'5.2', src:'pdf',
 e:'PDF (p.387): /etc/login.defs defines configuration parameters controlling the creation of users and groups (UID/GID ranges, home directory creation, etc.).'},
{q:'Type the command to check a user\'s UID, GID and group memberships (one word):',
 fill:['id'], t:5, s:'5.2', src:'pdf', type:'fill',
 e:'PDF (p.387): `id username` shows uid, gid and groups. Example: uid=1000(frank) gid=1000(frank) groups=1000(frank).'},
{q:'Type the command to delete a user account on Linux (one word):',
 fill:['userdel'], t:5, s:'5.2', src:'pdf', type:'fill',
 e:'PDF (p.387): `userdel username` deletes the user account. Use `-r` to also delete the home directory.'},
{q:'Type the full path of the config file that defines UID/GID ranges for new users:',
 fill:['/etc/login.defs'], t:5, s:'5.2', src:'pdf', type:'fill',
 e:'PDF (p.387): /etc/login.defs defines UID/GID ranges, home directory creation behavior, and password policies.'},

// ── 5.3 ──
{q:'For a DIRECTORY, what does the execute (x) permission allow?',
 o:['Listing the directory\'s contents','Reading the files inside','Entering the directory','Creating files inside'],
 a:2, t:5, s:'5.3', src:'pdf',
 e:'PDF (p.405): For directories: r=list contents, w=create/delete files, x=ENTER the directory. Execute does NOT allow listing.'},
{q:'What are the permissions for a file after `chmod 754 text.txt`?',
 o:['rwxr-xr--','rwxr--r-x','rw-r-xr--','rwx-r-xr--'],
 a:0, t:5, s:'5.3', src:'pdf',
 e:'PDF: 754 = 7(rwx) for owner, 5(r-x) for group, 4(r--) for others → rwxr-xr--'},
{q:'On Linux, hidden files are identified by:',
 o:['A .hidden attribute','Filenames starting with a dot (.)','Filenames ending with ~','Permissions set to 000'],
 a:1, t:5, s:'5.3', src:'pdf',
 e:'PDF (p.403): Files whose names start with a period (.) are automatically hidden in Linux directory listings.'},
{q:'What letter prefix does `ls -l` display for a symbolic link?',
 o:['s','L','l','@'],
 a:2, t:5, s:'5.3', src:'pdf',
 e:'PDF (p.403): `l` (lowercase L) denotes a symbolic link in `ls -l` output. Example: lrwxrwxrwx.'},
{q:'What is the octal value of the read (r) permission bit?',
 o:['1','2','4','8'],
 a:2, t:5, s:'5.3', src:'pdf',
 e:'PDF (p.405): r=4, w=2, x=1 are the octal values for permission bits.'},

// ── 5.4 ──
{q:'What is the key difference between /tmp and /var/tmp according to the LPI PDF?',
 o:['/tmp is on RAM; /var/tmp is on disk','/tmp is cleared at boot; /var/tmp persists between reboots','/var/tmp is readable by root only; /tmp by all','They are identical in behavior'],
 a:1, t:5, s:'5.4', src:'pdf',
 e:'PDF (p.426): /tmp is cleared during boot (not mandatory but recommended); /var/tmp is NOT cleared at boot and files persist between reboots.'},
{q:'What does `ls -i` show?',
 o:['Inodes of files','Invisible hidden files','Inaccessible permissions','Instance IDs'],
 a:0, t:5, s:'5.4', src:'pdf',
 e:'PDF (p.434): `ls -i` shows the inode number of each file. Hard links share the same inode.'},
{q:'Which directory contains run-time variable data including .pid files for running processes?',
 o:['/tmp','/var/tmp','/run','/proc'],
 a:2, t:5, s:'5.4', src:'pdf',
 e:'PDF (p.426): /run contains run-time variable data. Programs creating more than one run-time file may create subdirectories here. Contents are cleared on each boot.'},
{q:'Type the command to create a symbolic link `mylink` pointing to `target.txt`:',
 fill:['ln -s target.txt mylink'], t:5, s:'5.4', src:'pdf', type:'fill',
 e:'PDF: `ln -s target.txt mylink` creates a symbolic link. Without `-s` it creates a hard link.'},
];

// ══════════════════════════════════════════════════════
//  APPENDIX — NEW QUESTIONS v3 (no duplicates with existing 192)
//  All validated against LPI Learning Material v1.6 PDF
//  src:'ext' = External validated (from TP or fax-simile LPI format)
//  src:'pdf' = Directly from PDF content/exercises
// ══════════════════════════════════════════════════════

// Append new questions to the Q array
Q.push(

// ── 4.1 Choosing an Operating System (was only 1 Q, now +12) ──

{q:'Which project makes up the common component shared by ALL Linux distributions?',
 o:['CentOS','Red Hat','Ubuntu','The Linux Kernel'],
 a:3,t:4,s:'4.1',src:'pdf',
 e:'PDF 4.1 Answer: **The Linux Kernel** is the common component in every Linux distribution. All distros ship with a Linux kernel; the distribution adds a shell, tools, and optionally a desktop environment on top.'},

{q:'Running `uname -r` on a Linux system returns:',
 o:['The Linux distribution name and version','The kernel release version number','The CPU architecture','The hostname of the system'],
 a:1,t:4,s:'4.1',src:'pdf',
 e:'PDF 4.1: `uname -r` prints the **kernel release version** (e.g. `4.15.0-1019-aws`). `uname -s` shows the OS name. The distribution name is in `/etc/os-release`.'},

{q:'Which operating system is reported by `uname -s` on macOS?',
 o:['OS X','macOS','Darwin','BSD'],
 a:2,t:4,s:'4.1',src:'pdf',
 e:'PDF 4.1 Answer: `uname -s` returns **Darwin** on macOS. macOS is based on BSD Unix and uses the Darwin kernel. `-s` returns the OS/kernel name; `-r` returns the version.'},

{q:'Which of the following is a desktop environment in Linux?',
 o:['Mint','Elementary','Zorin','Gnome'],
 a:3,t:4,s:'4.1',src:'pdf',
 e:'PDF 4.1 Answer: **Gnome** is a desktop environment (as is KDE). Mint, Elementary, and Zorin are **distributions** (operating system flavors) — not desktop environments themselves (though Elementary uses its own DE called Pantheon).'},

{q:'Which component of an operating system provides access to hardware?',
 o:['Shells','Applications','Drivers','Services'],
 a:2,t:4,s:'4.1',src:'pdf',
 e:'PDF 4.1 Answer: **Drivers** are the OS components that translate standard software requests into hardware-specific operations. They are the bridge between software and physical hardware.'},

{q:'How does a Linux distribution differ from the Linux kernel?',
 o:['The kernel is the Linux distribution','The kernel is part of a distribution; the distribution adds applications surrounding the kernel to make it useful','All distributions using the same kernel are identical','The kernel contains all applications pre-installed'],
 a:1,t:4,s:'4.1',src:'pdf',
 e:'PDF 4.1 Answer: The **Linux distribution = kernel + surrounding software** (shell, utilities, desktop, applications). The kernel alone cannot be used interactively. Each distribution chooses its own set of software, installer, and configuration tools.'},

{q:'Which distribution categories are considered "Enterprise Grade"? (Choose two.)',
 o:['Fedora Linux','Red Hat Enterprise Linux','Arch Linux','Ubuntu LTS','Gentoo Linux'],
 a:[1,3],t:4,s:'4.1',src:'pdf',type:'multi',
 e:'PDF 4.1: **RHEL** and **Ubuntu LTS** are enterprise-grade with long-term support (10 years and 5 years respectively). Fedora and Ubuntu non-LTS are consumer-grade with short support cycles. Arch and Gentoo are experimental/hacker distributions.'},

{q:'Fedora Linux is best described as:',
 o:['An enterprise distribution with 10 years of support','A testbed for technologies that may later appear in Red Hat Enterprise Linux','A BSD-based system used in data centers','A rolling-release distribution for cutting-edge users'],
 a:1,t:4,s:'4.1',src:'pdf',
 e:'PDF 4.1: **Fedora** is a consumer/community distribution sponsored by Red Hat. It serves as a **testbed for new technologies** that may eventually be included in RHEL. It has a short ~13-month support cycle.'},

{q:'Which of the following Linux distributions use a rolling-release model?',
 o:['Red Hat Enterprise Linux','Ubuntu LTS','Arch Linux','CentOS'],
 a:2,t:4,s:'4.1',src:'pdf',
 e:'PDF 4.1: **Arch Linux** (and Gentoo) use a **rolling-release model** — updates are delivered continuously rather than in fixed versioned releases. This provides the most recent software at the cost of stability.'},

{q:'macOS is based on:',
 o:['Linux','Windows NT','BSD Unix','Its own proprietary kernel'],
 a:2,t:4,s:'4.1',src:'pdf',
 e:'PDF 4.1: macOS (previously OS X) is based on **BSD Unix** (specifically Darwin). It shares Unix foundations and uses the Bash/Zsh shell, making it familiar to Linux users.'},

{q:'Red Hat Enterprise Linux 8 was launched in May 2019. When does its support end?',
 o:['May 2024 (5 years)','May 2027 (8 years)','May 2029 (10 years)','May 2033 (14 years)'],
 a:2,t:4,s:'4.1',src:'pdf',
 e:'PDF 4.1: RHEL provides **10 years of support**. RHEL 8 launched May 2019, support until **May 2029**. This long lifecycle is a key reason enterprises choose RHEL over consumer distributions.'},

{q:'What command checks the Linux kernel release version? (type the full command)',
 fill:['uname -r'],
 t:4,s:'4.1',src:'pdf',type:'fill',
 e:'**`uname -r`** prints the kernel release version (e.g. `5.15.0-91-generic`). The `-r` flag stands for "kernel release". `uname -s` shows OS name, `uname -a` shows all information.'},

// ── 4.2 Hardware — new questions ──
{q:'What is swap space on Linux?',
 o:['A second partition for user files','A special disk area where idle applications are moved when RAM is full','A cache for frequently accessed files','The area where the kernel is stored'],
 a:1,t:4,s:'4.2',src:'pdf',
 e:'PDF 4.2: **Swap space** is a disk area used as virtual memory. When physical RAM is full, Linux moves idle applications from RAM to swap, and swaps them back when they need to run.'},

{q:'The command `free -m` on Linux shows:',
 o:['Free disk space in megabytes','CPU frequency in MHz','System memory and swap usage in megabytes','Memory modules installed on the motherboard'],
 a:2,t:4,s:'4.2',src:'pdf',
 e:'PDF 4.2: `free -m` shows **RAM and swap memory** usage in **megabytes**: total, used, free, shared, buff/cache, and available columns for both Mem and Swap rows.'},

{q:'UEFI (Unified Extensible Firmware Interface) is a replacement for:',
 o:['The Linux bootloader (GRUB)','BIOS (Basic Input/Output System)','The kernel init system','The device driver framework'],
 a:1,t:4,s:'4.2',src:'pdf',
 e:'PDF 4.2: **UEFI** replaced the older **BIOS** firmware. It supports larger disks, diagnostics, graphical interfaces, secure boot, and networking. Most modern systems use UEFI, though people often still call it "BIOS".'},

{q:'Which command shows detailed CPU architecture information (cores, threads, speeds)?',
 o:['`cpuinfo`','`lscpu`','`cat /proc/mem`','`uname -p`'],
 a:1,t:4,s:'4.2',src:'pdf',
 e:'PDF 4.2: **`lscpu`** provides a human-friendly view of CPU architecture (model, cores, threads, clock speed, cache, etc.). The raw data is in `/proc/cpuinfo` but `lscpu` is much easier to read.'},

// ── 4.3 Where Data is Stored — new questions ──
{q:'The `/var/log/auth.log` file contains:',
 o:['Kernel boot messages','Hard disk usage information','Authentication-related log messages (logins, sudo, SSH)','Application crash reports'],
 a:2,t:4,s:'4.3',src:'pdf',
 e:'PDF 4.3: **`/var/log/auth.log`** stores authentication information — user logins, `sudo` usage, SSH connections, and PAM authentication events.'},

{q:'The `/var/log/kern.log` file contains:',
 o:['Kernel compile logs','Kernel hardware and driver messages','User kernel module requests','Kernel update history'],
 a:1,t:4,s:'4.3',src:'pdf',
 e:'PDF 4.3: **`/var/log/kern.log`** stores kernel messages — hardware detection, driver loading, USB device events, filesystem errors, etc.'},

{q:'Which command reads the `/var/log/btmp` binary log file?',
 o:['`last`','`lastb`','`journalctl`','`btmpread`'],
 a:1,t:4,s:'4.3',src:'pdf',
 e:'PDF 4.3 Answer: **`lastb`** reads `/var/log/btmp` which stores **failed login attempts**. `last` reads `/var/log/wtmp` (successful logins). Both are binary files requiring special commands.'},

{q:'What does the `journalctl -u ssh.service` command do?',
 o:['Starts the SSH service','Shows journal entries for the SSH unit/service','Restarts the systemd journal daemon','Lists all enabled system services'],
 a:1,t:4,s:'4.3',src:'pdf',
 e:'PDF 4.3: `journalctl -u service.service` queries the systemd journal for a **specific unit**. `-u ssh.service` shows all log entries related to the SSH service.'},

{q:'What is log rotation and which utility handles it?',
 o:['Compressing logs and deleting old ones — handled by `syslogd`','Moving, compressing and eventually deleting old log files — handled by `logrotate`','Encrypting log files for security — handled by `journald`','Sending logs to a remote server — handled by `rsyslog`'],
 a:1,t:4,s:'4.3',src:'pdf',
 e:'PDF 4.3: **`logrotate`** handles log rotation — moving old log files to new names, compressing them, and eventually deleting them. This prevents logs from filling the disk.'},

{q:'Which directory is the standard location for user home directories?',
 o:['/root','/users','/home','/usr/home'],
 a:2,t:4,s:'4.3',src:'pdf',
 e:'PDF 4.3: **`/home`** is the standard location for user home directories (e.g. `/home/alice`). The root user\'s home is `/root`. This is defined by the Filesystem Hierarchy Standard (FHS).'},

{q:'What is the `/opt` directory used for?',
 o:['Optional third-party applications not managed by the package manager','Operating system kernel files','Optional kernel modules','Temporary files during package installation'],
 a:0,t:4,s:'4.3',src:'pdf',
 e:'PDF 4.3: **`/opt`** is used for **optional third-party applications** (e.g. commercial software, vendor-installed applications) that are not managed by the distribution\'s package manager.'},

// ── 4.4 Networking — new questions ──
{q:'IPv4 addresses are how many bits wide?',
 o:['16 bits','32 bits','64 bits','128 bits'],
 a:1,t:4,s:'4.4',src:'pdf',
 e:'PDF 4.4: **IPv4 addresses are 32 bits** wide, giving a theoretical maximum of 4,294,967,296 (2³²) addresses. They are written as four decimal octets (0-255) separated by dots.'},

{q:'IPv6 addresses are how many bits wide?',
 o:['32 bits','64 bits','96 bits','128 bits'],
 a:3,t:4,s:'4.4',src:'pdf',
 e:'PDF 4.4: **IPv6 addresses are 128 bits** wide, providing vastly more addresses than IPv4\'s 32-bit space. Written as eight groups of four hexadecimal digits separated by colons.'},

{q:'What is Network Address Translation (NAT)?',
 o:['A DNS record type that maps names to addresses','A router capability that maps internal IP addresses to a single external IP address','A protocol for automatically assigning IP addresses','A firewall rule language'],
 a:1,t:4,s:'4.4',src:'pdf',
 e:'PDF 4.4: **NAT** (Network Address Translation) allows a router to map many internal private addresses to a **single external IP address** for Internet communication. The specific form called "masquerading" is common in home networks.'},

{q:'The command `ip link show` displays:',
 o:['The routing table','Available network interfaces and their MAC addresses','Active TCP connections','DNS server configuration'],
 a:1,t:4,s:'4.4',src:'pdf',
 e:'PDF 4.4: **`ip link show`** lists all network interfaces with their **link-layer (MAC) addresses**, MTU, and state (UP/DOWN). The `ens33` interface is shown with its Ethernet MAC address.'},

{q:'Which command tests network connectivity by sending ICMP echo requests?',
 o:['`traceroute`','`netstat`','`ping`','`host`'],
 a:2,t:4,s:'4.4',src:'pdf',
 e:'PDF 4.4: **`ping hostname`** sends ICMP echo requests and waits for replies, verifying network reachability. `ping -c 3` stops after 3 packets. Use Ctrl+C to stop infinite pinging.'},

{q:'What does the `ping -c 3 192.168.0.1` command do?',
 o:['Continuously pings until stopped','Sends exactly 3 echo requests then stops','Pings 3 different hosts','Tests 3 different ports'],
 a:1,t:4,s:'4.4',src:'pdf',
 e:'PDF 4.4: **`-c 3`** tells ping to send exactly **3 echo requests** then stop automatically. Without `-c`, ping runs indefinitely until Ctrl+C is pressed.'},

{q:'A subnet mask of 255.255.255.0 in CIDR notation is:',
 o:['/16','/24','/28','/32'],
 a:1,t:4,s:'4.4',src:'pdf',
 e:'PDF 4.4: **255.255.255.0** in binary = 24 ones followed by 8 zeros = **`/24`** in CIDR notation. The `/24` means 24 bits are set to 1 in the mask, leaving 8 bits for host addresses (256 hosts per network).'},

{q:'Type the command to manually add the IP address 192.168.0.5/24 to interface ens33:',
 fill:['ip addr add 192.168.0.5/24 dev ens33','sudo ip addr add 192.168.0.5/24 dev ens33','ip addr add 192.168.0.5/255.255.255.0 dev ens33'],
 t:4,s:'4.4',src:'pdf',type:'fill',
 e:'PDF 4.4: **`ip addr add 192.168.0.5/24 dev ens33`** adds an IP address to interface ens33. The `/24` is the CIDR subnet mask (255.255.255.0). Requires root/sudo privileges.'},

// ── 3.1 Archiving — new/fill questions ──
{q:'Which command lists the contents of a tar archive WITHOUT extracting it?',
 o:['`tar xf archive.tar`','`tar tf archive.tar`','`tar cf archive.tar`','`tar uf archive.tar`'],
 a:1,t:3,s:'3.1',src:'pdf',
 e:'PDF 3.1: **`tar tf archive.tar`** — `t` = **t**able of contents (list files). `x` = extract, `c` = create, `u` = update/add. Use `tar tvf` to also see permissions and sizes.'},

{q:'After `gzip` compresses `bigfile`, what happens to the original file?',
 o:['The original is kept and a new .gz file is created','The original file is deleted and replaced with bigfile.gz','A backup of the original is saved as bigfile.orig','The original is moved to /tmp'],
 a:1,t:3,s:'3.1',src:'pdf',
 e:'PDF 3.1: Compression tools like `gzip`, `bzip2`, and `xz` **delete the original file** after compressing it. The compressed file gets the compression extension (`.gz`, `.bz2`, `.xz`). Similarly, decompression removes the compressed file.'},

{q:'To view the contents of a gzip-compressed file WITHOUT decompressing it, use:',
 o:['`cat file.gz`','`zcat file.gz`','`less -z file.gz`','`gunzip -v file.gz`'],
 a:1,t:3,s:'3.1',src:'pdf',
 e:'PDF 3.1: **`zcat file.gz`** displays the content of a gzip-compressed file without permanently decompressing it. Similarly: `bzcat` for bzip2, `xzcat` for xz files.'},

{q:'Which `tar` option adds files to an EXISTING uncompressed archive?',
 o:['`c`','`x`','`u`','`r`'],
 a:2,t:3,s:'3.1',src:'pdf',
 e:'PDF 3.1: **`u`** (update) adds or replaces files in an existing tar archive. Note: you cannot add files to a compressed archive — only to plain `.tar` files. Attempting `tar uzf` gives an error.'},

{q:'The `-r` option in `zip -r zipfile.zip dir/` does what?',
 o:['Makes the zip file read-only after creation','Recursively includes directory contents in the zip file','Renames the zip file after creation','Reduces the compression ratio'],
 a:1,t:3,s:'3.1',src:'pdf',
 e:'PDF 3.1: `zip -r` causes zip to **recursively** include the contents of directories. Without `-r`, directories are added as empty entries in the ZIP file.'},

{q:'xz provides better compression than gzip, but what is the trade-off?',
 o:['xz cannot compress files larger than 1GB','xz requires more CPU time and memory to compress/decompress','xz does not support compression levels','xz is not available on most Linux systems'],
 a:1,t:3,s:'3.1',src:'pdf',
 e:'PDF 3.1: Higher compression ratios (like xz achieves) require **more CPU time and memory**. xz typically produces smaller files than gzip or bzip2, but is slower. This trade-off applies to all compression tools.'},

// ── 3.2 I/O & grep — new questions ──
{q:'The `&>` redirect operator in Bash redirects:',
 o:['Only stdin to a file','Only stdout to a file','Both stdout AND stderr to the same file','stderr to stdout'],
 a:2,t:3,s:'3.2',src:'pdf',
 e:'PDF 3.2: **`&>`** redirects **both stdout (channel 1) and stderr (channel 2)** to the same file. `&>>` appends both to the file. This is equivalent to `> file 2>&1`.'},

{q:'Which command cuts the 3rd field from input using `/` as delimiter?',
 o:['`cut -c 3 -d / file`','`cut -f 3 -d / file`','`cut -n 3 file`','`grep -f 3 file`'],
 a:1,t:3,s:'3.2',src:'pdf',
 e:'PDF 3.2: **`cut -f 3 -d / file`** extracts the **3rd field** (`-f 3`) using **`/`** as delimiter (`-d /`). `cut` is used to remove (cut) sections from each line of a file.'},

{q:'What does `ls -l | head | wc -w` count?',
 o:['The number of files in the directory','The number of lines in the ls output','The number of words in the first 10 lines of `ls -l` output','The total file sizes'],
 a:2,t:3,s:'3.2',src:'pdf',
 e:'PDF 3.2: `ls -l` lists files → piped to `head` (first 10 lines) → piped to `wc -w` which counts **words** in those 10 lines. `-w` = word count, `-l` = line count, `-c` = byte count.'},

{q:'The `.` (dot) in a regular expression matches:',
 o:['A literal dot/period character','Any single character except newline','Zero or more characters','The beginning of a line'],
 a:1,t:3,s:'3.2',src:'pdf',
 e:'PDF 3.2: In regex, **`.`** (dot) matches **any single character** (except newline). To match a literal dot, escape it: `\\.`. `*` = zero or more of the preceding; `^` = start of line.'},

{q:'Which `grep` option shows the line NUMBER of each matching line?',
 o:['`grep -c pattern file`','`grep -n pattern file`','`grep -l pattern file`','`grep -v pattern file`'],
 a:1,t:3,s:'3.2',src:'pdf',
 e:'`grep -n` shows **line numbers** before each matching line. `-c` = count of matching lines, `-l` = files with matches, `-v` = invert (non-matching lines), `-i` = case-insensitive.'},

{q:'What is a "filter" in the context of Linux command-line pipes?',
 o:['A command that blocks certain output','An intermediate command that receives, transforms, and outputs data in a pipe chain','A firewall rule applied to network traffic','A grep pattern that excludes matches'],
 a:1,t:3,s:'3.2',src:'pdf',
 e:'PDF 3.2: A **filter** is an intermediate command in a pipe chain that **receives input, modifies it, and outputs the result**. Examples: `grep`, `sort`, `cut`, `wc`, `head`, `tail`. They transform data flowing through the pipeline.'},

{q:'Type the command to redirect BOTH stdout and stderr to a file called `all.log`:',
 fill:['command &> all.log','command > all.log 2>&1'],
 t:3,s:'3.2',src:'pdf',type:'fill',
 e:'**`command &> all.log`** redirects both stdout and stderr to `all.log`. The equivalent classic syntax is `command > all.log 2>&1`. The `&>` shorthand works in Bash.'},

// ── 3.3 Scripts — new tricky questions ──
{q:'In script1.sh, running `./script1.sh cake` (lowercase) outputs:',
 o:['"here\'s your cake!"','An empty line','Nothing — the script silently succeeds','"no cake for you!"'],
 a:3,t:3,s:'3.3',src:'pdf',
 e:'PDF 3.3 Answer: The script checks `grep "^[A-Z]*$"` (all uppercase). "cake" is lowercase, so grep FAILS (exit code 1). The script then echoes **"no cake for you!"** and exits with code 2.'},

{q:'In script1.sh, running `./script1.sh CAKE` (uppercase) outputs:',
 o:['"no cake for you!" with exit code 2','"here\'s your cake!" with exit code 0','Nothing — the script silently fails','An error about missing arguments'],
 a:1,t:3,s:'3.3',src:'pdf',
 e:'PDF 3.3 Answer: "CAKE" matches `^[A-Z]*$` (all uppercase letters). grep succeeds (exit 0). The script echoes **"here\'s your cake!"** and exits with code **0** (success).'},

{q:'The special variable `$@` in a Bash script contains:',
 o:['The current process ID','The exit code of the last command','All positional arguments as separate words','The number of arguments passed'],
 a:2,t:3,s:'3.3',src:'pdf',
 e:'PDF 3.3: **`$@`** contains **all positional arguments as separate words** (array). `$*` is similar but treats all args as one string. `$#` = number of args, `$$` = PID, `$?` = last exit code.'},

{q:'What does `exit 2` in a shell script typically indicate?',
 o:['Success (exit code 2 means OK)','A general error','An invalid argument or usage error','The script was interrupted by the user'],
 a:2,t:3,s:'3.3',src:'pdf',
 e:'PDF 3.3: By convention: `exit 0` = success, `exit 1` = general error, **`exit 2`** = **invalid argument/usage error**. Using different exit codes allows callers to determine the specific cause of failure.'},

{q:'The `if [ $# -lt 1 ]` condition in a script is true when:',
 o:['The number of arguments is less than 1 (zero arguments)','The first argument is less than 1','There is more than 1 argument','The script filename has fewer than 1 character'],
 a:0,t:3,s:'3.3',src:'pdf',
 e:'PDF 3.3: `$#` = number of arguments. `-lt` = less than. So `[ $# -lt 1 ]` is true when **fewer than 1 argument is passed** (i.e., zero arguments). `-eq` = equal, `-ne` = not equal, `-gt` = greater than, `-ge` = greater or equal.'},

{q:'What does the `shift` command do in a Bash script?',
 o:['Moves the script to the background','Removes the first positional parameter, shifting $2→$1, $3→$2, etc.','Shifts the output to stderr','Changes the directory to the script\'s location'],
 a:1,t:3,s:'3.3',src:'pdf',
 e:'PDF 3.3: **`shift`** removes the first positional parameter (`$1`), shifting all others left: `$2` becomes `$1`, `$3` becomes `$2`, etc. Useful for processing arguments one by one.'},

// ── 2.1 Command Line — more tricky questions ──
{q:'What does `type ls` tell you about the `ls` command?',
 o:['Shows the ls manual page','Shows whether ls is a builtin, alias, or external command file','Lists all ls options','Shows the ls version number'],
 a:1,t:2,s:'2.1',src:'pdf',
 e:'PDF 2.1: **`type command`** reveals what a command IS: shell builtin, function, alias, or external file path. `type ls` shows something like `ls is /bin/ls`. `type cd` shows `cd is a shell builtin`.'},

{q:'What is the result of `touch "$USER"` when logged in as `alice`?',
 o:['Creates a file named $USER literally','Creates a file named alice','Updates the timestamp of the file called $USER','Error: cannot use variables in filenames'],
 a:1,t:2,s:'2.1',src:'pdf',
 e:'PDF 2.1 Answer: Double quotes allow variable expansion. `$USER` expands to the current username (`alice`), so **`touch alice`** is executed — creating a file named `alice`.'},

{q:'What does `touch \'touch\'` create?',
 o:['An error — cannot use a command name as filename','Runs the touch command on itself','A file literally named `touch`','A symbolic link to the touch command'],
 a:2,t:2,s:'2.1',src:'pdf',
 e:'PDF 2.1 Answer: Single quotes prevent expansion. `\'touch\'` is interpreted as the **literal string `touch`**. The command creates **a file named `touch`** in the current directory — not a command execution.'},

// ── 2.3 Directories — more tricky questions ──
{q:'Which `ls` option shows the directory ITSELF rather than its contents?',
 o:['`ls -a dir/`','`ls -l dir/`','`ls -d dir/`','`ls -r dir/`'],
 a:2,t:2,s:'2.3',src:'pdf',
 e:'PDF 2.3: **`ls -d dir/`** shows the directory entry itself (not its contents). Combined with `-l`: `ls -ld dir/` shows permissions, owner, size of the directory itself — as used when checking directory permissions.'},

{q:'What does `ls -lh` display compared to `ls -l`?',
 o:['Hidden files in addition to regular files','File sizes in human-readable format (K, M, G)','Long listing with inode numbers','Long listing sorted by modification time'],
 a:1,t:2,s:'2.3',src:'pdf',
 e:'`ls -lh` adds **human-readable sizes** to the long listing. Instead of `712340` bytes it shows `696K`. `-h` applies to `-l`; without `-l`, `-h` has no effect. `-i` shows inodes, `-t` sorts by time.'},

// ── 2.2 Help — fill-in ──
{q:'Which command searches man page descriptions for a keyword? (type the base command name)',
 fill:['apropos','man -k'],
 t:2,s:'2.2',src:'pdf',type:'fill',
 e:'**`apropos keyword`** (equivalent to `man -k keyword`) searches man page **name and description** fields for the keyword. Useful when you don\'t know the exact command name.'},

// ── 1.1 extra realistic LPI-style questions ──
{q:'Which command shows the Raspberry Pi\'s GPIO pin interface?',
 o:['It does not have one','The GPIO pins are accessed via /dev/gpio','Raspberry Pi has General Purpose Input-Output (GPIO) pins for hardware development','GPIO requires Windows drivers'],
 a:2,t:1,s:'1.1',src:'pdf',
 e:'PDF 1.1: The Raspberry Pi has **GPIO** (General Purpose Input-Output) pins used to attach electronic devices and expansion boards. This enables hardware development and prototyping beyond what a normal computer supports.'},

{q:'Kali Linux is described in the PDF as:',
 o:['A long-term support distribution for servers','A distribution providing an environment for exploiting software vulnerabilities, used by penetration testers','A mobile-only Linux distribution','A lightweight distribution for containers'],
 a:1,t:1,s:'1.1',src:'pdf',
 e:'PDF 1.1: **Kali Linux** provides an environment for **exploiting software vulnerabilities**, mainly used by penetration testers and security professionals. It is an independent distribution, not a RHEL or Debian derivative in the traditional sense.'},

// ── 1.2 More package management ──
{q:'The `dpkg` command differs from `apt-get` in that:',
 o:['dpkg only works on Red Hat systems','dpkg operates on individual package files and does not resolve dependencies automatically','dpkg can only remove packages, not install','dpkg requires root but apt-get does not'],
 a:1,t:1,s:'1.2',src:'pdf',
 e:'PDF 1.2: **`dpkg`** operates on **individual .deb package files** and does not resolve dependencies. **`apt-get`/`apt`** work with repositories, can download packages, and automatically handle dependencies.'},

{q:'What does `apt-cache search figlet` do?',
 o:['Installs the figlet package','Searches the local apt cache for packages matching "figlet"','Removes the figlet package','Shows installed packages'],
 a:1,t:1,s:'1.2',src:'pdf',
 e:'PDF 1.2: **`apt-cache search keyword`** (or `apt search keyword`) **searches the package repository** for packages whose name or description contains the keyword. Does not install anything.'},

// ── 5.1 Security — more tricky/trap questions ──
{q:'Why is the root user\'s home directory `/root` instead of `/home/root`?',
 o:['Historical accident in Unix design','Root needs access to its home even when /home is unmounted or unavailable','Root cannot access the /home filesystem','It is shorter to type'],
 a:1,t:5,s:'5.1',src:'pdf',
 e:'PDF 5.1 Answer: Root\'s home is `/root` (not `/home/root`) because root must be fully functional **even when `/home` is not available** — for example, during filesystem troubleshooting or emergency recovery.'},

{q:'What is the difference between `last` and `lastb`?',
 o:['`last` shows recent files; `lastb` shows recent binaries','`last` shows successful logins; `lastb` shows failed login attempts','`last` is for root; `lastb` is for regular users','`last` shows processes; `lastb` shows bad processes'],
 a:1,t:5,s:'5.1',src:'pdf',
 e:'PDF 5.1/4.3: **`last`** reads `/var/log/wtmp` — **successful** login history. **`lastb`** reads `/var/log/btmp` — **bad/failed** login attempts. Both show timestamp, terminal, and source.'},

{q:'The `w` command shows more information than `who`. What extra details does `w` include? (Choose two.)',
 o:['Encrypted user passwords','System uptime and load averages','User\'s last password change date','CPU utilization per user session','The user\'s primary group'],
 a:[1,3],t:5,s:'5.1',src:'pdf',type:'multi',
 e:'PDF 5.1: **`w`** shows everything `who` shows PLUS: **system uptime and load averages** (top line) AND **per-user CPU times** (JCPU, PCPU columns) and current command. `who` only shows user, terminal, login time.'},

// ── 5.2 Users/Groups — trap questions ──
{q:'The `/etc/gshadow` file format has how many colon-delimited fields?',
 o:['3','4','7','9'],
 a:1,t:5,s:'5.2',src:'pdf',
 e:'PDF 5.2: `/etc/gshadow` has **4 fields**: `GroupName:EncryptedPassword:Administrators:Members`. `/etc/group` also has 4 fields. `/etc/passwd` has 7. `/etc/shadow` has 9.'},

{q:'In `/etc/group`, is the primary group of a user usually listed in the group\'s member field?',
 o:['Yes, always','No — when a group is a user\'s primary group, the user is typically NOT listed in that group\'s member field','Only if the user was manually added','Only for system groups'],
 a:1,t:5,s:'5.2',src:'pdf',
 e:'PDF 5.2: When a group is a user\'s **primary group** (defined in `/etc/passwd`), the user is usually **NOT listed** in the group\'s member field in `/etc/group`. Listing them there is redundant — it doesn\'t change functionality but creates confusion.'},

{q:'What does `useradd -s /sbin/nologin username` create?',
 o:['A user who can only log in via SSH','A user account with no valid login shell — cannot start an interactive shell','A system account with root privileges','A user who can only use FTP'],
 a:1,t:5,s:'5.2',src:'pdf',
 e:'PDF 5.1/5.2: `/sbin/nologin` is an invalid shell that **prevents interactive login**. Used for service accounts that need user entries for running daemons but should not be able to log in.'},

// ── 5.3 Permissions — tricky/edge cases ──
{q:'A file has permissions `-rwxr-xr-x 1 root root`. A regular user tries to delete it. What happens?',
 o:['Success — the user has execute permission','Failure — the user cannot delete the file because they do not own it and lack write permission on it','Success — anyone with read permission can delete','Failure — only root can delete any file'],
 a:1,t:5,s:'5.3',src:'pdf',
 e:'PDF 5.3: To **delete** a file, you need **write permission on the DIRECTORY containing the file**, not on the file itself. Since the user lacks write on the directory, deletion fails. Ownership of the file matters for modification, not deletion.'},

{q:'An uppercase `S` in the SUID position (`-rwSr-xr-x`) means:',
 o:['The SUID bit is set AND the owner has execute permission','The SUID bit is set BUT the owner does NOT have execute permission','Secure mode is enabled for this file','The file requires superuser to execute'],
 a:1,t:5,s:'5.3',src:'pdf',
 e:'PDF 5.3 Explorational Answer: Uppercase **`S`** = SUID is set but **execute (`x`) is NOT set** for the owner. Lowercase `s` = SUID set AND execute set. The same logic applies to SGID (`s`/`S`) and sticky bit (`t`/`T`).'},

{q:'What does `chmod -R u+rwx directory/` do differently than `chmod u+rwx directory/`?',
 o:['Nothing different — they are identical','The -R version changes permissions on the directory and ALL files/subdirectories within it','The -R version only changes hidden files','The -R version resets all permissions first'],
 a:1,t:5,s:'5.3',src:'pdf',
 e:'PDF 5.3: **`-R`** (recursive) applies the permission change to the **directory and everything inside it** (all files and subdirectories). Without `-R`, only the directory itself is affected. Use with caution on large trees.'},

{q:'In the output of `ls -l`, what does the number immediately after the permissions field represent?',
 o:['The file size in bytes','The inode number','The hard link count','The owner\'s UID number'],
 a:2,t:5,s:'5.3',src:'pdf',
 e:'PDF 5.4: The number after permissions is the **hard link count**. A new regular file has count 1. Each hard link added increases it. Directories start at 2 (for `.` and `..` entries).'},

// ── 5.4 Special Directories — trap questions ──
{q:'The `/run` directory:',
 o:['Stores permanently installed run-time scripts','Contains run-time variable data (like PID files) and must be cleared at system boot','Is a symlink to /var/run on all modern systems','Stores the current user\'s running applications'],
 a:1,t:5,s:'5.4',src:'pdf',
 e:'PDF 5.4: `/run` contains **run-time variable data** (PID files, sockets, etc.) used by running processes. Per FHS, **it must be cleared at system boot**. On modern systems, `/var/run` is often a symbolic link pointing to `/run`.'},

{q:'Which temporary directory is cleared at system boot AND cleared between runs? (Choose two.)',
 o:['/tmp','/var/tmp','/run','/proc','/dev'],
 a:[0,2],t:5,s:'5.4',src:'pdf',type:'multi',
 e:'PDF 5.4: **`/tmp`** is recommended to be cleared at boot (FHS says "should"), and **`/run`** must be cleared at boot (FHS says "must"). `/var/tmp` persists between reboots. `/proc` and `/dev` are virtual filesystems regenerated at boot.'},

{q:'What is the relationship between an inode number and hard links?',
 o:['Each hard link has a unique inode number','All hard links to the same file share the same inode number','Inodes track symbolic links only','The inode number changes every time a hard link is added'],
 a:1,t:5,s:'5.4',src:'pdf',
 e:'PDF 5.4: **All hard links to the same file share the same inode number** — they point to the same physical data on disk. `ls -i` shows inode numbers. The link count in `ls -l` reflects the number of hard links to that inode.'},

// ── Fill-in — new commands not yet covered ──
{q:'The command to list ALL files including hidden files in long format is: (type the full command)',
 fill:['ls -la','ls -al','ls -la .','ls -al .'],
 t:2,s:'2.3',src:'pdf',type:'fill',
 e:'**`ls -la`** (or `ls -al`) — combines `-l` (long format) and `-a` (all files including hidden dotfiles). Essential for seeing all configuration files in home directories.'},

{q:'The command to view the last 20 lines of a file is: (use the appropriate option)',
 fill:['tail -n 20 file','tail -20 file','tail -n 20'],
 t:3,s:'3.2',src:'pdf',type:'fill',
 e:'**`tail -n 20 file`** (or `tail -20 file`) shows the last 20 lines. Default is 10. Similarly `head -n 20` shows first 20 lines. `tail -f` follows the file as it grows.'},

{q:'Type the command to display a list of available network interfaces with IP addresses:',
 fill:['ip addr show','ip addr','ip a','ip address show'],
 t:4,s:'4.4',src:'pdf',type:'fill',
 e:'**`ip addr show`** (or `ip addr` or `ip a`) displays all network interfaces with their IP addresses. The older deprecated equivalent is `ifconfig`.'},

{q:'The command to create a new group named `developers` is: (type the full command)',
 fill:['groupadd developers'],
 t:5,s:'5.2',src:'pdf',type:'fill',
 e:'**`groupadd developers`** creates the group. To specify GID: `groupadd -g 1090 developers`. Groups must exist before users can be added to them with `useradd -G`.'},

{q:'The command to list contents of a tar archive `backup.tar` without extracting: (type it)',
 fill:['tar tf backup.tar','tar -tf backup.tar','tar tvf backup.tar'],
 t:3,s:'3.1',src:'pdf',type:'fill',
 e:'**`tar tf backup.tar`** — `t` = list (table of contents), `f` = specify archive file. Add `v` for verbose output (`tar tvf`) to see permissions, sizes, and timestamps.'},

{q:'To compress a file `data.txt` using gzip, type the command:',
 fill:['gzip data.txt'],
 t:3,s:'3.1',src:'pdf',type:'fill',
 e:'**`gzip data.txt`** compresses the file, creating `data.txt.gz` and deleting the original. Use `gunzip data.txt.gz` to decompress. `gzip -k data.txt` keeps the original (keep option).'},

{q:'Type the command to count the number of LINES in a file named `access.log`:',
 fill:['wc -l access.log','wc -l'],
 t:3,s:'3.2',src:'pdf',type:'fill',
 e:'**`wc -l access.log`** counts lines. `wc` (word count) options: `-l` = lines, `-w` = words, `-c` = bytes/characters. Can also pipe: `cat access.log | wc -l`.'},

{q:'Type the command that shows only lines in `hosts.txt` that do NOT contain "localhost":',
 fill:['grep -v localhost hosts.txt','grep -v "localhost" hosts.txt'],
 t:3,s:'3.2',src:'pdf',type:'fill',
 e:'**`grep -v localhost hosts.txt`** — `-v` inverts the match, showing lines that do **NOT** match the pattern. Useful for excluding known entries from output.'},

// ══════════════════════════════════════════════════════
//  ADDITIONAL QUESTIONS — External (validated against PDF)
// ══════════════════════════════════════════════════════

// --- 1.3 Licensing (extra) ---
{q:'Which license requires that any modified version of the software must be distributed under the SAME license?',
 o:['MIT License','Apache 2.0','GNU GPL','BSD 2-Clause'],
 a:2,t:1,s:'1.3',src:'ext',
 e:'The **GNU GPL (General Public License)** is a strong copyleft license: any modified or derivative work must also be released under the GPL. This is called "share-alike" or "copyleft" requirement.'},

{q:'A developer releases a library under the LGPL. A proprietary application can:',
 o:['Never link to it','Link to it dynamically without releasing its own source','Only use it if the application is also open source','Freely relicense the LGPL code as MIT'],
 a:1,t:1,s:'1.3',src:'ext',
 e:'**LGPL (Lesser GPL)** allows proprietary software to link to the library dynamically without being required to release its own source code. This makes LGPL suitable for shared libraries used in closed-source products.'},

{q:'Which of the following is TRUE about the BSD 2-Clause license?',
 o:['It requires derivative works to use the same license','It forbids commercial use','It is a permissive license with minimal restrictions','It is a copyleft license like the GPL'],
 a:2,t:1,s:'1.3',src:'ext',
 e:'**BSD 2-Clause** is a permissive license: you can use, modify, and redistribute (even in proprietary products) as long as you retain the copyright notice and disclaimer. No copyleft requirement.'},

// --- 1.4 ICT Skills (extra) ---
{q:'In a Linux terminal, pressing `Ctrl+C` does what?',
 o:['Copies selected text','Pastes from clipboard','Sends SIGINT to interrupt the running process','Closes the terminal window'],
 a:2,t:1,s:'1.4',src:'ext',
 e:'**`Ctrl+C`** sends **SIGINT** (signal 2) to the foreground process, requesting it to terminate. It is the standard way to interrupt a running command. It does NOT copy text in a terminal (use `Ctrl+Shift+C` for copy on most terminals).'},

{q:'Which keyboard shortcut moves the cursor to the BEGINNING of the current command line?',
 o:['Ctrl+E','Ctrl+A','Ctrl+U','Ctrl+K'],
 a:1,t:1,s:'1.4',src:'ext',
 e:'**`Ctrl+A`** moves the cursor to the beginning of the line (like the Home key). **`Ctrl+E`** moves to the end. **`Ctrl+U`** deletes from cursor to beginning. **`Ctrl+K`** deletes from cursor to end.'},

{q:'What does `Ctrl+D` do when typed in an empty terminal prompt?',
 o:['Deletes the current line','Sends EOF, which logs out or closes the shell','Scrolls the terminal down','Detaches from the current process'],
 a:1,t:1,s:'1.4',src:'ext',
 e:'**`Ctrl+D`** sends **EOF (End Of File)**. On an empty prompt, this signals the shell there is no more input, effectively logging out or closing the terminal session. On a running program, it closes stdin.'},

// --- 2.1 Command Line Basics (extra) ---
{q:'What is the purpose of the `type` command in bash?',
 o:['Displays the contents of a file','Shows whether a command is a shell builtin, alias, or external binary','Sets the file type for a new file','Checks the data type of a variable'],
 a:1,t:2,s:'2.1',src:'ext',
 e:'**`type ls`** tells you where a command comes from: shell builtin, function, alias, or path to an external binary (e.g. `/bin/ls`). Useful to understand command resolution and diagnose alias conflicts.'},

{q:'Which command shows the full path of an executable that would be run by typing its name?',
 o:['locate','find','which','whereis'],
 a:2,t:2,s:'2.1',src:'ext',
 e:'**`which ls`** searches `$PATH` and prints the full path of the first matching executable (e.g. `/bin/ls`). `whereis` finds binary, source, and manual pages. `locate` searches a database of all files.'},

{q:'In bash, what does `!!` expand to?',
 o:['The current process ID','The last argument of the previous command','The entire previous command','The exit code of the last command'],
 a:2,t:2,s:'2.1',src:'ext',
 e:'**`!!`** is a history expansion that substitutes the entire previous command. Useful for `sudo !!` when you forget to prefix a command with sudo. `!$` = last argument of previous command. `$!` = PID of last background process.'},

// --- 2.2 Getting Help (extra) ---
{q:'The `man` page section number 5 covers which type of documentation?',
 o:['System administration commands','C library functions','File formats and configuration files','Games'],
 a:2,t:2,s:'2.2',src:'ext',
 e:'Man page **section 5** = file formats and conventions (e.g. `/etc/passwd` format). Section 1 = user commands. Section 2 = system calls. Section 3 = C library. Section 8 = sysadmin commands.'},

{q:'Which command shows a one-line description of all man pages matching a keyword?',
 o:['man -k','man -a','man --list','man -p'],
 a:0,t:2,s:'2.2',src:'ext',
 e:'**`man -k keyword`** (equivalent to `apropos keyword`) searches the manual page names and short descriptions for the keyword and lists matching entries. Very useful when you do not know the exact command name.'},

{q:'To read the info page for the `ls` command, you type:',
 o:['info ls','man info ls','ls --info','help ls'],
 a:0,t:2,s:'2.2',src:'ext',
 e:'**`info ls`** opens the GNU Info documentation for `ls`. Info pages are often more detailed than man pages. Navigate with arrow keys, `n` (next), `p` (prev), `q` (quit). `help ls` works only for bash builtins.'},

// --- 2.3 Directories (extra) ---
{q:'What does `ls -lh` display differently compared to `ls -l`?',
 o:['Shows hidden files','Follows symbolic links','Displays file sizes in human-readable format (KB, MB)','Shows file ownership only'],
 a:2,t:2,s:'2.3',src:'ext',
 e:'**`-h`** (human-readable) formats file sizes with units: `1.2K`, `3.4M`, `1.1G` instead of raw byte counts. Always combine with `-l` which shows the size column.'},

{q:'Which command displays the total disk space used by a directory and its contents?',
 o:['df -h','ls -s','du -sh dirname','stat dirname'],
 a:2,t:2,s:'2.3',src:'ext',
 e:'**`du -sh dirname`** shows the total disk usage of a directory: `-s` = summary (one line total), `-h` = human-readable. `df` shows filesystem-level disk space, not individual directory sizes.'},

{q:'What is the output of `ls -d */` in a directory?',
 o:['Lists all files including hidden ones','Lists only directories in the current path','Lists files sorted by modification date','Lists files with their inode numbers'],
 a:1,t:2,s:'2.3',src:'ext',
 e:'**`ls -d */`** lists only subdirectories. The glob `*/` matches directory names (ending in `/`). `-d` tells `ls` to list directories themselves rather than their contents.'},

// --- 2.4 Creating/Moving/Deleting (extra) ---
{q:'Which command creates multiple nested directories in a single command?',
 o:['mkdir dir1 dir2','mkdir -p dir1/dir2/dir3','mkdirs dir1/dir2','mkdir -r dir1/dir2'],
 a:1,t:2,s:'2.4',src:'ext',
 e:'**`mkdir -p`** creates parent directories as needed. Without `-p`, `mkdir dir1/dir2/dir3` fails if `dir1` or `dir2` do not exist. With `-p`, all missing intermediate directories are created.'},

{q:'The `rm -rf` command is dangerous because:',
 o:['It only removes empty directories','It asks for confirmation before each file','It recursively deletes directories and files without prompting','It moves files to trash instead of deleting'],
 a:2,t:2,s:'2.4',src:'ext',
 e:'**`rm -rf`** = `-r` recursive (descends into subdirectories) + `-f` force (no confirmation, ignores nonexistent files). This combination silently and permanently deletes entire directory trees. There is no undo.'},

{q:'What is the difference between `mv file1 file2` and `cp file1 file2`?',
 o:['mv copies and keeps the original; cp moves it','mv renames/moves the file; cp creates a duplicate','Both do the same thing','mv requires root; cp does not'],
 a:1,t:2,s:'2.4',src:'ext',
 e:'**`mv`** moves or renames: the original is gone. **`cp`** copies: the original remains. To copy a directory recursively, use `cp -r`. `mv` works across the same filesystem instantly (renames inode); across filesystems it copies then deletes.'},

// --- 3.1 Archiving (extra) ---
{q:'Which tar option APPENDS files to an existing archive?',
 o:['-c','-r','-u','-x'],
 a:1,t:3,s:'3.1',src:'ext',
 e:'**`tar -r`** (append) adds files to an existing uncompressed tar archive. **`-c`** creates a new archive (overwriting). **`-u`** updates: only appends files newer than the copy in the archive. **`-x`** extracts.'},

{q:'To extract ONLY the file `etc/hosts` from `backup.tar.gz`, you use:',
 o:['tar xzf backup.tar.gz etc/hosts','tar xzf backup.tar.gz --only etc/hosts','tar xzf backup.tar.gz -e etc/hosts','gunzip backup.tar.gz && tar xf backup.tar etc/hosts'],
 a:0,t:3,s:'3.1',src:'ext',
 e:'**`tar xzf archive.tar.gz path/to/file`** extracts a specific file. `x`=extract, `z`=gunzip, `f`=file. The path must match exactly as stored in the archive (check with `tar tzf`).'},

{q:'Which compression tool typically achieves the BEST compression ratio?',
 o:['gzip','bzip2','xz','zip'],
 a:2,t:3,s:'3.1',src:'ext',
 e:'**xz** generally achieves the best compression ratio (smallest output) but is slowest. **bzip2** is better than gzip but slower. **gzip** is fastest with moderate compression. **zip** is for cross-platform compatibility. For archives: `.tar.xz` > `.tar.bz2` > `.tar.gz`.'},

{q:'What does `tar czf archive.tar.gz dir/` do?',
 o:['Extracts dir/ from archive.tar.gz','Creates a gzip-compressed archive of dir/','Creates an uncompressed archive of dir/','Lists the contents of archive.tar.gz'],
 a:1,t:3,s:'3.1',src:'ext',
 e:'**`c`**=create, **`z`**=compress with gzip, **`f`**=file name follows. So `tar czf archive.tar.gz dir/` creates a new gzip-compressed tar archive containing `dir/` and all its contents.'},

// --- 3.2 Searching (extra) ---
{q:'Which `grep` option makes the search CASE-INSENSITIVE?',
 o:['-c','-i','-n','-v'],
 a:1,t:3,s:'3.2',src:'ext',
 e:'**`grep -i`** = case insensitive: matches `Error`, `error`, `ERROR`, etc. `-c` = count matching lines. `-n` = show line numbers. `-v` = invert match (show non-matching lines).'},

{q:'What does `grep -r "root" /etc/` do?',
 o:['Searches only /etc/root for the word "root"','Recursively searches all files in /etc/ for lines containing "root"','Replaces "root" with nothing in /etc/','Reverses the contents of /etc/'],
 a:1,t:3,s:'3.2',src:'ext',
 e:'**`grep -r pattern dir/`** recursively searches all files in the directory tree. Equivalent to `grep -r "root" /etc/` searches every readable file under `/etc/`. Add `-l` to show only filenames, not matching lines.'},

{q:'The command `cut -d: -f1 /etc/passwd` extracts:',
 o:['The password hash field','The home directory of each user','The first field (username) using : as delimiter','The last field of each line'],
 a:2,t:3,s:'3.2',src:'ext',
 e:'**`cut -d: -f1`** — `-d:` sets the delimiter to colon, `-f1` selects field 1. In `/etc/passwd`, fields are colon-separated: `username:x:uid:gid:comment:home:shell`. So `-f1` = username, `-f6` = home, `-f7` = shell.'},

{q:'Which command sorts the lines of a file in REVERSE order?',
 o:['sort -n','sort -r','sort -u','sort -k'],
 a:1,t:3,s:'3.2',src:'ext',
 e:'**`sort -r`** = reverse sort (Z→A or descending numerically). `-n` = numeric sort. `-u` = unique (remove duplicate lines). `-k` = sort by a specific field. Combine: `sort -rn` = reverse numeric sort.'},

{q:'What does `uniq -c` do when processing a sorted file?',
 o:['Removes all duplicate lines','Counts and prefixes each unique line with its occurrence count','Lists only lines appearing exactly once','Converts all lines to uppercase'],
 a:1,t:3,s:'3.2',src:'ext',
 e:'**`uniq -c`** prefixes each output line with the count of how many times it occurred. Input must be sorted first (duplicates must be adjacent). Common pattern: `sort file | uniq -c | sort -rn` to rank most frequent lines.'},

// --- 3.3 Scripts (extra) ---
{q:'In a bash script, what does `$0` contain?',
 o:['The first argument passed to the script','The exit code of the last command','The name of the script itself','The process ID of the script'],
 a:2,t:3,s:'3.3',src:'ext',
 e:'**`$0`** = name of the script as invoked. **`$1`, `$2`, ...** = positional arguments. **`$#`** = number of arguments. **`$@`** = all arguments as separate words. **`$$`** = PID of the current shell. **`$?`** = exit code of last command.'},

{q:'What is the correct syntax for an `if` statement in bash?',
 o:['if (condition) { commands }','if [ condition ]; then commands; fi','if condition: commands end','if condition then commands endif'],
 a:1,t:3,s:'3.3',src:'ext',
 e:'Bash `if` syntax: `if [ condition ]; then ... fi`. Note the spaces inside `[ ]` are **required**. `[` is actually a command. Modern alternative: `if [[ condition ]]; then ... fi` (bash extended test, more features, no word splitting).'},

{q:'In a bash `for` loop, `for i in 1 2 3; do echo $i; done` — how many times does the loop execute?',
 o:['1','2','3','Infinite'],
 a:2,t:3,s:'3.3',src:'ext',
 e:'The loop iterates once for each item in the list `1 2 3`, so **3 times**, printing 1, 2, and 3. The shell also supports `for i in $(seq 1 10)`, `for i in {1..10}`, or C-style `for ((i=1; i<=10; i++))`.'},

{q:'What does `chmod +x script.sh` do?',
 o:['Makes the file read-only','Sets the SUID bit on the file','Adds execute permission for all users (owner, group, others)','Removes write permission from the file'],
 a:2,t:3,s:'3.3',src:'ext',
 e:'**`chmod +x`** adds execute permission for **owner, group, and others** (equivalent to `chmod a+x`). Without execute permission, a shell script cannot be run directly (`./script.sh`). The shebang line (`#!/bin/bash`) tells the kernel which interpreter to use.'},

{q:'A script exits with code 0. This means:',
 o:['The script produced no output','The script failed','The script succeeded (no error)','The script was interrupted'],
 a:2,t:3,s:'3.3',src:'ext',
 e:'By Unix convention, **exit code 0 = success**. Any non-zero exit code indicates an error or abnormal condition. `$?` holds the exit code. `exit 0` in a script signals success; `exit 1` (or any non-zero) signals failure. Used in conditionals: `if command; then ...`.'},

// --- 4.1 Choosing OS (extra) ---
{q:'What is the main difference between a "rolling release" and a "point release" Linux distribution?',
 o:['Rolling release requires paid subscription; point release is free','Rolling release receives continuous updates without major version upgrades; point release has scheduled major versions','Rolling release is only for servers; point release is for desktops','Rolling release uses RPM packages; point release uses DEB packages'],
 a:1,t:4,s:'4.1',src:'ext',
 e:'**Rolling release** (e.g. Arch, openSUSE Tumbleweed): packages are updated continuously, no major version numbers. **Point release** (e.g. Ubuntu, Debian): releases have version numbers (18.04, 20.04) with a fixed package set, updated at each new release.'},

{q:'Which Linux distribution is the upstream source for both CentOS Stream and RHEL?',
 o:['Fedora','Debian','openSUSE','Ubuntu'],
 a:0,t:4,s:'4.1',src:'ext',
 e:'**Fedora** is the community upstream for **RHEL (Red Hat Enterprise Linux)**. Fedora gets new features first; tested features graduate to RHEL. CentOS Stream sits between Fedora and RHEL. Ubuntu is based on Debian.'},

// --- 4.2 Hardware (extra) ---
{q:'Which command displays CPU architecture information including number of cores and threads?',
 o:['cpuinfo','lscpu','cat /proc/cpuinfo only','dmesg | grep cpu'],
 a:1,t:4,s:'4.2',src:'ext',
 e:'**`lscpu`** provides a formatted summary: architecture, CPU model, socket/core/thread count, cache sizes, NUMA nodes. For raw data, `cat /proc/cpuinfo` shows per-CPU details. `lshw -class processor` also works.'},

{q:'What does the `lsblk` command display?',
 o:['Running processes and their block I/O','Block devices (disks and partitions) in a tree view','Loaded kernel modules','Network interfaces and their addresses'],
 a:1,t:4,s:'4.2',src:'ext',
 e:'**`lsblk`** lists block devices (hard drives, SSDs, USB drives, partitions) in a tree format showing device names, sizes, mount points, and type. Use `lsblk -f` to also show filesystem type and UUID.'},

{q:'In Linux, USB and PCI devices can be listed with which commands? (Select TWO)',
 o:['lsusb','lspci','lsdev','lshw only'],
 a:[0,1],t:4,s:'4.2',src:'ext',type:'multi',
 e:'**`lsusb`** lists all USB buses and devices. **`lspci`** lists all PCI/PCIe devices. Both are from the `usbutils` and `pciutils` packages. They show vendor/device IDs, which helps identify hardware and find driver information.'},

// --- 4.3 Data Storage (extra) ---
{q:'What filesystem type is used by most modern Linux distributions for the root partition by default?',
 o:['ext2','FAT32','ext4','NTFS'],
 a:2,t:4,s:'4.3',src:'ext',
 e:'**ext4** (Fourth Extended Filesystem) is the most widely used default on Linux. It supports journaling (crash recovery), large files (up to 16TB), large volumes, and has been the standard since ~2008. Some distros now default to btrfs or xfs.'},

{q:'The `/etc/fstab` file is used to:',
 o:['Store user passwords','Define filesystem mounts that happen automatically at boot','List installed packages','Configure network interfaces'],
 a:1,t:4,s:'4.3',src:'ext',
 e:'**`/etc/fstab`** (filesystem table) defines what to mount, where, with what options, and at what order during boot. Each line: `device mountpoint fstype options dump pass`. The `mount -a` command mounts all entries in fstab.'},

{q:'Which directory contains runtime variable data such as process IDs (PIDs) and sockets?',
 o:['/tmp','/var/run','/proc','/sys'],
 a:1,t:4,s:'4.3',src:'ext',
 e:'**`/var/run`** (or `/run` on modern systems — often symlinked) stores runtime data: PID files, sockets, lock files. This data is valid only while the system is running. `/tmp` is for temporary files. `/proc` is a virtual filesystem for process/kernel info.'},

{q:'What is the purpose of swap space in Linux?',
 o:['It is used to store temporary files during compilation','It extends virtual memory by using disk space when RAM is full','It caches recently accessed disk data for faster reads','It stores the kernel image during boot'],
 a:1,t:4,s:'4.3',src:'ext',
 e:'**Swap** acts as overflow for RAM: when physical memory is full, the kernel moves less-used pages to swap (disk). This prevents out-of-memory crashes but is much slower than RAM. Swap can be a dedicated partition or a swap file.'},

// --- 4.4 Networking (extra) ---
{q:'Which command shows the current routing table on Linux?',
 o:['netstat -r or ip route','ifconfig -r','route only (deprecated)','ip link show'],
 a:0,t:4,s:'4.4',src:'ext',
 e:'**`ip route`** (or `ip r`) shows the routing table — modern tool. **`netstat -r`** and the old **`route`** command also work but are deprecated. The routing table tells the kernel which gateway to use for each destination network.'},

{q:'What is the loopback address in IPv4, and what is its purpose?',
 o:['192.168.0.1 — default gateway address','127.0.0.1 — used to communicate with the local machine itself','10.0.0.1 — private network address','255.255.255.255 — broadcast address'],
 a:1,t:4,s:'4.4',src:'ext',
 e:'**127.0.0.1** (or `localhost`) is the IPv4 loopback address. Traffic sent to it never leaves the machine — it loops back to the same host. Used to test network software locally. The loopback interface is `lo`. IPv6 equivalent: `::1`.'},

{q:'A host has IP address `192.168.1.50` with subnet mask `255.255.255.0`. What is the network address?',
 o:['192.168.1.0','192.168.0.0','192.168.1.50','192.168.1.255'],
 a:0,t:4,s:'4.4',src:'ext',
 e:'With mask `255.255.255.0` (/24), the network address is the host address ANDed with the mask: `192.168.1.50 AND 255.255.255.0` = **192.168.1.0**. The broadcast address is `192.168.1.255`. Valid hosts: `.1` to `.254`.'},

{q:'Which protocol resolves domain names (e.g. www.lpi.org) to IP addresses?',
 o:['DHCP','DNS','ARP','NAT'],
 a:1,t:4,s:'4.4',src:'ext',
 e:'**DNS (Domain Name System)** translates human-readable hostnames to IP addresses. **DHCP** assigns IP addresses automatically to hosts. **ARP** resolves IP to MAC address on the local network. **NAT** maps private IPs to public IPs.'},

// --- 5.1 Security (extra) ---
{q:'Which file contains the encrypted password hashes on modern Linux systems?',
 o:['/etc/passwd','/etc/shadow','/etc/group','/etc/security'],
 a:1,t:5,s:'5.1',src:'ext',
 e:'**`/etc/shadow`** stores password hashes and is readable only by root. **`/etc/passwd`** is world-readable but now contains `x` in the password field, meaning the actual hash is in shadow. This separation prevents non-root users from running offline hash attacks.'},

{q:'What does the `last` command show?',
 o:['Currently logged-in users','The last 10 commands run','Login history from /var/log/wtmp','Failed login attempts'],
 a:2,t:5,s:'5.1',src:'ext',
 e:'**`last`** reads `/var/log/wtmp` and shows login/logout history for all users and reboots. **`lastb`** shows failed login attempts (from `/var/log/btmp`). **`who`** or **`w`** shows currently logged-in users.'},

{q:'The `sudo` command allows:',
 o:['Switching to the root user permanently','Running a single command with elevated (root or other user) privileges','Granting file ownership to another user','Encrypting a command before execution'],
 a:1,t:5,s:'5.1',src:'ext',
 e:'**`sudo command`** executes ONE command with the privileges of another user (root by default), as configured in `/etc/sudoers`. It does not open a persistent root session. `sudo -i` or `sudo su` can open a root shell, but that is a separate step.'},

// --- 5.2 Users & Groups (extra) ---
{q:'Which file defines which users are members of each group?',
 o:['/etc/passwd','/etc/shadow','/etc/group','/etc/sudoers'],
 a:2,t:5,s:'5.2',src:'ext',
 e:'**`/etc/group`** format: `groupname:x:GID:member1,member2,...`. The last field is a comma-separated list of users who are supplementary members. A user also belongs to their primary group defined in `/etc/passwd` (the GID field).'},

{q:'To add an existing user `alice` to the group `docker` without removing her from other groups, use:',
 o:['usermod -g docker alice','usermod -aG docker alice','groupadd docker alice','adduser docker alice'],
 a:1,t:5,s:'5.2',src:'ext',
 e:'**`usermod -aG groupname username`** — `-a` = append (do NOT remove existing groups), `-G` = supplementary groups. Without `-a`, `-G` replaces all supplementary groups. Always use `-aG` together when adding to a group.'},

{q:'Which command locks a user account, preventing password-based login?',
 o:['userdel -l username','usermod -L username','passwd -e username','chage -l username'],
 a:1,t:5,s:'5.2',src:'ext',
 e:'**`usermod -L username`** locks the account by prefixing the password hash with `!` in `/etc/shadow`. The account still exists and SSH key-based login may still work. `usermod -U` unlocks. `passwd -l` also locks; `passwd -u` unlocks.'},

// --- 5.3 Permissions (extra) ---
{q:'What permissions does `chmod 640 file.txt` set?',
 o:['rw-rw---- (owner=rw, group=rw, others=none)','rw-r----- (owner=rw, group=r, others=none)','rwxr----- (owner=rwx, group=r, others=none)','rw-r--r-- (owner=rw, group=r, others=r)'],
 a:1,t:5,s:'5.3',src:'ext',
 e:'Octal 6=110=rw-, 4=100=r--, 0=000=---. So **640** = `rw-r-----`: owner can read/write, group can read only, others have no access. Common for config files with sensitive data that a group needs to read.'},

{q:'The sticky bit on a DIRECTORY (e.g. /tmp) means:',
 o:['Only root can create files in it','Files can only be deleted by their owner (or root)','All files in it are executable','The directory cannot be renamed'],
 a:1,t:5,s:'5.3',src:'ext',
 e:'**Sticky bit on a directory** (shown as `t` in `ls -l`): users can create files but can only delete their OWN files. Without it, any user with write permission on the directory could delete anyone else\'s files. Applied to `/tmp` and `/var/tmp`.'},

{q:'Which `ls -l` output indicates a file with the SUID bit set?',
 o:['-rwxrwxrwx','drwxr-xr-x','-rwsr-xr-x','-rwxr-xr-t'],
 a:2,t:5,s:'5.3',src:'ext',
 e:'**SUID** appears as `s` in the owner execute position: **`-rwsr-xr-x`**. When executed, the process runs with the owner\'s UID (typically root) instead of the caller\'s. Examples: `/usr/bin/passwd`, `/usr/bin/sudo`. Lowercase `s` = SUID+execute set; uppercase `S` = SUID set but no execute.'},

{q:'What does `chmod g+s directory/` do?',
 o:['Sets the sticky bit on the directory','Sets the SGID bit: new files inherit the directory\'s group','Removes execute permission from group','Grants full permissions to the group'],
 a:1,t:5,s:'5.3',src:'ext',
 e:'**SGID on a directory**: new files/subdirectories created inside inherit the **directory\'s group** rather than the creator\'s primary group. Essential for shared project directories where multiple users need consistent group ownership.'},

// --- 5.4 Special Directories (extra) ---
{q:'What is the difference between `/tmp` and `/var/tmp`?',
 o:['No difference; both are the same directory','/tmp is cleared on reboot; /var/tmp persists across reboots','/var/tmp requires root access; /tmp does not','/tmp is for system files; /var/tmp for user files'],
 a:1,t:5,s:'5.4',src:'ext',
 e:'**`/tmp`**: cleared at boot (or periodically by systemd-tmpfiles, typically 10 days). **`/var/tmp`**: persists across reboots; files are kept longer (default 30 days). Use `/tmp` for truly ephemeral data; `/var/tmp` when data needs to survive a reboot.'},

{q:'A symbolic link (symlink) differs from a hard link in that:',
 o:['Symlinks can only point to directories; hard links only to files','A symlink can point to a file on a DIFFERENT filesystem; a hard link cannot','Hard links use more disk space than symlinks','Symlinks cannot be created by regular users'],
 a:1,t:5,s:'5.4',src:'ext',
 e:'**Hard links** share the same inode — both names point to the same data blocks, so they must be on the same filesystem. **Symlinks** contain a path string — they can point across filesystems, to directories, and even to non-existent targets (dangling symlink).'},

{q:'Which command creates a symbolic link named `link.txt` pointing to `original.txt`?',
 o:['ln original.txt link.txt','ln -s original.txt link.txt','ln -h original.txt link.txt','link original.txt link.txt'],
 a:1,t:5,s:'5.4',src:'ext',
 e:'**`ln -s target linkname`** creates a symbolic link. Without `-s`, `ln` creates a hard link. Convention: `ln -s /path/to/original /path/to/link`. The link name is the second argument. `ls -l` shows symlinks as `lrwxrwxrwx` with `-> target`.'},

// ── Fill-in additions ─────────────────────────────────────────
{q:'Type the command to display the LAST 20 lines of `syslog`:',
 fill:['tail -n 20 /var/log/syslog','tail -20 /var/log/syslog','tail -n 20 syslog'],
 t:4,s:'4.3',src:'ext',type:'fill',
 e:'**`tail -n 20 filename`** shows the last 20 lines. Default without `-n` shows last 10 lines. `tail -f filename` follows the file live (useful for log monitoring). Opposite: `head -n 20` shows first 20 lines.'},

{q:'Type the command to show all ENVIRONMENT variables in the current shell:',
 fill:['env','printenv','export'],
 t:2,s:'2.1',src:'ext',type:'fill',
 e:'**`env`** or **`printenv`** display all environment variables. **`export`** (with no arguments) shows exported variables in bash. To set: `export MYVAR=value`. To unset: `unset MYVAR`. `$PATH` is the most important environment variable.'},

{q:'Type the command to find all files named `*.log` under `/var/log/`:',
 fill:['find /var/log/ -name "*.log"','find /var/log -name "*.log"'],
 t:3,s:'3.2',src:'ext',type:'fill',
 e:'**`find /var/log/ -name "*.log"`** searches recursively from `/var/log/` for files whose name matches `*.log`. Add `-type f` to match only regular files (not directories). `-name` is case-sensitive; use `-iname` for case-insensitive.'},

{q:'Type the `chmod` command to set permissions `rwxr-xr-x` using octal notation:',
 fill:['chmod 755','chmod 755 filename'],
 t:5,s:'5.3',src:'ext',type:'fill',
 e:'**`chmod 755`** = rwxr-xr-x: owner=7(rwx), group=5(r-x), others=5(r-x). Common for executables and directories. 644 = rw-r--r-- (common for files). 700 = rwx------ (private directory). 600 = rw------- (private file).'},

{q:'To follow a log file in real time (new lines as they appear), type:',
 fill:['tail -f /var/log/syslog','tail -f'],
 t:4,s:'4.3',src:'ext',type:'fill',
 e:'**`tail -f filename`** (follow) monitors the file and prints new lines as they are appended. Press `Ctrl+C` to stop. `tail -F` also handles log rotation (file being renamed/recreated). Useful with `grep`: `tail -f syslog | grep error`.'},

{q:'Type the command to display the current user\'s username:',
 fill:['whoami'],
 t:5,s:'5.1',src:'ext',type:'fill',
 e:'**`whoami`** prints the effective username. `id` shows UID, GID, and all group memberships. `id -un` is equivalent to `whoami`. `who` and `w` show all logged-in users.'},

{q:'Type the command to change the owner of `file.txt` to user `alice`:',
 fill:['chown alice file.txt'],
 t:5,s:'5.3',src:'ext',type:'fill',
 e:'**`chown owner file`** changes file owner. `chown alice:staff file.txt` sets owner AND group. `chown -R alice dir/` recursively changes ownership of a directory tree. Only root can change file ownership.'},

{q:'Type the `ssh` command to connect to `192.168.1.10` as user `admin`:',
 fill:['ssh admin@192.168.1.10','ssh -l admin 192.168.1.10'],
 t:4,s:'4.4',src:'ext',type:'fill',
 e:'**`ssh user@host`** connects via SSH (Secure Shell). Port 22 by default; use `-p port` for a different port. Use `-i keyfile` to specify a private key. The `~/.ssh/config` file can store per-host settings (user, port, key).'},

// ══════════════════════════════════════════════════════
//  BATCH 3 — Extra questions (T1/T2/multi-select focus)
// ══════════════════════════════════════════════════════

// --- 1.1 extra ---
{q:'Which of the following is a characteristic of FREE software as defined by the FSF? (Select TWO)',
 o:['Freedom to run the program for any purpose','Must be available at zero cost','Freedom to study and modify the source code','Must be approved by Linus Torvalds'],
 a:[0,2],t:1,s:'1.1',src:'ext',type:'multi',
 e:'The FSF defines **four freedoms**: (0) run for any purpose, (1) study & modify source, (2) redistribute copies, (3) distribute modified versions. "Free" means freedom, NOT necessarily zero price. "Free as in freedom, not as in beer."'},

{q:'What is the role of the Linux kernel?',
 o:['It provides the graphical desktop environment','It is the core that manages hardware resources and system calls','It is a package manager for Linux software','It is a text editor bundled with all distributions'],
 a:1,t:1,s:'1.1',src:'ext',
 e:'The **kernel** is the core of the OS: it manages CPU, memory, devices, and provides system calls to applications. The kernel sits between hardware and user-space programs. The graphical environment (X11, Wayland) runs in user space.'},

{q:'UNIX was originally developed by:',
 o:['Linus Torvalds at the University of Helsinki','GNU Project led by Richard Stallman','AT&T Bell Labs in the late 1960s/1970s','IBM for mainframe systems'],
 a:2,t:1,s:'1.1',src:'ext',
 e:'**Unix** was developed at **AT&T Bell Labs** starting in 1969 (Ken Thompson, Dennis Ritchie). It influenced virtually all modern operating systems. Linux was designed to be a free Unix-like kernel. BSD (Berkeley Software Distribution) was a Unix variant from UC Berkeley.'},

{q:'The GNU Project was founded to create:',
 o:['A proprietary Unix replacement','A completely free Unix-like operating system','The first Linux distribution','A new hardware platform for open source'],
 a:1,t:1,s:'1.1',src:'ext',
 e:'**Richard Stallman** founded the GNU Project in 1983 to create a **completely free Unix-like OS**. GNU provides most of the core user-land tools (bash, gcc, coreutils). Combined with the Linux kernel, the full system is often called GNU/Linux.'},

// --- 1.2 extra ---
{q:'Which of the following are open-source web browsers? (Select TWO)',
 o:['Firefox','Google Chrome','Chromium','Microsoft Edge'],
 a:[0,2],t:1,s:'1.2',src:'ext',type:'multi',
 e:'**Firefox** (Mozilla, MPL) and **Chromium** (Google, BSD) are open source. Google Chrome is built on Chromium but includes proprietary components. Microsoft Edge is based on Chromium but is proprietary.'},

{q:'LibreOffice Calc is the equivalent of which proprietary application?',
 o:['Microsoft Word','Microsoft Excel','Microsoft PowerPoint','Adobe Acrobat'],
 a:1,t:1,s:'1.2',src:'ext',
 e:'**LibreOffice Calc** = spreadsheet (like **Microsoft Excel**). LibreOffice Writer = word processor (Word). LibreOffice Impress = presentations (PowerPoint). LibreOffice Draw = vector graphics. LibreOffice Base = database (Access).'},

{q:'Which Linux tool is commonly used for video editing?',
 o:['GIMP','Kdenlive','Inkscape','Audacity'],
 a:1,t:1,s:'1.2',src:'ext',
 e:'**Kdenlive** (and also Kdenlive, OpenShot, Pitivi, Cinelerra) are Linux video editors. **GIMP** = raster image editing (like Photoshop). **Inkscape** = vector graphics (like Illustrator). **Audacity** = audio editing.'},

{q:'The `apt` command is used on which Linux distribution family?',
 o:['Red Hat / Fedora','Debian / Ubuntu','Arch Linux','SUSE / openSUSE'],
 a:1,t:1,s:'1.2',src:'ext',
 e:'**`apt`** (Advanced Package Tool) is the package manager for **Debian/Ubuntu** family. Red Hat/Fedora use `dnf`/`yum` + `rpm`. Arch Linux uses `pacman`. SUSE uses `zypper` + `rpm`. Each family has its own package format (`.deb` vs `.rpm`).'},

// --- 1.3 extra ---
{q:'What is the key difference between "open source" and "free software"?',
 o:['They are completely identical terms','Open source focuses on practical benefits of shared code; free software emphasises user freedom as an ethical matter','Open source requires payment; free software does not','Free software cannot be used commercially'],
 a:1,t:1,s:'1.3',src:'ext',
 e:'Both share code availability, but **free software** (FSF/Stallman) is primarily an **ethical/political** position about user freedom. **Open source** (OSI) is a **pragmatic/technical** argument about development benefits. In practice, most free software is also open source and vice versa.'},

{q:'Which license is used by the Linux kernel?',
 o:['GPL v2','GPL v3','MIT','Apache 2.0'],
 a:0,t:1,s:'1.3',src:'ext',
 e:'The Linux kernel is licensed under **GPL v2** (specifically, "GPL v2 only" — NOT v2 or later). Linus Torvalds has explicitly stated the kernel will not be upgraded to GPL v3. The GPL v2 requires that kernel modifications be released as GPL v2 as well.'},

// --- 1.4 extra ---
{q:'What does a "shell" provide in a Linux system?',
 o:['A graphical window manager','A command-line interpreter that executes user commands','A hardware abstraction layer','A boot loader for the kernel'],
 a:1,t:1,s:'1.4',src:'ext',
 e:'A **shell** is a command-line interpreter: it reads user input, parses commands, and executes them (calls programs or built-ins). Common shells: **bash** (default on most distros), **sh**, **zsh**, **fish**, **ksh**. The shell also supports scripting.'},

{q:'Which of the following are valid Linux shell types? (Select TWO)',
 o:['bash','cmd.exe','zsh','PowerShell'],
 a:[0,2],t:1,s:'1.4',src:'ext',type:'multi',
 e:'**bash** (Bourne Again Shell) and **zsh** (Z Shell) are Linux shells. `cmd.exe` and PowerShell are Windows shells. Other Linux shells: sh (POSIX), ksh, fish, dash. The default shell is stored in `/etc/passwd` and `$SHELL`.'},

// --- 2.1 extra ---
{q:'What is the purpose of the `$PATH` environment variable?',
 o:['It stores the current directory path','It defines a list of directories searched when running a command by name','It points to the user\'s home directory','It contains the script being executed'],
 a:1,t:2,s:'2.1',src:'ext',
 e:'**`$PATH`** is a colon-separated list of directories (e.g. `/usr/bin:/usr/local/bin:/bin`) searched in order when you type a command. If `ls` is in `/bin`, and `/bin` is in `$PATH`, typing `ls` works. To run a local binary: use `./program`.'},

{q:'Which command shows the value of the `$HOME` environment variable?',
 o:['echo HOME','echo $HOME','print HOME','var $HOME'],
 a:1,t:2,s:'2.1',src:'ext',
 e:'**`echo $HOME`** prints the value of any environment variable. The `$` sigil expands the variable. `echo HOME` (without `$`) prints the literal string "HOME". You can also use `printenv HOME` or `echo "${HOME}"`.'},

{q:'When you type `ls /etc`, what is `/etc` called in command syntax?',
 o:['A flag','An option','An argument','A pipe'],
 a:2,t:2,s:'2.1',src:'ext',
 e:'In `ls /etc`: `ls` is the command, `/etc` is an **argument** (operand). **Options/flags** start with `-` (like `-l`, `-a`). **Long options** start with `--` (like `--all`). Arguments are non-option inputs passed to the command.'},

{q:'The tilde `~` in a path refers to:',
 o:['The root directory /','The parent directory','The current user\'s home directory','The previous directory'],
 a:2,t:2,s:'2.1',src:'ext',
 e:'**`~`** expands to the current user\'s home directory (`$HOME`). `~/Documents` = `/home/alice/Documents`. `~bob` = bob\'s home directory. `cd ~` or just `cd` both return to home. `-` in `cd -` goes to the previous directory.'},

// --- 2.2 extra ---
{q:'What is the purpose of `man 5 passwd`?',
 o:['Shows the manual for the passwd command (section 1)','Shows the file format documentation for /etc/passwd (section 5)','Searches man pages for the word "passwd"','Opens the passwd man page in section 5 color mode'],
 a:1,t:2,s:'2.2',src:'ext',
 e:'**`man 5 passwd`** opens section 5 of the manual for "passwd" — which documents the **`/etc/passwd` file format**. Without the section number, `man passwd` defaults to section 1 (the `passwd` command for changing passwords). Section numbers resolve ambiguity.'},

{q:'What does the `--help` option do for most Linux commands?',
 o:['Opens the full man page','Displays a brief usage summary and available options','Runs the command in help mode with extra logging','Checks the command for errors without executing'],
 a:1,t:2,s:'2.2',src:'ext',
 e:'Most commands support **`--help`** (or `-h`) which prints a brief usage summary and list of options. This is faster than `man` for a quick reminder. The full documentation is in `man` pages or `info` pages.'},

// --- 2.3 extra ---
{q:'What does the command `ls -la` show that `ls` alone does not?',
 o:['Only file names','Files sorted by size','Hidden files and detailed metadata (permissions, owner, size, date)','Only directories'],
 a:2,t:2,s:'2.3',src:'ext',
 e:'**`-l`** = long format (permissions, links, owner, group, size, date). **`-a`** = all (includes hidden files starting with `.`). Combined: `ls -la` shows everything including `.` (current dir) and `..` (parent dir).'},

{q:'Which of the following are absolute paths? (Select TWO)',
 o:['/home/alice/file.txt','./scripts/run.sh','/var/log/syslog','../config/settings.conf'],
 a:[0,2],t:2,s:'2.3',src:'ext',type:'multi',
 e:'**Absolute paths** start with `/` (root). `/home/alice/file.txt` and `/var/log/syslog` are absolute. **Relative paths** are relative to the current directory: `./scripts/run.sh` (current dir) and `../config/settings.conf` (parent dir) are relative.'},

{q:'The `find` command with `-type d` finds:',
 o:['Files with .d extension','Only directories','Files modified today','Files owned by root'],
 a:1,t:2,s:'2.3',src:'ext',
 e:'**`find /path -type d`** finds only **directories**. `-type f` = regular files. `-type l` = symbolic links. Combine with other predicates: `find / -type f -name "*.conf"` finds all .conf regular files. `-mtime -1` = modified in last 24h.'},

// --- 2.4 extra ---
{q:'What does `cp -a source/ dest/` do differently from `cp -r source/ dest/`?',
 o:['No difference','-a preserves permissions, timestamps, and symlinks; -r does not preserve all attributes','-a only copies files, not directories','-a requires root privileges'],
 a:1,t:2,s:'2.4',src:'ext',
 e:'**`cp -a`** = archive mode = `-r` (recursive) + `-p` (preserve permissions, timestamps, ownership) + `-d` (preserve symlinks). Use `-a` for backups or exact copies. `-r` alone copies files recursively but may not preserve all metadata.'},

{q:'To rename a file `old.txt` to `new.txt` in the SAME directory, use:',
 o:['cp old.txt new.txt','mv old.txt new.txt','rename old.txt new.txt','ln old.txt new.txt'],
 a:1,t:2,s:'2.4',src:'ext',
 e:'**`mv old.txt new.txt`** renames the file (or moves it if the destination is a different directory). Within the same filesystem, `mv` is instant (just renames the directory entry). `cp` would create a duplicate without removing the original.'},

// --- 4.2 extra (multi) ---
{q:'Which directories are considered virtual filesystems providing kernel/hardware info? (Select TWO)',
 o:['/proc','/sys','/var','/home'],
 a:[0,1],t:4,s:'4.2',src:'ext',type:'multi',
 e:'**`/proc`** and **`/sys`** are virtual (pseudo) filesystems maintained by the kernel in RAM — they contain no real files on disk. `/proc` = process and kernel info. `/sys` = hardware/driver info (sysfs). Read `/proc/cpuinfo`, `/proc/meminfo`, `/proc/version`.'},

// --- 4.3 extra ---
{q:'Which command shows disk space usage of mounted filesystems in human-readable format?',
 o:['du -h','df -h','lsblk -h','mount -h'],
 a:1,t:4,s:'4.3',src:'ext',
 e:'**`df -h`** (disk free, human-readable) shows total/used/available space for each mounted filesystem. **`du`** shows directory usage. `df -h /home` shows only the filesystem containing `/home`. `df -T` also shows filesystem type.'},

{q:'What filesystem is typically used for the EFI System Partition (ESP) on UEFI systems?',
 o:['ext4','FAT32','NTFS','btrfs'],
 a:1,t:4,s:'4.3',src:'ext',
 e:'The **EFI System Partition** must be formatted as **FAT32** (vfat). This is a UEFI specification requirement — UEFI firmware can read FAT32 to load boot loaders (GRUB, systemd-boot). It is typically mounted at `/boot/efi` and is 100–550 MB.'},

// --- 5.1 extra (multi) ---
{q:'Which of the following are functions of the `sudo` system? (Select TWO)',
 o:['Run a command as another user (e.g. root)','Log all sudo commands to syslog/auth.log','Encrypt the command being run','Replace the passwd command'],
 a:[0,1],t:5,s:'5.1',src:'ext',type:'multi',
 e:'**`sudo`** (1) lets an authorised user run a command with root (or another user\'s) privileges, and (2) logs every sudo usage to `/var/log/auth.log` (or `/var/log/secure`). Configured in `/etc/sudoers` (edit with `visudo`).'},

{q:'What is the purpose of the `/etc/sudoers` file?',
 o:['Stores user password hashes','Lists users who can log in via SSH','Defines which users/groups can run which commands with sudo','Lists all system administrators'],
 a:2,t:5,s:'5.1',src:'ext',
 e:'**`/etc/sudoers`** controls sudo access: who can run what commands, as which users, with or without password. Always edit with **`visudo`** (validates syntax before saving to prevent lockouts). The `%sudo` or `%wheel` group typically has full sudo access.'},

// --- Fill-in batch 3 ---
{q:'Type the command to display the first 5 lines of `readme.txt`:',
 fill:['head -n 5 readme.txt','head -5 readme.txt'],
 t:3,s:'3.2',src:'ext',type:'fill',
 e:'**`head -n 5 filename`** shows the first 5 lines. Default (no `-n`) shows 10 lines. `head` and `tail` are complementary: `head` = start of file, `tail` = end. Pipe example: `ls -la | head -5` shows only the first 5 entries.'},

{q:'Type the command to display the manual page for the `chmod` command:',
 fill:['man chmod'],
 t:2,s:'2.2',src:'ext',type:'fill',
 e:'**`man chmod`** opens the manual page. Navigate with arrow keys or Page Up/Down. Press `/` to search within the page, `n` for next match. Press `q` to quit. `man` uses `less` as its pager by default.'},

{q:'Type the command to create an empty file named `notes.txt`:',
 fill:['touch notes.txt'],
 t:2,s:'2.4',src:'ext',type:'fill',
 e:'**`touch filename`** creates an empty file if it does not exist, or updates its access/modification timestamps if it does. Useful for creating placeholder files or for scripting. `> notes.txt` also creates an empty file (redirects empty output).'},

{q:'Type the command to count the number of files in the current directory (non-recursive):',
 fill:['ls | wc -l'],
 t:2,s:'2.3',src:'ext',type:'fill',
 e:'**`ls | wc -l`** pipes the output of `ls` (one filename per line) into `wc -l` which counts lines. Note: hidden files are excluded unless you use `ls -a | wc -l`. For directories only: `ls -d */ | wc -l`.'},

{q:'Type the command to display the kernel version of the running system:',
 fill:['uname -r'],
 t:4,s:'4.1',src:'ext',type:'fill',
 e:'**`uname -r`** prints the kernel release version (e.g. `6.1.0-21-amd64`). `uname -a` shows all info: kernel name, hostname, release, version, machine, OS. `cat /proc/version` also shows kernel version plus compiler info.'},

{q:'Type the `ip` command to show all network interfaces and their IP addresses:',
 fill:['ip addr','ip addr show','ip a'],
 t:4,s:'4.4',src:'ext',type:'fill',
 e:'**`ip addr`** (or `ip addr show`, shortened to `ip a`) shows all network interfaces with their IP addresses, MAC addresses, and state. This is the modern replacement for the deprecated `ifconfig`. To show only one interface: `ip addr show eth0`.'},

{q:'Type the command to list all currently running processes (all users, with details):',
 fill:['ps aux'],
 t:4,s:'4.3',src:'ext',type:'fill',
 e:'**`ps aux`** shows all processes: `a`=all users, `u`=user-oriented format (shows user/CPU/mem), `x`=include processes without a terminal. Common use: `ps aux | grep processname`. Alternative: `ps -ef` (POSIX-style). `top` or `htop` for live view.'},

// ══════════════════════════════════════════════════════
//  BATCH 4 — Thin section top-up (validated against PDF)
// ══════════════════════════════════════════════════════

// --- 1.3 Licensing (top-up) ---
{q:'Under which condition can you distribute GPL software WITHOUT providing source code?',
 o:['Never — GPL always requires providing source','When used internally and not distributed externally','When the binary is distributed free of charge','When fewer than 10 users receive it'],
 a:1,t:1,s:'1.3',src:'ext',
 e:'GPL requires source only when you **distribute** externally. A company that modifies GPL software and uses it **internally** does not have to release source. Distributing to even one external user triggers the GPL obligation.'},

{q:'What does "permissive" mean in open source licensing?',
 o:['Allows any use with few restrictions, including use in proprietary software','Permits only educational use','Permits modifications but not redistribution','Requires government approval to modify'],
 a:0,t:1,s:'1.3',src:'ext',
 e:'**Permissive licenses** (MIT, BSD, Apache 2.0) allow use, modification, and redistribution — including in **proprietary products** — with minimal conditions (usually just attribution). Contrasted with **copyleft** (GPL) which requires derivatives to remain open source.'},

{q:'Which license is used by the Apache web server project?',
 o:['GPL v2','MIT License','Apache License 2.0','LGPL v3'],
 a:2,t:1,s:'1.3',src:'ext',
 e:'The **Apache License 2.0** is a permissive license used by the Apache Software Foundation. It allows use in proprietary software, requires copyright notice and license text, and includes a patent grant. Compatible with GPL v3 but not GPL v2.'},

{q:'What is "dual licensing" in open source software?',
 o:['Releasing the same software under two licenses simultaneously','Using two programming languages in one project','Distributing on two different operating systems','Requiring two approvals before a commit is merged'],
 a:0,t:1,s:'1.3',src:'ext',
 e:'**Dual licensing**: the same software is offered under two licenses — e.g. GPL for open source users AND a commercial license for proprietary use. Users choose which applies. MySQL uses this model. It allows monetization while keeping community access open.'},

// --- 1.4 ICT Skills (top-up) ---
{q:'What is the purpose of a terminal emulator in Linux?',
 o:['Emulates old hardware for legacy software','Provides a graphical window that runs a shell for command-line access','Converts terminal commands to mouse clicks','Emulates the Windows command prompt on Linux'],
 a:1,t:1,s:'1.4',src:'ext',
 e:'A **terminal emulator** (GNOME Terminal, Konsole, xterm, Alacritty) is a GUI application that provides a window running a shell. It emulates old text-terminal hardware. Without one, GUI users cannot access the command line.'},

{q:'What does the `history` command display in bash?',
 o:['System boot history','Recently run commands with line numbers','CPU usage over time','All users who have ever logged in'],
 a:1,t:1,s:'1.4',src:'ext',
 e:'**`history`** shows a numbered list of previously run commands (stored in `~/.bash_history`). Use `!n` to re-run command number n, `!!` to re-run the last command, `Ctrl+R` for reverse search. `history -c` clears the list.'},

{q:'Which bash startup file is read for every new interactive LOGIN shell?',
 o:['~/.bashrc','~/.bash_profile','~/.inputrc','/etc/bash.bashrc'],
 a:1,t:1,s:'1.4',src:'ext',
 e:'**`~/.bash_profile`** is executed at **login**. **`~/.bashrc`** is read for each **interactive non-login shell** (new terminal window). Best practice: put `PATH` and environment variables in `~/.bash_profile`; put aliases and functions in `~/.bashrc`.'},

{q:'In a Linux virtual console, which key combination switches to the second TTY?',
 o:['Ctrl+Alt+F1','Ctrl+Alt+F2','Ctrl+Alt+F7','Alt+Tab'],
 a:1,t:1,s:'1.4',src:'ext',
 e:'**`Ctrl+Alt+F1`** through **`F6`** switch between virtual consoles (TTY1–TTY6). **`Ctrl+Alt+F7`** (or F2 on some distros) returns to the graphical session. From within a virtual console, `Alt+F2` alone suffices. These are full-screen text sessions independent of the GUI.'},

// --- 2.2 Getting Help (top-up) ---
{q:'What is the difference between `man` and `info` documentation pages?',
 o:['man is newer; info is deprecated','info pages are hyperlinked and often more detailed; man pages are flat single pages','man is for commands; info is for file formats only','There is no practical difference between them'],
 a:1,t:2,s:'2.2',src:'ext',
 e:'**`man`** pages are flat, single-page formatted text. **`info`** pages (GNU) are multi-node hyperlinked documents — often more comprehensive for GNU tools. Navigate info: arrow keys, `Tab` (next link), `Enter` (follow link), `n`/`p` (next/prev node), `q` (quit).'},

{q:'Which command gives a brief one-line description of a command without opening the full man page?',
 o:['man -f command','whatis command','Both are equivalent','info -f command'],
 a:2,t:2,s:'2.2',src:'ext',
 e:'**`whatis command`** and **`man -f command`** are equivalent — both print the short description from the man page database. Example: `whatis ls` → `ls (1) - list directory contents`. Much faster than opening the full man page for a quick reminder.'},

{q:'Inside a `man` page (using `less`), how do you search for the word "recursive"?',
 o:['Type :recursive and press Enter','Press / then type recursive and press Enter','Press Ctrl+F then type recursive','Add --search=recursive before opening man'],
 a:1,t:2,s:'2.2',src:'ext',
 e:'Man pages use **`less`** as pager. Inside less: **`/pattern`** searches forward, **`?pattern`** searches backward, **`n`** = next match, **`N`** = previous match, **`G`** = end of page, **`g`** = beginning, **`q`** = quit.'},

{q:'What man page section covers SYSTEM CALLS (C kernel interface)?',
 o:['Section 1','Section 2','Section 5','Section 8'],
 a:1,t:2,s:'2.2',src:'ext',
 e:'Man page **section 2** = system calls (e.g. `open(2)`, `fork(2)`, `read(2)`). Section 1 = user commands. Section 3 = C library functions. Section 5 = file formats. Section 8 = system administration commands. Use `man 2 open` to force section 2.'},

// --- 2.4 Files (top-up) ---
{q:'What does `mv /tmp/file.txt /home/alice/` do when `/home/alice/` already exists as a directory?',
 o:['Fails — destination already exists','Moves file.txt INTO the /home/alice/ directory','Replaces the directory with file.txt','Creates a copy and keeps the original at /tmp/'],
 a:1,t:2,s:'2.4',src:'ext',
 e:'When the destination is an **existing directory**, `mv` moves the source **into** that directory. Result: `/home/alice/file.txt`. If the destination were a file name, `mv` would rename/overwrite it. Use `mv -n` to prevent overwriting existing files.'},

{q:'Which `cp` flag preserves file permissions, timestamps, and ownership?',
 o:['-r','-f','-p','-v'],
 a:2,t:2,s:'2.4',src:'ext',
 e:'**`cp -p`** (preserve) retains the original file\'s permissions, timestamps, and ownership. Without `-p`, copies get new timestamps and the copier\'s ownership. **`cp -a`** = `-p -r -d`: archive mode for full recursive preservation including symlinks.'},

{q:'What does `rm -i file.txt` do before deleting?',
 o:['Removes file.txt immediately with no output','Removes file.txt and prints a confirmation message','Prompts for confirmation before deleting','Removes file.txt only if it is empty'],
 a:2,t:2,s:'2.4',src:'ext',
 e:'**`rm -i`** (interactive) prompts `remove file.txt?` before each deletion. Answer `y` to confirm, `n` to skip. Useful as a safety net. You can alias `rm=\'rm -i\'` in `~/.bashrc`. `-I` prompts only once when removing 3+ files.'},

{q:'Type the command to copy directory `src/` recursively to `dest/`:',
 fill:['cp -r src/ dest/','cp -r src dest','cp -R src/ dest/'],
 t:2,s:'2.4',src:'ext',type:'fill',
 e:'**`cp -r src/ dest/`** — `-r` (or `-R`) copies the directory and all contents recursively. Without `-r`, `cp` refuses to copy directories. Use `-a` instead of `-r` to also preserve permissions and timestamps exactly.'},

// --- 4.2 Hardware (top-up) ---
{q:'What does `free -h` display?',
 o:['Free disk space on all partitions','RAM and swap usage in human-readable format','Available network bandwidth','CPU frequency and load average'],
 a:1,t:4,s:'4.2',src:'ext',
 e:'**`free -h`** shows total, used, free, shared, buff/cache, and **available** RAM and swap in human-readable units. The "available" column (not "free") shows what the kernel can give new processes. Also see `/proc/meminfo` for detailed memory stats.'},

{q:'Which directory exposes hardware and kernel data as virtual files readable by any process?',
 o:['/dev','/etc','/proc','/usr'],
 a:2,t:4,s:'4.2',src:'ext',
 e:'**`/proc`** is a virtual filesystem (procfs) maintained by the kernel in RAM — no real disk files. Examples: `/proc/cpuinfo` (CPU details), `/proc/meminfo` (memory), `/proc/version` (kernel version), `/proc/PID/` (per-process info).'},

{q:'Which of the following are BLOCK devices? (Select TWO)',
 o:['Hard disk drives (HDDs)','Network interface cards (NICs)','Solid State Drives (SSDs)','Sound cards'],
 a:[0,2],t:4,s:'4.2',src:'ext',type:'multi',
 e:'**Block devices** (HDDs, SSDs, USB drives) transfer data in fixed-size blocks and support random access. **Character devices** (terminals, sound cards) stream data. NICs are network devices. In `ls -l /dev/`, block devices show `b` and character devices show `c` as first character.'},

{q:'What does `/dev/null` do when used as a destination in redirection?',
 o:['Stores output in a null-safe temporary file','Discards all data written to it','Returns null bytes back to the program','Redirects output to the terminal'],
 a:1,t:4,s:'4.2',src:'ext',
 e:'**`/dev/null`** is a special file that **discards** everything written to it and returns EOF when read. Common use: `command > /dev/null 2>&1` to completely silence a command\'s output. `/dev/zero` returns infinite null bytes when read. Both are virtual — no disk I/O occurs.'},

// --- 5.4 Special Dirs/Files (top-up) ---
{q:'What happens to a symbolic link if its target file is deleted?',
 o:['The symlink is automatically deleted too','The symlink becomes a dangling (broken) link','The symlink is converted to a hard link','The symlink follows the target to its new location'],
 a:1,t:5,s:'5.4',src:'ext',
 e:'A **dangling symlink** points to a non-existent target. It still appears in `ls` (often in red). Accessing it gives "No such file or directory." Deleting a **hard link** only decreases the link count; the file persists until the count reaches 0.'},

{q:'Type the command to view the inode number of `report.txt`:',
 fill:['ls -i report.txt','stat report.txt'],
 t:5,s:'5.4',src:'ext',type:'fill',
 e:'**`ls -i report.txt`** shows the inode number as the first column. **`stat report.txt`** shows full metadata: inode number, permissions, owner, size, timestamps (access, modify, change), link count. Inode numbers uniquely identify files within a filesystem.'},

{q:'Which directory is the traditional mount point for manually mounted filesystems?',
 o:['/dev','/tmp','/mnt','/opt'],
 a:2,t:5,s:'5.4',src:'ext',
 e:'**`/mnt`** is the traditional mount point for manually attached filesystems. **`/media`** is now used by desktop environments for auto-mounted removable media (USB, CD-ROM). Mount: `mount /dev/sdb1 /mnt`. Unmount: `umount /mnt`.'},

{q:'What does the leading character in `ls -l` output indicate? For example: `drwxr-xr-x`',
 o:['Whether the file is hidden','The file type: d=directory, -=regular file, l=symlink, b=block device','The permission level of the directory','The number of hard links'],
 a:1,t:5,s:'5.4',src:'ext',
 e:'The first character in `ls -l` = **file type**: `-` = regular file, `d` = directory, `l` = symbolic link, `b` = block device, `c` = character device, `p` = named pipe (FIFO), `s` = socket. The next 9 characters are permissions (owner/group/others × rwx).'},

{q:'Which command shows the full resolved path of a symbolic link, following all links?',
 o:['ls -l linkname','cat linkname','readlink -f linkname','stat --follow linkname'],
 a:2,t:5,s:'5.4',src:'ext',
 e:'**`readlink -f linkname`** resolves the **full absolute path**, following all symlinks recursively until it reaches a real file. `readlink linkname` (without `-f`) shows only the direct target stored in the symlink, which may itself be a relative path or another symlink.'},

);
