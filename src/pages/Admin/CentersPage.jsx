import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/Admin/AdminLayout';
import CentersView from '../../components/Admin/CentersView';
import AddCenterModal from '../../components/Admin/AddCenterModal';
import EditCenter from '../../components/Admin/EditCenter';
import DeleteConfirmModal from '../../components/Admin/DeleteConfirmModal';
import { adminService } from '../../services/adminService';

const CentersPage = () => {

  
  const [editingCenter, setEditingCenter] = useState(null);
  const [showAddCenterModal, setShowAddCenterModal] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [centerToDelete, setCenterToDelete] = useState(null);
  const [dialysisCenters, setDialysisCenters] = useState([]);
  
  useEffect(() => {
    const fetchDialysisCenters = async () => {
      try {
        const response = await adminService.allDialysisCenters()
       
        setDialysisCenters(response?.data?.dialysisCenters);
      } catch (error) {
        console.error("Error fetching dialysis centers:", error);
      }
    };
    fetchDialysisCenters();
  }, []);
 console.log(dialysisCenters)
  return (
    <AdminLayout>
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Dialysis Centers</h1>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-4">
          <CentersView 
           setDialysisCenters={setDialysisCenters}
            dialysisCenters={dialysisCenters}
            setShowAddCenterModal={setShowAddCenterModal} 
            setEditingCenter={setEditingCenter} 
            setCenterToDelete={setCenterToDelete} 
            setShowDeleteConfirmation={setShowDeleteConfirmation}
          />
          
          {/* Modals */}
          {showAddCenterModal && (
            <AddCenterModal 
              setShowAddCenterModal={setShowAddCenterModal} 
              setDialysisCenters={setDialysisCenters}
            />
          )}
          
          {editingCenter && (
            <EditCenter 
              editingCenter={editingCenter} 
              dialysisCenters={dialysisCenters}
              setEditingCenter={setEditingCenter}
              setDialysisCenters={setDialysisCenters}
            />
          )}
          
          {showDeleteConfirmation && (
            <DeleteConfirmModal 
              setShowDeleteConfirmation={setShowDeleteConfirmation} 
              setCenterToDelete={setCenterToDelete} 
              setDialysisCenters={setDialysisCenters}
              centerToDelete={centerToDelete} 
              dialysisCenters={dialysisCenters}
            />
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default CentersPage;