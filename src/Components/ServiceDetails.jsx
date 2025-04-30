import { useParams, useLocation, Navigate } from 'react-router-dom';
import GeneralMaintenance from '../Pages/GeneralMaintenance';
import BodyRepairs from '../Pages/BodyRepairs';
import SpareParts from '../Pages/SpareParts';
import EngineRefurbishing from '../Pages/EngineRefurbishing';
import VehicleDiagnostics from '../Pages/VehicleDiagnostics';
import QuickRepairs from '../Pages/QuickRepairs';

const ServiceDetails = () => {
  const { id } = useParams(); // Get the `id` from the URL
  const { state } = useLocation(); // Get the state passed via Link
  const service = state?.service; // Extract the service from state

  // If no service data is available, optionally you could fetch here
  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const renderServicePage = () => {
    switch (id) {
      case 'general-maintenance':
        return <GeneralMaintenance />;
      case 'body-repairs':
        return <BodyRepairs />;
      case 'spare-parts':
        return <SpareParts />;
      case 'engine-refurbishing':
        return <EngineRefurbishing />;
      case 'vehicle-diagnostic':
        return <VehicleDiagnostics/>;
      case 'quick-repair':
        return <QuickRepairs />;
      default:
        return (
          <div className="text-center p-10">
            <h2 className="text-2xl font-semibold">Service not found</h2>
          </div>
        );
    }
  };

  return (
    <div>
      {renderServicePage()}
    </div>
  );
};

export default ServiceDetails;
