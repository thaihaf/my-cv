import { PERSONAL_INFO } from "../data";

export default function PersonalInfo() {
  return (
    <div className="personal-info text-center">
      <div className="name font-bold capitalize">
        {PERSONAL_INFO.name}
        {PERSONAL_INFO.nickname && ` (${PERSONAL_INFO.nickname})`}
      </div>
      <div className="position">{PERSONAL_INFO.position}</div>
      <div className="phone">Phone: {PERSONAL_INFO.phone}</div>
      <div className="email">
        Email:{" "}
        <span className="text-blue-500 underline">{PERSONAL_INFO.email}</span>
      </div>
      <div className="link">
        LinkedIn:{" "}
        <a href={PERSONAL_INFO.link} className="text-blue-500 underline">
          {PERSONAL_INFO.link}
        </a>
      </div>
    </div>
  );
}
