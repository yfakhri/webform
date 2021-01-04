import React from 'react'
import { DataGrid, ColDef, RowsProp} from '@material-ui/data-grid'

const columns: ColDef[] = [
    {field: 'no', headerName: 'No.', type:'number',flex:0.5 },
    {field: 'question', headerName: 'Pertanyaan',flex:2},
    {field: 'type', headerName: 'Jenis Pertanyaan',flex:1 },
]

const rows: RowsProp=[
    {id:1, no: 1, question:'a',type:'b'},
    {id:2, no: 1, question:'a',type:'b'},
    {id:3, no: 1, question:'a',type:'b'},
    {id:4, no: 1, question:'a',type:'b'},
    {id:5, no: 1, question:'a',type:'b'},
    {id:6, no: 1, question:'a',type:'b'},
    {id:7, no: 1, question:'a',type:'b'},
    {id:8, no: 1, question:'a',type:'b'},
    {id:9, no: 1, question:'a',type:'b'},
    {id:10, no: 1, question:'a',type:'b'},
    {id:11, no: 1, question:'a',type:'b'},
    {id:12, no: 1, question:'a',type:'b'},
    {id:13, no: 1, question:'a',type:'b'},
    {id:14, no: 1, question:'a',type:'b'},
    {id:15, no: 1, question:'a',type:'b'},
];

export default function QuestionList(){
    return(
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={rows    } columns={columns} pageSize={5} checkboxSelection />
        </div>
    );
}