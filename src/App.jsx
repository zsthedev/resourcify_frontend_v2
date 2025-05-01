import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { auth, labAttendantRoutes, landing, librarianRoutes, studentRoutes, teacherRoutes } from './routes'
import Navbar from './components/partials/Navbar'
import { labAttendantSidebarRoutes, librarianSidebarRoutes, studentSidebarRoutes, teacherSidebarRoutes } from './routes/sidebar'
import Sidebar from './components/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser } from './redux/actions/user'
import toast, { Toaster } from 'react-hot-toast'
import ProtectedRoute from './components/ProtectedRoute'
const App = () => {

  const { isAuthenticated, loading, error, message, user } = useSelector(state => state.user)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }

    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
  }, [error, message]);
  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} />
      <Routes>
        {landing.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect={
              user && user.role === "student" ? "/student/library_items" : user && user.role === "teacher" ? "/teacher/library_items" : user && user.role === "librarian" ? "/librarian/library" : "/lab_attendant/resources"
            }>
              <route.element routes={studentSidebarRoutes} />
            </ProtectedRoute>}
          />
        ))}

        {auth.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect={
              user && user.role === "student" ? "/student/library_items" : user && user.role === "teacher" ? "/teacher/library_items" : user && user.role === "librarian" ? "/librarian/library" : "/lab_attendant/resources"
            }>
              <route.element routes={studentSidebarRoutes} />
            </ProtectedRoute>}
          />
        ))}

        {studentRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<ProtectedRoute isAuthenticated={isAuthenticated && user && user?.role === "student"} redirect={"/academia/login"}>
              <Sidebar routes={studentSidebarRoutes} component={route.element} pageTitle={route.title} />
            </ProtectedRoute>}
          />
        ))}

        {teacherRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<ProtectedRoute isAuthenticated={isAuthenticated && user && user?.role == "teacher"} redirect={"/academia/login"}>
              <Sidebar routes={teacherSidebarRoutes} component={route.element} pageTitle={route.title} />
            </ProtectedRoute>}
          />
        ))}


        {librarianRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<ProtectedRoute isAuthenticated={isAuthenticated && user && user?.role == "librarian"} redirect={"/coordinators/login"}>
              <Sidebar routes={librarianSidebarRoutes} component={route.element} pageTitle={route.title} />
            </ProtectedRoute>}
          />
        ))}

        {labAttendantRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<ProtectedRoute isAuthenticated={isAuthenticated && user && user?.role == "lab_attendant"} redirect={"/coordinators/login"}>
              <Sidebar routes={labAttendantSidebarRoutes} component={route.element} pageTitle={route.title} />
            </ProtectedRoute>}
          />
        ))}
      </Routes>

      <Toaster />
    </Router>
  )
}

export default App
