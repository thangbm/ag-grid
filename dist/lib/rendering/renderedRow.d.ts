// Type definitions for ag-grid v9.0.3
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ceolter/>
import { RenderedCell } from "./renderedCell";
import { RowNode } from "../entities/rowNode";
import { RowRenderer } from "./rowRenderer";
import { Column } from "../entities/column";
import { BeanStub } from "../context/beanStub";
import { RowContainerComponent } from "./rowContainerComponent";
import { ColDef } from "../entities/colDef";
export declare class RenderedRow extends BeanStub {
    static EVENT_RENDERED_ROW_REMOVED: string;
    private gridOptionsWrapper;
    private columnController;
    private columnAnimationService;
    private $compile;
    private mainEventService;
    private context;
    private focusedCellController;
    private cellRendererService;
    private gridPanel;
    private paginationProxy;
    private ePinnedLeftRow;
    private ePinnedRightRow;
    private eBodyRow;
    private eFullWidthRow;
    private eFullWidthRowBody;
    private eFullWidthRowLeft;
    private eFullWidthRowRight;
    private eAllRowContainers;
    private fullWidthRowComponent;
    private fullWidthRowComponentBody;
    private fullWidthRowComponentLeft;
    private fullWidthRowComponentRight;
    private renderedCells;
    private scope;
    private rowNode;
    private fullWidthRow;
    private fullWidthCellRenderer;
    private fullWidthCellRendererParams;
    private parentScope;
    private rowRenderer;
    private bodyContainerComp;
    private fullWidthContainerComp;
    private pinnedLeftContainerComp;
    private pinnedRightContainerComp;
    private fullWidthPinnedLeftLastTime;
    private fullWidthPinnedRightLastTime;
    private nextVmTurnFunctions;
    private delayedDestroyFunctions;
    private startRemoveAnimationFunctions;
    private renderedRowEventService;
    private editingRow;
    private initialised;
    private animateIn;
    private rowFocusedLastTime;
    constructor(parentScope: any, rowRenderer: RowRenderer, bodyContainerComp: RowContainerComponent, fullWidthContainerComp: RowContainerComponent, pinnedLeftContainerComp: RowContainerComponent, pinnedRightContainerComp: RowContainerComponent, node: RowNode, animateIn: boolean);
    private setupRowContainers(animateInRowTop);
    getAndClearDelayedDestroyFunctions(): Function[];
    getAndClearNextVMTurnFunctions(): Function[];
    private addDomData(eRowContainer);
    private setupFullWidthContainers(animateInRowTop);
    private addMouseWheelListenerToFullWidthRow();
    private setupFullWidthGroupContainers(animateInRowTop);
    private createFullWidthRow(animateInRowTop);
    private setupNormalContainers(animateInRowTop);
    init(): void;
    stopRowEditing(cancel: boolean): void;
    isEditing(): boolean;
    stopEditing(cancel?: boolean): void;
    startRowEditing(keyPress?: number, charPress?: string, sourceRenderedCell?: RenderedCell): void;
    private setEditingRow(value);
    private addDataChangedListener();
    private angular1Compile(element);
    private addColumnListener();
    private onDisplayedColumnsChanged();
    private onVirtualColumnsChanged(event);
    private onGridColumnsChanged();
    private isCellInWrongRow(renderedCell);
    private refreshCellsIntoRow();
    private removeRenderedCells(colIds);
    private getRowForColumn(column);
    private ensureCellInCorrectRow(renderedCell);
    private getOrCreateCell(column);
    private onRowSelected();
    private addRowSelectedListener();
    onMouseEvent(eventName: string, mouseEvent: MouseEvent): void;
    private addHoverFunctionality();
    private addHoverClass(hover);
    private setRowFocusClasses();
    private addCellFocusedListener();
    private onPaginationChanged();
    forEachRenderedCell(callback: (renderedCell: RenderedCell) => void): void;
    private addNodeDataChangedListener();
    private onTopChanged();
    private setRowTop(pixels);
    private setupTop(animateInRowTop);
    private setHeight();
    private addRowIndexes();
    private addRowIds();
    addEventListener(eventType: string, listener: Function): void;
    removeEventListener(eventType: string, listener: Function): void;
    getRenderedCellForColumn(column: Column): RenderedCell;
    getCellForCol(column: Column): HTMLElement;
    destroy(animate?: boolean): void;
    private destroyScope();
    isGroup(): boolean;
    private refreshFullWidthComponent();
    private createFullWidthComponent();
    private destroyFullWidthComponent();
    private createFullWidthParams(eRow, pinned);
    private createChildScopeOrNull(data);
    private addStyleFromRowStyle();
    private addStyleFromRowStyleFunc();
    private createParams();
    private createEvent(event, eventSource);
    private createRowContainer(rowContainerComp, slideRowIn);
    private animateRowIn(eRow, slideRowIn);
    private roundRowTopToBounds(rowTop);
    private onRowDblClick(event);
    onRowClick(event: MouseEvent): void;
    getRowNode(): any;
    refreshCells(cols: (string | ColDef | Column)[], animate: boolean): void;
    private addClassesFromRowClassFunc();
    private addGridClasses();
    private addExpandedAndContractedClasses();
    private addClassesFromRowClass();
}
