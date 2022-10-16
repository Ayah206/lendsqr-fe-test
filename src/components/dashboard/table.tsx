import React, {useEffect, useState} from 'react';
import { DataGrid, GridColumns, GridActionsCellItem, GridRowId } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import useRequest from '../../hooks/useRequest';
import { Box, Chip, IconButton, MenuItem, Menu, ListItemIcon } from '@mui/material';
import { Blacklist, Activate, Eye } from '../../assets/icons';
import { urls } from '../../constants/urls';
import moment from 'moment'
import { useNavigate } from "react-router-dom";

// define types and interfaces
type myDate = {
    value: Date
}
interface Prop {
    label : String
}

function CustomChip({label}:Prop){
    var color : string
    var bgcolor : string
    switch (label) {
        case 'inactive': 
            color =  'rgba(84, 95, 125, 1)'
            bgcolor = 'rgba(84, 95, 125, .1)'
            break;
        case 'active':
            color =  'rgba(57, 205, 98, 1)'
            bgcolor = 'rgba(57, 205, 98, .1)' 
            break;
        case 'blacklisted':
            color =  'rgba(228, 3, 59, 1)'
            bgcolor = 'rgba(228, 3, 59, .1)' 
            break;
        default:
            color =  'rgba(233, 178, 0, 1)'
            bgcolor = 'rgba(233, 178, 0, .1)' 
            break;
            
    }
    return (
        <Chip label= {label} sx = {{
            height:'30px', 
            px:0.6,
            color : color,
            bgcolor: bgcolor,
        }} />
    )
}


export default function Table() {
   const [Rows, setRows] = useState<any>([])
   const [loading, setLoading] = useState(true)
   const {getRequest} = useRequest()
   let navigate = useNavigate(); 

    useEffect(() => {
        getRequest(urls.getUsers).then((response) => {
            setRows(response.data)    
        });
        
    }, [])

    useEffect(()=>{
        (Rows.length>0) && setLoading(false)
    }, [Rows])

    const changeStatus = React.useCallback((id: string, param: string) => {
        const newRow = Rows.map((row: any) => {
            return row.id === id ? {...row, status: param} : row
        })
        setRows(newRow)
    },[Rows]);

    const viewUser = (id:string)=>{
        navigate(`/user/${id}`)
    }

    const transactionColumns:GridColumns = [
        {
            field: 'orgName',
            headerName: 'Organization',
            width: 180,
            headerClassName: 'header',
        },
        {
            field: 'userName',
            headerName: 'username',
            width: 120,
            headerClassName: 'header'
        },
        {
            field: 'email',
            headerName: 'email',
            width: 150,
            headerClassName: 'header'

        },
        {
            field: 'phoneNumber',
            headerName: 'Phone Number',
            width: 150,
            headerClassName: 'header'
        },
        {
            field: 'createdAt',
            headerName: 'Date Joined',
            width: 200,
            headerClassName: 'header',
            valueFormatter: (params:myDate) => {
                if (params.value == null) {
                return '';
                }
                const valueFormatted = moment(params.value).format('MMM D, YYYY h:mm A');
                return valueFormatted ;
            }   
        },
        {
            field: 'status',
            editable: true,
            headerName: 'Status',
            width: 150,
            headerClassName: 'header',
            renderCell: (params: any) => {
                return (
                <>
                    <CustomChip label= {params.value?params.value:'Pending'} />
                </>
                )
            }
                
        },
        {
            field: 'actions',
            width: 20,
            headerClassName: 'header',
            type: 'actions',
            getActions: (params: any ) => [
                <GridActionsCellItem
                    icon={<Eye />}
                    label="view details"
                    onClick={()=>viewUser(params.id)}
                    showInMenu
                />,
                <GridActionsCellItem
                    icon={<Blacklist />}
                    label="blacklist user"
                    onClick={()=>changeStatus(params.id, 'blacklisted')}
                    showInMenu
                />,
                <GridActionsCellItem
                    icon={<Activate />}
                    label="activate user"
                    onClick={()=>changeStatus(params.id, 'active')}
                    showInMenu
                />,

                
            ]
        },
    ]

  return (
    <div style={{ height: 'auto', width: '100%' }}>
      <DataGrid
        autoHeight
        sx = {{
            borderRadius: '4px',
            border: '1px solid rgba(33, 63, 125, 0.06)',
            boxShadow: '3px 5px 20px 0px rgba(0, 0, 0, 0.04)',
            p: 2,pl: 4,
            fontWeight: '400',
            fontSize:'14px',
            lineHeight:'16.42px',
            textTransform: 'capitalize',
            color: 'rgba(84, 95, 125, 1)',
            '& .MuiDataGrid-columnSeparator': {
                display: 'none'
            },
            '& .MuiDataGrid-columnHeaders': {
                border: 'none'
            },
            '& .header': {
                textTransform: 'uppercase',
                fontSize:'12px',                
            },
            '& .css-1jbbcbn-MuiDataGrid-columnHeaderTitle' : {
                fontWeight: '600',
            }
        }}
        rowHeight={70}
        rows={Rows}
        columns={transactionColumns}
        loading = {loading}
      />
    </div>
  );
}
