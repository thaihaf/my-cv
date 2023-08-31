import { TECHNICAL_SKILLS } from "../data";
import Title from "./Title";

export default function TechnicalSkills() {
  return (
    <>
      <Title title={"technical skills"} />

      <div className="container">
        <div className="grid grid-cols-2">
          <ul className="font-bold list-disc pl-24">
            <li>
              {`${TECHNICAL_SKILLS.PROGRAMMING_LANGUAGES.title}:`}
              <ul className="font-normal pl-6">
                {TECHNICAL_SKILLS.PROGRAMMING_LANGUAGES.data.map((item) => (
                  <li className="flex" key={item}>
                    <p className="mr-3">-</p>
                    {item}
                  </li>
                ))}
              </ul>
            </li>
            <li>
              {`${TECHNICAL_SKILLS.FRAMEWORKS_PLATFORMS.title}:`}
              <ul className="font-normal pl-6">
                {TECHNICAL_SKILLS.FRAMEWORKS_PLATFORMS.data.map((item) => (
                  <li className="flex" key={item}>
                    <p className="mr-3">-</p>
                    {item}
                  </li>
                ))}
              </ul>
            </li>
            <li>
              {`${TECHNICAL_SKILLS.DATABASE_MANAGEMENT_SYSTEMS.title}:`}
              <ul className="font-normal pl-6">
                {TECHNICAL_SKILLS.DATABASE_MANAGEMENT_SYSTEMS.data.map(
                  (item) => (
                    <li className="flex" key={item}>
                      <p className="mr-3">-</p>
                      {item}
                    </li>
                  )
                )}
              </ul>
            </li>
          </ul>

          <ul className="font-bold list-disc pl-24">
            <li>
              {`${TECHNICAL_SKILLS.VERSION_CONTROL.title}:`}
              <ul className="font-normal pl-6">
                {TECHNICAL_SKILLS.VERSION_CONTROL.data.map((item) => (
                  <li className="flex" key={item}>
                    <p className="mr-3">-</p>
                    {item}
                  </li>
                ))}
              </ul>
            </li>
            <li>
              {`${TECHNICAL_SKILLS.FOREIGN_LANGUAGES.title}:`}
              {TECHNICAL_SKILLS.FOREIGN_LANGUAGES.data.map((item) => {
                return (
                  <p className="font-normal" key={item.id}>
                    {`${item.title}:`}
                    <ul className="pl-6">
                      {item.details.map((item) => (
                        <li className="flex" key={item}>
                          <p className="mr-3">-</p>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </p>
                );
              })}
            </li>
            <li>
              {`${TECHNICAL_SKILLS.SOFT_SKILLS.title}:`}
              <ul className="font-normal pl-6">
                {TECHNICAL_SKILLS.SOFT_SKILLS.data.map((item) => (
                  <li className="flex" key={item}>
                    <p className="mr-3">-</p>
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>

        <ul className="font-bold list-disc pl-24">
          <li>
            {`${TECHNICAL_SKILLS.OTHER.title}:`}
            <ul className="font-normal pl-6">
              {TECHNICAL_SKILLS.OTHER.data.map((item) => (
                <li className="flex" key={item}>
                  <p className="mr-3">-</p>
                  {item}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}
