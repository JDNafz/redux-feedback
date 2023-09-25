import Survey from "../Survey/Survey";

export default function Comments() {
  return (
    <Survey
      SCREAMER={"SET_COMMENTS"}
      nextUrl={"/review"}
      label={"Comments"}
      Question={"Any comments you want to leave?"}
      requireValidation={false}
      placeholder={"Optional"}
      backUrl={"/support"}
    />
  );
}
