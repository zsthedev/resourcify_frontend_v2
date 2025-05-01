import React, { useState } from 'react'
import Select from "react-select"
import { styles } from '../../../select/styles'
import { assets } from '../../../../constants';
import { useDispatch } from 'react-redux';
import { login } from '../../../redux/actions/user';

const AcademiaLogin = () => {
    const [role, setRole] = useState({ value: "student", label: "Student" });
    const [identifier, setIdentifier] = useState(""); // This will hold rollNo or email
    const [password, setPassword] = useState("");

    const options = [
        { value: "student", label: "Student" },
        { value: "teacher", label: "Teacher" },
    ];

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();

        if (!identifier || !password) return alert("Please fill all fields");

        dispatch(login(identifier, password, role.value));
    };

    return (
        <section className='w-full p-8 flex items-center gap-4 justify-center mt-32'>
            <div className='w-[500px] h-full'>
                <form onSubmit={submitHandler}>
                    <h2 className='text-3xl font-clemente_regular font-[500] text-zinc-800 mb-4'>Academia Login</h2>

                    <label className='block mb-4'>
                        <span className='block mb-1'>Role</span>
                        <Select
                            value={role}
                            onChange={setRole}
                            options={options}
                            styles={styles}
                            placeholder="Choose Your Role"
                        />
                    </label>

                    {role.value === "student" && (
                        <label className='block mb-4'>
                            <span className='block mb-1'>Roll No</span>
                            <input
                                value={identifier}
                                onChange={(e) => setIdentifier(e.target.value)}
                                type="text"
                                placeholder='e.g., fa22-bse-073'
                                className='input_field'
                            />
                        </label>
                    )}

                    {role.value === "teacher" && (
                        <label className='block mb-4'>
                            <span className='block mb-1'>Email</span>
                            <input
                                value={identifier}
                                onChange={(e) => setIdentifier(e.target.value)}
                                type="email"
                                placeholder='e.g., teacher@domain.com'
                                className='input_field'
                            />
                        </label>
                    )}

                    <label className='block mb-4'>
                        <span className='block mb-1'>Password</span>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder='Enter Your Password'
                            className='input_field'
                        />
                    </label>

                    <button type="submit" className='primary_btn !mt-2 w-full'>
                        Submit
                    </button>
                </form>
            </div>

            <div className='flex-1 h-[720px]'>
                <img className='w-full h-full object-cover object-center rounded-xl' src={assets.comsats_wah} alt="Campus" />
            </div>
        </section>
    );
};

export default AcademiaLogin;
