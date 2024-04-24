import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { TeamApi } from "./api";
import { HttpClient } from "./axiosSetup";

const fetchTeams = () => {
  return HttpClient.get(TeamApi.getTeams);
};

const useFetchTeams = () => {
  return useQuery([TeamApi.getTeams], fetchTeams, {
    select: (response) => response?.data?.data,
    onError: (error: AxiosError) => {
      toast.error(error?.message);
    },
  });
};

export { useFetchTeams };
