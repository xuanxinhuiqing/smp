package com.yiche.smp.common;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

import sun.misc.BASE64Encoder;

public class FileUtils {
    /**
     * 下载文件时，针对不同浏览器，进行附件名的编码
     *
     * @param filename 下载文件名
     * @param agent    客户端浏览器
     * @return 编码后的下载附件名
     * @throws IOException
     */
    public static String encodeDownloadFilename(String filename, String agent)
            throws IOException {
        if (agent.contains("Firefox")) { // 火狐浏览器
            filename = "=?UTF-8?B?"
                    + new BASE64Encoder().encode(filename.getBytes("iso-8859-1"))
                    + "?=";
            filename = filename.replaceAll("\r\n", "");
        } else { // IE及其他浏览器
            filename = URLEncoder.encode(filename, "utf-8");
            filename = filename.replace("+", " ");
        }
        return filename;
    }

    public static String encodeDownloadFilename1(String filename, String agent) throws UnsupportedEncodingException {
        if (agent.contains("Firefox")) { // 火狐浏览器
            filename = new String(filename.getBytes("UTF-8"), "ISO8859-1");
        } else { // IE及其他浏览器
            filename = URLEncoder.encode(filename, "UTF-8");
        }
        return filename;
    }
}
