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
      select: (response) => response?.data?.data.home_contents,
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
const fetchTeam = () => {
  return HttpClient.get(HomeApi.getTeam);
};

const useFetchTeam = () => {
  return useQuery([HomeApi.getTeam], fetchTeam, {
    select: (response) => response?.data?.data,
  });
};

const fetchBlogs = () => {
  return HttpClient.get(HomeApi.getBlog);
};

const useFetchBlog = () => {
  return useQuery([HomeApi.getBlog], fetchBlogs, {
    select: (response) => response?.data?.data,
  });
};

const fetchTestimonial = () => {
  return HttpClient.get(HomeApi.getTestimonial);
};

const useFetchTestimonial = () => {
  return useQuery([HomeApi.getTestimonial], fetchTestimonial, {
    select: (response) => response?.data?.data,
  });
};

const fetchGallery = () => {
  return HttpClient.get(HomeApi.getGallery);
};

const useFetchGallery = () => {
  return useQuery([HomeApi.getGallery], fetchGallery, {
    select: (response) => response?.data?.data,
  });
};
const fetchEvent = () => {
  return HttpClient.get(HomeApi.getEvent);
};

const useFetchEvent = () => {
  return useQuery([HomeApi.getEvent], fetchEvent, {
    select: (response) => response?.data?.data,
  });
};

export {
  useFetchBlog,
  useFetchEvent,
  useFetchFacility,
  useFetchFaculty,
  useFetchGallery,
  useFetchHomeContent,
  useFetchServices,
  useFetchStatistics,
  useFetchTeam,
  useFetchTestimonial,
};
