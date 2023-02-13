import React, { useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import CSVReader from "../../components/Util/CSVReader";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import Filedownloader from "../../components/Util/Filedownloader";
import FileUploader from "../../components/Util/FileUploader";

export default function dashboard() {
 ;

  return (
    <div className="grid m-auto grid-cols-6 gap-4">
      <div className="container col-span-1">
        <Sidebar />
      </div>
      <div className="container flex flex-col justify-center space-y-4 w-full col-span-5 items-center">
        <div className="">
          <CSVReader />
        </div>
        <button className="flex items-center bg-red-50 rounded-full text-red-500 py-2 text-sm px-4">
          Download{" "}
        </button>

        <div>
         <Filedownloader />
        </div>
      </div>
     
    </div>
  );
}
