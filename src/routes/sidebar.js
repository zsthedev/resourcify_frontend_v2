import { RiDashboardLine } from "react-icons/ri";

export const studentSidebarRoutes = [
  {
    title: "Library Items",
    icon: "dashboard",
    path: "/student/library_items",
    isExtended: false,
  },

  {
    title: "Lab Resources",
    icon: "dashboard",
    path: "/student/lab_resources",
    isExtended: false,
  },

  {
    title: "Discussion Rooms",
    icon: "dashboard",
    path: "/student/discussion_rooms",
    isExtended: false,
  },

  {
    title: "Computer Labs",
    icon: "dashboard",
    path: "/student/computer_labs",
    isExtended: false,
  },

  {
    title: "My Resources",
    icon: "dashboard",
    path: "/student/my_resources",
    isExtended: false,
  },

  {
    title: "Profile",
    icon: "dashboard",
    path: "/student/profile",
    isExtended: false,
  },
];

export const teacherSidebarRoutes = [
  {
    title: "Library Items",
    icon: "dashboard",
    path: "/teacher/library_items",
    isExtended: false,
  },

  {
    title: "Lab Resources",
    icon: "dashboard",
    path: "/teacher/lab_resources",
    isExtended: false,
  },

  {
    title: "Discussion Rooms",
    icon: "dashboard",
    path: "/teacher/discussion_rooms",
    isExtended: false,
  },

  {
    title: "Computer Labs",
    icon: "dashboard",
    path: "/teacher/computer_labs",
    isExtended: false,
  },

  {
    title: "My Resources",
    icon: "dashboard",
    path: "/teacher/my_resources",
    isExtended: false,
  },

  {
    title: "Profile",
    icon: "dashboard",
    path: "/teacher/profile",
    isExtended: false,
  },
];

export const librarianSidebarRoutes = [
  {
    title: "Library Items",
    icon: RiDashboardLine,
    isExtended: true,
    subRoutes: [
      {
        label: "View All",
        value: "/librarian/library",
        icon: RiDashboardLine,
      },
      {
        label: "Add New Item",
        value: "/librarian/library/add",
        icon: RiDashboardLine,
      },

      {
        value: "/librarian/library/requests",
        label: "Requests",
        icon: RiDashboardLine,
      },
    ],
  },

  {
    title: "Discussion Rooms",
    icon: RiDashboardLine,
    isExtended: true,
    subRoutes: [
      {
        label: "View All",
        value: "/librarian/rooms",
        icon: RiDashboardLine,
      },
      {
        label: "Add New Item",
        value: "/librarian/room/add",
        icon: RiDashboardLine,
      },

      {
        value: "/librarian/bookings",
        label: "Bookings",
        icon: RiDashboardLine,
      },
    ],
  },
];

export const labAttendantSidebarRoutes = [
  {
    title: "Lab Resources",
    icon: RiDashboardLine,
    isExtended: true,
    subRoutes: [
      {
        label: "View All",
        value: "/lab_attendant/resources",
        icon: RiDashboardLine,
      },
      {
        label: "Add New Resource",
        value: "/lab_attendant/resource/add",
        icon: RiDashboardLine,
      },

      {
        label: "Requests",
        value: "/lab_attendant/resource/requests",
        icon: RiDashboardLine,
      },
    ],
  },
];
