/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useMutation, useQuery } from "react-query";
import {
  BlogApi,
  CourseMenuApi,
  FacultyApi,
  MessageApi,
  SchoolApi,
  TeamApi,
} from "./api";
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

const fetchSchool = () => {
  return HttpClient.get(SchoolApi.getSchools);
};

const useFetchSchool = () => {
  return useQuery([SchoolApi.getSchools], fetchSchool, {
    select: (response) => response?.data?.data,
    onError: (error: AxiosError) => {
      toast.error(error?.message);
    },
  });
};

const sendMessage = (data: any) => {
  return HttpClient.post(MessageApi.sendMessage, data);
};

const useSendMessage = () => {
  return useMutation(sendMessage, {
    onSuccess: () => {
      toast.success("Message sent successfully");
    },
    onError: (error: AxiosError) => {
      toast.error(error?.message);
    },
  });
};

const fetchBlogs = () => {
  return HttpClient.get(BlogApi.getBlogs);
};

const useFetchBlogs = () => {
  return useQuery([BlogApi.getBlogs], fetchBlogs, {
    select: (response) => response?.data?.data,
    onError: (error: AxiosError) => {
      toast.error(error?.message);
    },
  });
};

const fetchBlogById = (id: number) => {
  return HttpClient.get(BlogApi.getBlogById.replace(":id", id.toString()));
};

const useFetchBlogById = (id: number) => {
  return useQuery([BlogApi.getBlogById], () => fetchBlogById(id), {
    select: (response) => response?.data?.data,
    onError: (error: AxiosError) => {
      toast.error(error?.message);
    },
  });
};

const fetchFaculty = (id: number) => {
  return HttpClient.get(FacultyApi.getFaculty.replace(":id", id.toString()));
};

const useFetchFaculty = (id: number) => {
  return useQuery([FacultyApi.getFaculty], () => fetchFaculty(id), {
    select: (response) => response?.data?.data,
    onError: (error: AxiosError) => {
      toast.error((error?.response?.data as any)?.error);
    },
  });
};

const fetchCourseMenu = () => {
  return HttpClient.get(CourseMenuApi.getCourseMenu);
};

const useFetchCourseMenu = () => {
  return useQuery([CourseMenuApi.getCourseMenu], fetchCourseMenu, {
    select: (response) => response?.data?.data,
    onError: (error: AxiosError) => {
      toast.error((error?.response?.data as any)?.error);
    },
  });
};

export {
  useFetchBlogById,
  useFetchBlogs,
  useFetchCourseMenu,
  useFetchFaculty,
  useFetchSchool,
  useFetchTeams,
  useSendMessage,
};
