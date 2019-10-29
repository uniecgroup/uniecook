import { onRefreshNeworder } from './neworder';
import { onLoadOrderDetail, onChangeOrderToCooking, onChangeOrderToCancel } from './neworderdetail';
import { onRefreshInProgressOrder } from './inprogressorder';
import { onLoadInProgressOrderDetail, onChangeOrderToCookDone } from './inprogressorderdetail';
import { onRefreshReadyOrder } from './readyorder';
import { onLoadReadyOrderDetail, onChangeOrderToDelivering } from './readyorderdetail';
import { onRefreshHistoryOrder, onLoadMoreHistoryOrder } from './historyorder';
import { onLoadHistoryOrderDetail } from './historyorderdetail';

export default {
    onRefreshNeworder,
    onLoadOrderDetail,
    onRefreshInProgressOrder,
    onLoadInProgressOrderDetail,
    onRefreshReadyOrder,
    onLoadReadyOrderDetail,
    onRefreshHistoryOrder,
    onLoadMoreHistoryOrder,
    onLoadHistoryOrderDetail,
    onChangeOrderToCooking,
    onChangeOrderToCancel,
    onChangeOrderToCookDone,
    onChangeOrderToDelivering,
}