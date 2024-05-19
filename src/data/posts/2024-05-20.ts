import { IPost } from '@/types/IPost';
import { resolveImagePath } from '@/helpers/resolveImagePath';
import { Code, Header, Paragraph, Photo } from '@/services/useContentRenderer/components';

const PUBLISH_DATE = '2024-05-20';
const title = 'Collection of tips for VirtualBox VM';
const MEDIA_BASE_PATH = `posts/${PUBLISH_DATE}`;

export const POST: IPost = {
  name: title,

  abstract: `Few years ago it was super simple to set up VM using Virtualbox on Windows OS. Recently I've faced problems while setting VM on top of Windows 11 and had to put more efforts in order to make it working. Here I will be leaving tips that I found useful for my VM.`,

  tags: [
    { text: 'Windows 11' },
    { text: 'VirtualBox' },
    { text: 'Ubuntu 24.04' },
    { text: 'Hyper-V' },
    { text: 'cfdisk' },
    { text: 'Docker Desktop' },
  ],

  date: PUBLISH_DATE,

  references: {
    items: [
      {
        match: 'HMR3Init: Attempting fall back to NEM (Hyper-V is active)',
        title: 'HMR3Init: Attempting fall back to NEM (Hyper-V is active)',
        url: 'https://forums.virtualbox.org/viewtopic.php?f=25&t=99390',
      },
    ],
    renderInParagraphs: true,
    renderAtTheEnd: false,
  },

  components: [
    new Header({
      value: title,
    }),

    new Header({
      value: '#1 Getting rid of freezing/lags occurring in random moments',
      className: 'text-[35px]',
    }),

    new Paragraph({
      value: `If your VirtualBox GUI shows following icon:`,
    }),

    new Photo({
      src: resolveImagePath(`${MEDIA_BASE_PATH}/slow-performance.png`),
      description: 'Icon (green turtle) indicating slow performance in VirtualBox',
    }),

    new Paragraph({
      value: `or VM log includes "VERR_CPUM_RAISE_GP_0" statement or information such as:`,
    }),

    new Code({
      language: '',
      value: `HM: HMR3Init: Attempting fall back to NEM: VT-x is not available
      NEM: WHvCapabilityCodeHypervisorPresent is TRUE, so this might work...`,
    }),

    new Paragraph({
      value: `it means that you have Hyper-V technology enabled which makes VirtualBox run slowly and even crash. In order to turn it off, open Command Prompt or PowerShell with administrator rights and execute:`,
    }),

    new Code({
      language: 'ps',
      value: `bcdedit /set hypervisorlaunchtype off`,
    }),

    new Paragraph({
      value: `followed by system reboot. That might not be everything though. In my case VirtualBox was still showing information that Hyper-V is enabled. It turned out that there is other service called Hypervisor protected Code Integrity (HVCI) known as "Memory Integrity" which is using Hyper-V. To disable it, navigate to Start > Settings > Update & Security > Windows Security > Device security > Core isolation > Memory integrity.`,
    }),

    new Paragraph({
      value: `If that did not help you, check out "HMR3Init: Attempting fall back to NEM (Hyper-V is active)" post where forum user collected more possible solutions that might work for you 🤔.`,
    }),

    new Header({
      value: '#2 Using Docker Desktop on Ubuntu 24.04',
      className: 'text-[35px]',
    }),

    new Paragraph({
      value: `If you've selected LTS version of Ubuntu (24.04) and wanted to install Docker Desktop utility, you probably face "Docker Desktop is not responding" message. This happens because Docker Desktop is not yet officialy supported on Ubuntu 24.04 but there is one workaround you can do to fix that. You have to run following commands each time you launch system:`,
    }),

    new Code({
      language: 'bash',
      value: `sudo sysctl -w kernel.apparmor_restrict_unprivileged_userns=0
      systemctl --user restart docker-desktop`,
    }),

    new Paragraph({
      value: `If you want to automate that, open crontab:`,
    }),

    new Code({
      language: 'bash',
      value: `crontab -e`,
    }),

    new Paragraph({
      value: `and paste following lines, replacing YOUR_PASSWORD with actual password:`,
    }),

    new Code({
      language: 'bash',
      value: `@reboot echo "YOUR_PASSWORD" | sudo -S sysctl -w kernel.apparmor_restrict_unprivileged_userns=0
      @reboot systemctl --user restart docker-desktop`,
    }),

    new Header({
      value: '#3 How to quickly increase disk size of VM with Ubuntu?',
      className: 'text-[35px]',
    }),

    new Paragraph({
      value: `If you haven't assigned enough space when creating VM and want to increase it afterwards, head to VirtualBox, navigate to Tools > Properties and open Hard Disks tab. Choose hard disk, increase it's size and click "Ok".`,
    }),

    new Photo({
      src: resolveImagePath(`${MEDIA_BASE_PATH}/increase-vm-disk-mem.png`),
      description: 'VirtualBox - increasing memory of disk',
    }),

    new Paragraph({
      value: `Then you have to increase partition size in Ubuntu OS. The easiest way to achieve it is to open terminal and launch "cfdisk" utility. Before you do this, make sure to back-up current state of disk (in case something goes wrong)`,
    }),

    new Code({
      language: 'bash',
      value: `sudo cfdisk`,
    }),

    new Paragraph({
      value: `Then with up/down arrows select hard disk you want to increase size of (note down which device you've selected) and then choose "Resize" with left/right arrows:`,
    }),

    new Photo({
      src: resolveImagePath(`${MEDIA_BASE_PATH}/cfdisk.png`),
      description: 'Virtualbox - cfdisk presentation',
    }),

    new Paragraph({
      value: `You will be asked to provide new size. Notice that cfdisk automatically suggests maximum possible value. Change it (if needed) and commit operation. If disk size is still not expanded, run "resize2fs" on device that you've just resized:`,
    }),

    new Code({
      language: 'bash',
      value: `sudo resize2fs <device>
      # e.g. sudo resize2fs /dev/sda2`,
    }),
  ],
};
