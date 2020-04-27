import { Controller } from 'egg';

import { ExchangeService, ExchangeVersion, WebCredentials, Uri, EmailMessage, MessageBody } from "ews-javascript-api";
var exch = new ExchangeService(ExchangeVersion.Exchange2016);
exch.Credentials = new WebCredentials('xiangjiamin@hlmc.cn', 'Simplyme08213')
exch.Url = new Uri('https://mail.hlmc.cn/Ews/Exchange.asmx')
export default class EmailController extends Controller {
    public async index() {
        const { ctx } = this;
        exch.AutodiscoverUrl('xiangjiamin@hlmc.cn').then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
        const message = new EmailMessage(exch)
        message.Subject = 'testdsfasd'
        message.Body = new MessageBody();
        message.Body.Text = "Sent using the EWS Managed API.";
        message.ToRecipients.Add('15757173682@163.com')
        message.SendAndSaveCopy().then(res=>{
            console.log(res)
        }).catch(Err=>{
            console.log(Err)
        })
        ctx.body ='test'
    }
}
