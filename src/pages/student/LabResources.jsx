import React, { useEffect, useState } from 'react'
import { styles } from '../../select/styles'
import Select from "react-select"
import { useDispatch, useSelector } from 'react-redux'
import { getLabResources } from '../../redux/actions/lab'
import LabResource from '../../components/LabResource'

const LabResources = () => {
    const dispatch = useDispatch()
    const { items } = useSelector(state => state.lab)

    const [titleFilter, setTitleFilter] = useState('')
    const [publisherFilter, setPublisherFilter] = useState(null)
    const [osFilter, setOsFilter] = useState(null)

    useEffect(() => {
        dispatch(getLabResources())
    }, [])

    // Generate dynamic options for Publisher and OS
    const publisherOptions = [
        ...new Set(items?.map(i => i.publisher).filter(Boolean)),
    ].map(p => ({ value: p, label: p }))

    const osOptions = [
        ...new Set(items?.map(i => i.os).filter(Boolean)),
    ].map(o => ({ value: o, label: o }))

    const filteredItems = items?.filter(i => {
        const titleMatch = i.title.toLowerCase().includes(titleFilter.toLowerCase())
        const publisherMatch = publisherFilter ? i.publisher === publisherFilter.value : true
        const osMatch = osFilter ? i.os === osFilter.value : true
        return titleMatch && publisherMatch && osMatch
    })

    return (
        <section>
            <div className="filter-row bg-white rounded-lg p-[16px] my-[16px] grid grid-cols-3 gap-[8px]">
                <label>
                    <span className='inline-block mb-[4px]'>Title</span>
                    <input
                        type="text"
                        placeholder='Search Here'
                        value={titleFilter}
                        onChange={(e) => setTitleFilter(e.target.value)}
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                    />
                </label>

                <label>
                    <span className='inline-block mb-[4px]'>Publisher</span>
                    <Select
                        styles={styles}
                        placeholder="Filter Publisher"
                        options={publisherOptions}
                        value={publisherFilter}
                        onChange={setPublisherFilter}
                        isClearable
                    />
                </label>

                <label>
                    <span className='inline-block mb-[4px]'>OS</span>
                    <Select
                        styles={styles}
                        placeholder="Filter OS"
                        options={osOptions}
                        value={osFilter}
                        onChange={setOsFilter}
                        isClearable
                    />
                </label>
            </div>

            <div className="w-full grid grid-cols-4 xl:grid-cols-5 mt-[16px] gap-[16px]">
                {filteredItems?.length > 0 ? (
                    filteredItems.map((i, index) => (
                        <LabResource
                            key={index}
                            image={i.image.url}
                            title={i.title}
                            status={i.status || "available"}
                            description={i.instructions}
                            id={i._id}
                        />
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-500">No resources found.</p>
                )}
            </div>
        </section>
    )
}

export default LabResources
