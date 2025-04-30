import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { useDispatch, useSelector } from 'react-redux'
import { getAllLibraryItems } from '../../redux/actions/library'
import LibraryItem from '../../components/LibraryItem'
import { styles } from '../../select/styles'

const LibraryListing = () => {
    const dispatch = useDispatch()
    const { items } = useSelector(state => state.library)

    const [searchTitle, setSearchTitle] = useState('')
    const [resourceType, setResourceType] = useState(null)
    const [status, setStatus] = useState(null)

    useEffect(() => {
        dispatch(getAllLibraryItems())
    }, [])

    // You can adjust these based on your actual backend enum/values
    const resourceTypeOptions = [
        { value: 'book', label: 'Book' },
        { value: 'journal', label: 'Journal' },
        { value: 'fyp', label: 'Fyp' }
    ]

    const statusOptions = [
        { value: 'available', label: 'Available' },
        { value: 'Unavailable', label: 'Unavailable' }
    ]

    const filteredItems = items?.filter(item => {
        const matchesTitle = item.title.toLowerCase().includes(searchTitle.toLowerCase())
        const matchesType = resourceType ? item.type === resourceType.value : true
        const matchesStatus = status ? item.status === status.value : true
        return matchesTitle && matchesType && matchesStatus
    })

    return (
        <section className='w-full bg-gray-100 min-h-screen'>
            <div className="title-row flex items-center justify-between">
            </div>

            <div className="filter-row bg-white rounded-lg p-[16px] my-[16px] grid grid-cols-3 gap-[8px]">
                <label>
                    <span className='inline-block mb-[4px]'>Title</span>
                    <input
                        type="text"
                        placeholder='Search Here'
                        className='w-full border border-gray-300 rounded px-2 py-1'
                        value={searchTitle}
                        onChange={(e) => setSearchTitle(e.target.value)}
                    />
                </label>
                <label>
                    <span className='inline-block mb-[4px]'>Resource Type</span>
                    <Select
                        styles={styles}
                        options={resourceTypeOptions}
                        placeholder="Filter Category"
                        value={resourceType}
                        onChange={setResourceType}
                        isClearable
                    />
                </label>

                <label>
                    <span className='inline-block mb-[4px]'>Status</span>
                    <Select
                        styles={styles}
                        options={statusOptions}
                        placeholder="Filter Status"
                        value={status}
                        onChange={setStatus}
                        isClearable
                    />
                </label>
            </div>

            <div className="w-full grid grid-cols-4 xl:grid-cols-5 mt-[16px] gap-[16px]">
                {filteredItems && filteredItems.length > 0 ? (
                    filteredItems.map((i, index) => (
                        <LibraryItem
                            key={index}
                            image={i.file.url}
                            title={i.title}
                            status={i.status}
                            description={i.subtitle}
                            id={i._id}
                        />
                    ))
                ) : (
                    <p className="text-gray-500 col-span-full text-center">No items match the filters.</p>
                )}
            </div>
        </section>
    )
}

export default LibraryListing
