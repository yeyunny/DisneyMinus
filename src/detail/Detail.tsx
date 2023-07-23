import { movieInfo } from "../main/Main";

export interface Props {
  Info: movieInfo | undefined;
}

// export interface movieInfo {
//   id: number;
//   title: string;
//   description: string;
//   star: number;
//   url: string;
// }

function Detail({ Info }: { Info: movieInfo }) {
  console.log("detail", Info.title);
  return (
    <div>
      <h1>detail</h1>
    </div>
  );
}

export default Detail;
