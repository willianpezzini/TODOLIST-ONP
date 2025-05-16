export interface Task {
    id: string;
    descrição: string;
    data: string;
    status: 'fazer' | 'fazendo' | 'finalizado';
}