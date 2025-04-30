import Sidebar from "../components/Sidebar";
import LabResourceBooking from "../pages/academia/LabResourceBooking";
import LibraryItemBooking from "../pages/academia/LibraryItemBooking";
import AcademiaLogin from "../pages/landing/auth/AcademiaLogin";
import CoordinatorsLogin from "../pages/landing/auth/CoordinatiorsLogin";
import Profile from "../pages/landing/auth/Profile";
import Home from "../pages/landing/Home";
import AddNewLibraryItem from "../pages/librarian/AddNewLibraryItem";
import AddNewRoom from "../pages/librarian/AddNewRoom";
import AllBookings from "../pages/librarian/AllBookings";
import AllLentItemsRequests from "../pages/librarian/AllLentItemsRequests";
import AllRooms from "../pages/librarian/AllRooms";
import EditRoom from "../pages/librarian/EditRoom";
import LibraryItemsLibrarian from "../pages/librarian/LibraryItemsLibrarian";
import ComputerLabs from "../pages/student/ComputerLabs";
import DiscussionRooms from "../pages/student/DiscussionRooms";
import LabResources from "../pages/student/LabResources";
import LibraryItems from "../pages/student/LibraryItems";
import MyResources from "../pages/student/MyResources";
import { updateLibraryItem } from "../redux/actions/library";

export const landing = [
  {
    path: "/",
    element: Home,
    title: "Home",
  },
];

export const auth = [
  {
    path: "/academia_login",
    element: AcademiaLogin,
    title: "Academia Login",
  },

  {
    path: "/coordinators_login",
    element: CoordinatorsLogin,
    title: "Academia Login",
  },
];

export const studentRoutes = [
  {
    path: "/student/library_items",
    element: LibraryItems,
    title: "Library Items",
  },

  {
    path: "/student/library_item/:id/lend",
    element: LibraryItemBooking,
    title: "Lend Library Item",
  },

  {
    path: "/student/lab_resources",
    element: LabResources,
    title: "Lab Resources",
  },

  {
    path: "/student/lab_resource/:id/lend",
    element: LabResourceBooking,
    title: "Lend Lab Resources",
  },

  {
    path: "/student/discussion_rooms",
    element: DiscussionRooms,
    title: "Discussion Rooms",
  },

  {
    path: "/student/computer_labs",
    element: ComputerLabs,
    title: "Computer Labs",
  },

  {
    path: "/student/my_resources",
    element: MyResources,
    title: "My Resources",
  },

  {
    path: "/student/profile",
    element: Profile,
    title: "Profile",
  },
];

export const teacherRoutes = [
  {
    path: "/teacher/library_items",
    element: LibraryItems,
    title: "Library Items",
  },

  {
    path: "/teacher/library_item/:id/lend",
    element: LibraryItemBooking,
    title: "Lend Library Item",
  },

  {
    path: "/teacher/lab_resources",
    element: LabResources,
    title: "Lab Resources",
  },

  {
    path: "/teacher/lab_resource/:id/lend",
    element: LabResourceBooking,
    title: "Lend Lab Resources",
  },

  {
    path: "/teacher/discussion_rooms",
    element: DiscussionRooms,
    title: "Discussion Rooms",
  },

  {
    path: "/teacher/computer_labs",
    element: ComputerLabs,
    title: "Computer Labs",
  },

  {
    path: "/teacher/my_resources",
    element: MyResources,
    title: "My Resources",
  },

  {
    path: "/teacher/profile",
    element: Profile,
    title: "Profile",
  },
];

export const librarianRoutes = [
  {
    path: "/librarian/library",
    title: "Library Items",
    element: LibraryItemsLibrarian,
  },

  {
    path: "/librarian/library/add",
    title: "Add Library Items",
    element: AddNewLibraryItem,
  },

  {
    path: "/librarian/item/:id/update",
    title: "Update Library Item",
    element: updateLibraryItem,
  },

  {
    path: "/librarian/requests",
    title: "Requests",
    element: AllLentItemsRequests,
  },

  {
    path: "/librarian/rooms",
    title: "Rooms",
    element: AllRooms,
  },

  {
    path: "/librarian/room/add",
    title: "Rooms",
    element: AddNewRoom,
  },

  {
    path: "/librarian/room/:id/edit",
    title: "Rooms",
    element: EditRoom,
  },

  {
    path: "/librarian/bookings",
    title: "Bookings",
    element: AllBookings,
  },

  {
    title: "Profile",
    path: "/me",
    element: Profile,
  },
];
