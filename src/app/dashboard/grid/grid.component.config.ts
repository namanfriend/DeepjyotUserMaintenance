/**
 * New typescript file
 */
import { GridHeader } from '../../common/component/basicgrid/basicgrid.component';
export class GridComponentConfig {
  headers: GridHeader[] = [
       {
        label: 'Sub No.',
        visible: true,
        dataRef: 'subscriptionId',
        width: 5,
        enableSorting: true
      },
      {
        label: 'Name',
        visible: true,
        dataRef: 'fullName',
        editConfig: {
          fieldType: 'rowEvent',
          otherConfig: 'fullName'
        },
        width: 15,
        enableSorting: true
      },
      {
        label: 'Address',
        visible: true,
        dataRef: 'displayAddress',
        editConfig: {
          fieldType: 'dynamic'
        },
        width: 20
      },
      {
        label: 'City',
        visible: true,
        dataRef: 'city',
        width: 10,
        enableSorting: true
      },
      {
        label: 'State',
        visible: true,
        dataRef: 'state',
        width: 10,
        enableSorting: true
      },
      {
        label: 'Pincode',
        visible: true,
        dataRef: 'pincode',
        width: 10,
        enableSorting: true
      },
      {
        label: 'Is Special',
        visible: true,
        dataRef: 'specialSub',
        width: 6,
        enableSorting: true
      },
      {
        label: 'Expiry Date',
        visible: true,
        editConfig: {
          fieldType: 'extendColumn',
          otherConfig: 'extendColumn'
        },
        dataRef: 'subEndDate',
        width: 8,
        enableSorting: true
      }
    ];
}
