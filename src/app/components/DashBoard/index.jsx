import React, { useState } from 'react';

const DashBoard = ({ projects }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(5); // Số lượng dự án hiển thị trên mỗi trang

  // Tìm dự án tương ứng với trang hiện tại
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  // Chuyển đổi trang
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const filteredProjects = currentProjects.filter((project) =>
    project.project_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='p-4'>
      <input
        type='text'
        placeholder='Search by project name'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className='w-full py-2 px-4 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500'
      />
      <div className='overflow-x-auto'>
        <table className='min-w-full divide-y divide-gray-200 border border-gray-200'>
          <thead className='bg-gray-50'>
            <tr>
              <th
                scope='col'
                className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200'
              >
                Project Name
              </th>
              <th
                scope='col'
                className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200'
              >
                Project Domain
              </th>
              <th
                scope='col'
                className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200'
              >
                Last Accessed
              </th>
              <th
                scope='col'
                className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200'
              >
                License Type
              </th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200'>
            {filteredProjects.map((project) => (
              <tr
                key={project.id}
                className='border-b border-gray-200 hover:bg-gray-100 cursor-pointer'
              >
                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b border-gray-200'>
                  {project.project_name}
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-b border-gray-200'>
                  {project.project_domain || 'www.example.com'}
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-b border-gray-200'>
                  {new Date(project.last_accessed).toLocaleDateString()}
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-b border-gray-200'>
                  {project.license_use.length > 0 ? (
                    project.license_use.map((item, index) => (
                      <div key={index}>
                        <span>{`${item?.license_type} `}</span>
                        {item.libraries.map((i, position) => (
                          <span key={position}>{`${i}  `}</span>
                        ))}
                      </div>
                    ))
                  ) : (
                    <div className=''></div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Phân trang */}
      <nav className='mt-4'>
        <ul className='flex'>
          {Array.from({
            length: Math.ceil(projects.length / projectsPerPage),
          }).map((_, index) => (
            <li key={index}>
              <button
                onClick={() => paginate(index + 1)}
                className={`${
                  currentPage === index + 1 ? 'bg-gray-200' : 'bg-white'
                } border border-gray-300 px-3 py-1 mx-1 rounded-md`}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default DashBoard;
