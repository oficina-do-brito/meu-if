import { Request, Response } from 'express';
import AdminService from '../service';

export default class AdminController {
  private _adminService: AdminService;

  constructor() {
    this._adminService = new AdminService();
  }

  getAll = async (request: Request, response: Response): Promise<Response> => {
    const adminstradores = await this._adminService.findAll();
    return response.json(adminstradores).status(200);
  };

  getOne = async (request: Request, response: Response): Promise<Response> => {
    const reqId = parseInt(request.params.id);
    const administrador = await this._adminService.findOne(reqId);
    if (administrador) {
      return response.json(administrador).status(200);
    }
    return response
      .json({ message: 'Recurso solicitado não existe.' })
      .status(404);
  };

  create = async (request: Request, response: Response): Promise<Response> => {
    const administrador = request.body;
    const newAdmin = await this._adminService.create(administrador);
    if (newAdmin) {
      return response.json(newAdmin).status(201);
    }
    return response
      .json({
        message:
          'não foi possivel criar usuario, ja existe no sistema, tente recuperar suas credenciais',
      })
      .status(200);
  };

  update = async (request: Request, response: Response): Promise<Response> => {
    const administrador = request.body;
    const adminId = parseInt(request.params.id);
    const updateAdmin = this._adminService.update(adminId, administrador);
    if (updateAdmin) {
      return response.json(administrador).status(200);
    }
    response.json({ message: 'erro durante a atualização' }).status(400);
  };

  delete = async (request: Request, response: Response): Promise<Response> => {
    const adminId = parseInt(request.params.id);
    this._adminService.remove(adminId);
    return response.json({ message: `o admin ${adminId} removido.` });
  };
}
