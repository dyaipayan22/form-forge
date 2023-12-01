import useDesigner from '@/hooks/useDesigner';
import { FormElements } from './FormElements';
import SidebarBtnElement from './SidebarBtnElement';
import FormElementsSidebar from './FormElementsSidebar';
import FieldProperties from './FieldProperties';

function DesignerSidebar() {
  const { selectedElement } = useDesigner();
  return (
    <aside className="w-[400px] max-w-[400px] h-full flex flex-col flex-grow gap-2 border-l-2 border-muted p-4 bg-background overflow-y-auto">
      {selectedElement ? <FieldProperties /> : <FormElementsSidebar />}
    </aside>
  );
}

export default DesignerSidebar;
