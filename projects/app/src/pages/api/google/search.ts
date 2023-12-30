import type { NextApiRequest, NextApiResponse } from 'next';
import { jsonRes } from '@fastgpt/service/common/response';
import { GetApiKeyProps } from '@/global/support/google/api';
import { request } from '@fastgpt/service/common/api/plusRequest';

const googleSearchKey = 'AIzaSyAppyw6iBKRuQhS08wbSV48J6LxD63mM_M';
const googleCxId = '509ede69ee606435a';
const baseurl = 'https://www.googleapis.com/customsearch/v1';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // const { searchKey } = req.query as GetApiKeyProps;
    const { searchKey } = req.body as GetApiKeyProps;

    if (!searchKey) {
      return jsonRes(
        res,
        {
          data: {
            prompt: ``
          }
        },
        {
          no_body: true
        }
      );
    }

    const request_url = `${baseurl}`;

    console.log('当前搜索内容', searchKey);
    console.log('当前搜搜地址', request_url);

    // const { data } = await request(`${request_url}`, {
    //   q: searchKey,
    //   cx: googleCxId,
    //   key: googleSearchKey,
    //   c2coff: 1,
    //   start: 1,
    //   end: 5,
    //   dateRestrict: 'm[1]'
    // }, {}, 'GET',);
    //
    // const result = data.items.map((item: any) => item.snippet).join('\n');

    let result = `你好的英文为hello`;

    return jsonRes(
      res,
      {
        data: {
          prompt: `搜索词: ${searchKey};google 搜索结果: ${result}`
        }
      },
      {
        no_body: true
      }
    );
  } catch (err) {
    jsonRes(res, {
      code: 500,
      error: err
    });
  }
}
