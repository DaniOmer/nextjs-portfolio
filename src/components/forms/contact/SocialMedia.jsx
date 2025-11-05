import Link from "next/link";
import { FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";

function SocialMedia() {
  return (
    <div className="flex gap-4 text-4xl mt-4">
      <Link href="https://www.linkedin.com/in/omerdotchamou/" target="_blank">
        <FaLinkedin size={30} />
      </Link>
      <Link href="https://github.com/DaniOmer/" target="_blank">
        <FaGithub size={30} />
      </Link>
      <Link href="https://discord.com/users/873339668618436609" target="_blank">
        <FaDiscord size={30} />
      </Link>
    </div>
  );
}
export default SocialMedia;
