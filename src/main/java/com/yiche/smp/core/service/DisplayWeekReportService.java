package com.yiche.smp.core.service;

import com.yiche.smp.common.DayReport.DayReport;
import com.yiche.smp.common.GatherYicheAPP;
import com.yiche.smp.common.YichePlatform;

import java.util.List;
import java.util.Map;

/**
 * Created by xuhaiqiang on 2018/3/16
 */
public interface DisplayWeekReportService {

    public DayReport selectSumDataWeek(String week, String week1);

    public List<DayReport> getPlatformDataWeek(String week, String week1);

    public Map<String, List<YichePlatform>> getplatformChannelDataWeek(String platformName,String week, String week1);

    public Map<String, List<YichePlatform>> getPcwapchannelDataWeek(String platformName,String week, String week1);

    public Map<String, List<YichePlatform>> getThirdPartychannelDataWeek(String platformName,String week, String week1);
}
