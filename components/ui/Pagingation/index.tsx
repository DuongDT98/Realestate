import React, { FC } from "react";

interface Props {}

const Pagination: FC<Props> = (props) => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex -space-x-px">
        <li>
          <a
            href="#"
            className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg "
          >
            Previous
          </a>
        </li>
        <li>
          <a
            href="#"
            className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 "
          >
            1
          </a>
        </li>
        <li>
          <a
            href="#"
            className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 "
          >
            2
          </a>
        </li>
        <li>
          <a
            href="#"
            aria-current="page"
            className="px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 "
          >
            3
          </a>
        </li>
        <li>
          <a
            href="#"
            className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 "
          >
            4
          </a>
        </li>
        <li>
          <a
            href="#"
            className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 "
          >
            5
          </a>
        </li>
        <li>
          <a
            href="#"
            className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg "
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
