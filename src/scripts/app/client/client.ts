/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.7.4.0 (NJsonSchema v10.1.26.0 (Newtonsoft.Json v11.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

export interface IClient {
    /**
     * @return Success
     */
    bindicator(): Promise<BinLookup>;
}

export class Client implements IClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : <any>window;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    /**
     * @return Success
     */
    bindicator(): Promise<BinLookup> {
        let url_ = this.baseUrl + "/Bindicator";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "text/plain"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processBindicator(_response);
        });
    }

    protected processBindicator(response: Response): Promise<BinLookup> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            console.log(_responseText);
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = BinLookup.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<BinLookup>(<any>null);
    }
}

export class Bin implements IBin {
    subsequent?: Date;
    next?: Date;
    pdfLink?: string | undefined;
    communal?: boolean;

    constructor(data?: IBin) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.subsequent = _data["subsequent"] ? new Date(_data["subsequent"].toString()) : <any>undefined;
            this.next = _data["next"] ? new Date(_data["next"].toString()) : <any>undefined;
            this.pdfLink = _data["pdfLink"];
            this.communal = _data["communal"];
        }
    }

    static fromJS(data: any): Bin {
        data = typeof data === 'object' ? data : {};
        let result = new Bin();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["subsequent"] = this.subsequent ? this.subsequent.toISOString() : <any>undefined;
        data["next"] = this.next ? this.next.toISOString() : <any>undefined;
        data["pdfLink"] = this.pdfLink;
        data["communal"] = this.communal;
        return data; 
    }
}

export interface IBin {
    subsequent?: Date;
    next?: Date;
    pdfLink?: string | undefined;
    communal?: boolean;
}

export class BinLookup implements IBinLookup {
    rubbish?: Bin;
    recycling?: Bin;
    foodWaste?: Bin;

    constructor(data?: IBinLookup) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.rubbish = _data["rubbish"] ? Bin.fromJS(_data["rubbish"]) : <any>undefined;
            this.recycling = _data["recycling"] ? Bin.fromJS(_data["recycling"]) : <any>undefined;
            this.foodWaste = _data["foodWaste"] ? Bin.fromJS(_data["foodWaste"]) : <any>undefined;
        }
    }

    static fromJS(data: any): BinLookup {
        data = typeof data === 'object' ? data : {};
        let result = new BinLookup();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["rubbish"] = this.rubbish ? this.rubbish.toJSON() : <any>undefined;
        data["recycling"] = this.recycling ? this.recycling.toJSON() : <any>undefined;
        data["foodWaste"] = this.foodWaste ? this.foodWaste.toJSON() : <any>undefined;
        return data; 
    }
}

export interface IBinLookup {
    rubbish?: Bin;
    recycling?: Bin;
    foodWaste?: Bin;
}

export class SwaggerException extends Error {
    message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isSwaggerException = true;

    static isSwaggerException(obj: any): obj is SwaggerException {
        return obj.isSwaggerException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
    throw new SwaggerException(message, status, response, headers, result);
}