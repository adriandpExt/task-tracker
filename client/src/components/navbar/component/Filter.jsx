import useViewTask from "~/store/useViewTask";
import { SvgIcons } from "../../svg-icons";

import { detailsList } from "../utils";

export const Filter = () => {
  const { setFilter } = useViewTask();

  const renderList = () => {
    return detailsList?.map((item, id) => (
      <li key={id}>
        <button onClick={() => setFilter(item)}>{item}</button>
      </li>
    ));
  };

  return (
    <div className="dropdown dropdown-bottom dropdown-end bg-blue-950">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-outline m-1 text-white"
      >
        <SvgIcons name={"ic_filter"} style={{ height: 20, width: 20 }} />
        FILTER
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        {renderList()}
      </ul>
    </div>
  );
};

export default Filter;
