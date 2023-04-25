import { Request, Response } from 'express';
import AdminService from '../service';

export default class AdminController {
  private _adminService: AdminService;
  constructor() {
    this._adminService = new AdminService();

    this.getAll = this.getAll.bind(this);
    this.getOne = this.getOne.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  public async getAll(request: Request, response: Response): Promise<Response> {
    const adminstradores = this._adminService.findAll();
    return response.json(adminstradores);
  }
  public async getOne(request: Request, response: Response): Promise<Response> {
    const reqId = parseInt(request.params.id);
    return response.json(this._adminService.findOne(reqId));
  }
  public async create(request: Request, response: Response): Promise<Response> {
    const administrador = request.body();
    const newAdmin = this._adminService.create(administrador);
    return response.json(newAdmin);
  }
  public async update(request: Request, response: Response): Promise<Response> {
    const administrador = request.body();
    const adminId = parseInt(request.params.id);
    const updateAdmin = this._adminService.update(adminId, administrador);
    return response.json(updateAdmin);
  }
  public async delete(request: Request, response: Response): Promise<Response> {
    const adminId = parseInt(request.params.id);
    this._adminService.remove(adminId);
    return response.json({ message: `o admin ${adminId} removido.` });
  }
}