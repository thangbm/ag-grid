import {DateFilter, DateFilterModel} from "./dateFilter";
import {Autowired} from "../../../context/context";
import {UserComponentFactory} from "../../../components/framework/userComponentFactory";
import {_} from "../../../utils";
import {IDateParams} from "../../../rendering/dateComponent";
import {IFloatingFilterParams} from "../../floating/floatingFilter";
import {DateCompWrapper} from "./dateCompWrapper";
import {RefSelector} from "../../../widgets/componentAnnotations";
import {AbstractSimpleFilter, IAbstractSimpleModel} from "../abstractSimpleFilter";
import {AbstractSimpleFloatingFilter} from "../../floating/provided/abstractSimpleFloatingFilter";

export class DateFloatingFilter extends AbstractSimpleFloatingFilter {

    @Autowired('userComponentFactory') private userComponentFactory: UserComponentFactory;

    @RefSelector('eReadOnlyText') private eReadOnlyText: HTMLInputElement;
    @RefSelector('eDateWrapper') private eDateWrapper: HTMLInputElement;

    private dateComp: DateCompWrapper;

    private params: IFloatingFilterParams;

    constructor() {
        super(
            `<div class="ag-input-text-wrapper">
                <input ref="eReadOnlyText" disabled="true" class="ag-floating-filter-input">
                <span ref="eDateWrapper" style="width: 100%; height: 100%;"></span>
            </div>`);
    }

    protected getDefaultFilterOptions(): string[] {
        return DateFilter.DEFAULT_FILTER_OPTIONS;
    }

    protected conditionToString(condition: DateFilterModel): string {

        const isRange = condition.type == AbstractSimpleFilter.IN_RANGE;

        if (isRange) {
            return `${condition.dateFrom}-${condition.dateTo}`;
        } else {
            // cater for when the type doesn't need a value
            if (condition.dateFrom!=null) {
                return `${condition.dateFrom}`;
            } else {
                return `${condition.type}`;
            }
        }
    }

    public init(params: IFloatingFilterParams) {
        super.init(params);
        this.params = params;
        this.createDateComponent();
        this.checkInRangeOnlyOption();
    }

    protected setEditable(editable: boolean): void {
        _.setVisible(this.eDateWrapper, editable);
        _.setVisible(this.eReadOnlyText, !editable);
    }

    public onParentModelChanged(model: IAbstractSimpleModel): void {
        super.setLastTypeFromModel(model);

        const allowEditing = this.canWeEditAfterModelFromParentFilter(model);

        this.setEditable(allowEditing);

        if (allowEditing) {
            if (model) {
                const dateModel = model as DateFilterModel;
                this.dateComp.setDate(_.parseYyyyMmDdToDate(dateModel.dateFrom, '-'));
            } else {
                this.dateComp.setDate(null);
            }
            this.eReadOnlyText.value = '';
        } else {
            this.eReadOnlyText.value = this.getTextFromModel(model);
            this.dateComp.setDate(null);
        }
    }

    private onDateChanged(): void {

        const filterValueDate: Date = this.dateComp.getDate();
        const filterValueText: string = _.serializeDateToYyyyMmDd(filterValueDate, "-");

        this.params.parentFilterInstance( filterInstance => {
            if (filterInstance) {
                const simpleFilter = <AbstractSimpleFilter<IAbstractSimpleModel>> filterInstance;
                simpleFilter.onFloatingFilterChanged(this.getLastType(), filterValueText);
            }
        });
    }

    private checkInRangeOnlyOption(): void {
        // disable the filter if inRange is the only configured option
        const columnDef = (this.params.column.getDefinition() as any);
        const inRangeIsOnlyOption = (columnDef.filterParams &&
            columnDef.filterParams.filterOptions &&
            columnDef.filterParams.filterOptions.length === 1 &&
            columnDef.filterParams.filterOptions[0] === 'inRange');

        if (inRangeIsOnlyOption) {
            // disable the component somehow
        }
    }

    private createDateComponent(): void {

        const debounceMs: number = this.params.debounceMs != null ? this.params.debounceMs : 500;
        const toDebounce: () => void = _.debounce(this.onDateChanged.bind(this), debounceMs);
        const dateComponentParams: IDateParams = {
            onDateChanged: toDebounce,
            filterParams: this.params.column.getColDef().filterParams
        };

        this.dateComp = new DateCompWrapper(this.userComponentFactory, dateComponentParams, this.eDateWrapper);

        this.addDestroyFunc( () => {
            this.dateComp.destroy();
        });
    }
}
