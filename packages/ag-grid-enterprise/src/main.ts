import {ModuleRegistry} from "ag-grid-community";

import {ColumnsToolPanelModule} from "@ag-grid-enterprise/column-tool-panel";
import {ExcelExportModule} from "@ag-grid-enterprise/excel-export";
import {FiltersToolPanelModule} from "@ag-grid-enterprise/filter-tool-panel";
import {GridChartsModule} from "@ag-grid-enterprise/charts";
import {MasterDetailModule} from "@ag-grid-enterprise/master-detail";
import {MenuModule} from "@ag-grid-enterprise/menu";
import {RangeSelectionModule} from "@ag-grid-enterprise/range-selection";
import {RichSelectModule} from "@ag-grid-enterprise/rich-select";
import {RowGroupingModule} from "@ag-grid-enterprise/row-grouping";
import {ServerSideRowModelModule} from "@ag-grid-enterprise/server-side-row-model";
import {SetFilterModule} from "@ag-grid-enterprise/set-filter";
import {SideBarModule} from "@ag-grid-enterprise/side-bar";
import {StatusBarModule} from "@ag-grid-enterprise/status-bar";
import {ViewportRowModelModule} from "@ag-grid-enterprise/viewport-row-model";
ModuleRegistry.register(ColumnsToolPanelModule as any);
ModuleRegistry.register(ExcelExportModule as any);
ModuleRegistry.register(FiltersToolPanelModule as any);
ModuleRegistry.register(GridChartsModule as any);
ModuleRegistry.register(MasterDetailModule as any);
ModuleRegistry.register(MenuModule as any);
ModuleRegistry.register(RangeSelectionModule as any);
ModuleRegistry.register(RichSelectModule as any);
ModuleRegistry.register(RowGroupingModule as any);
ModuleRegistry.register(ServerSideRowModelModule as any);
ModuleRegistry.register(SetFilterModule as any);
ModuleRegistry.register(SideBarModule as any);
ModuleRegistry.register(StatusBarModule as any);
ModuleRegistry.register(ViewportRowModelModule as any);

export {LicenseManager} from "@ag-grid-enterprise/core";
