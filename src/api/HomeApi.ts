import { AxiosError } from "axios";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import { HomeApi } from "./api";
import { HttpClient } from "./axiosSetup";

const fetchHomeContent = (institution: string) => {
  return HttpClient.get(
    HomeApi.getByInstitution.replace(":institution", institution)
  );
};

const useFetchHomeContent = (institution: string) => {
  return useQuery(
    [HomeApi.getByInstitution],
    () => fetchHomeContent(institution),
    {
      select: (response) => response?.data?.data.home_content,
      onError: (error: AxiosError) => {
        toast.error(error?.message);
      },
    }
  );
};

const fetchStatistics = () => {
  return HttpClient.get(HomeApi.getStatistics);
};

const useFetchStatistics = () => {
  return useQuery([HomeApi.getStatistics], fetchStatistics, {
    select: (response) => response?.data?.data,
  });
};

const fetchServices = () => {
  return HttpClient.get(HomeApi.getServices);
};

const useFetchServices = () => {
  return useQuery([HomeApi.getServices], fetchServices, {
    select: (response) => response?.data?.data,
  });
};

const fetchFaculty = () => {
  return HttpClient.get(HomeApi.getFaculty);
};

const useFetchFaculty = () => {
  return useQuery([HomeApi.getFaculty], fetchFaculty, {
    select: (response) => response?.data?.data,
  });
};

const fetchFacility = () => {
  return HttpClient.get(HomeApi.getFacility);
};

const useFetchFacility = () => {
  return useQuery([HomeApi.getFacility], fetchFacility, {
    select: (response) => response?.data?.data,
  });
};

export {
  useFetchFacility,
  useFetchFaculty,
  useFetchHomeContent,
  useFetchServices,
  useFetchStatistics,
};
