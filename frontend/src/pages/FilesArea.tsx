import { useContext, useEffect } from "react";
import FilesContext from "../context/files/FilesContext";
import { TableContainer, Table, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react";
import { TreeView } from "../models/FilesTreeView";

const mapTreeViewToFiles = (treeView: TreeView): File[] => {
    return [];
};

const FilesArea = () => {
    const {state: {treeView}, fetchAllUserFiles} = useContext(FilesContext);

    useEffect(() => {
        fetchAllUserFiles();
    }, []);

    const files = mapTreeViewToFiles(treeView);
    
    return <>
        <TableContainer>
            <Table size='xl'>
                <Thead>
                <Tr>
                    <Th>path</Th>
                    <Th>size</Th>
                </Tr>
                </Thead>
                <Tbody>
                <Tr>
                    <Td>inches</Td>
                    <Td>millimetres (mm)</Td>
                    <Td isNumeric>25.4</Td>
                </Tr>
                <Tr>
                    <Td>feet</Td>
                    <Td>centimetres (cm)</Td>
                    <Td isNumeric>30.48</Td>
                </Tr>
                <Tr>
                    <Td>yards</Td>
                    <Td>metres (m)</Td>
                    <Td isNumeric>0.91444</Td>
                </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    </>;
}

export default FilesArea;